/**
 * talk — interactive, continuous chat with your NanoClaw agent from the terminal.
 *
 * Usage:
 *   pnpm run talk
 *
 * Unlike `pnpm run chat <message>` (one-shot: send → wait → exit), this opens a
 * persistent prompt over the same CLI channel (Unix socket). Type a line, press
 * Enter, read the reply, keep going. The agent session keeps its memory across
 * turns, so it's a real back-and-forth conversation.
 *
 * Commands inside the prompt:
 *   /exit  or  /quit   — leave
 *   Ctrl-C / Ctrl-D    — leave
 *
 * Preconditions: NanoClaw host service running, an agent group wired to
 * `cli/local` (done by setup / `/init-first-agent`).
 */
import net from 'net';
import path from 'path';
import readline from 'readline';

import { DATA_DIR } from '../src/config.js';

// After the first reply chunk of a turn, wait this long with no further output
// before handing the prompt back to the user. Replies stream as multiple lines;
// this debounces "the agent is done talking".
const SILENCE_MS = 2500;
// If the agent says nothing at all after a send, give up waiting on this turn
// (cold model load on the first turn can be slow — keep this generous).
const TURN_TIMEOUT_MS = 180_000;

function socketPath(): string {
  return path.join(DATA_DIR, 'cli.sock');
}

const socket = net.connect(socketPath());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\x1b[36myou ›\x1b[0m ', // cyan prompt
});

// Per-turn state: are we currently waiting for (and streaming) a reply?
let awaitingReply = false;
let sawReplyThisTurn = false;
let silenceTimer: NodeJS.Timeout | null = null;
let turnTimer: NodeJS.Timeout | null = null;
// If the user types while a reply is still streaming, hold it and send when the
// turn finishes — so a fast typist never loses a message.
const queued: string[] = [];

function clearTimers(): void {
  if (silenceTimer) {
    clearTimeout(silenceTimer);
    silenceTimer = null;
  }
  if (turnTimer) {
    clearTimeout(turnTimer);
    turnTimer = null;
  }
}

/** The agent has gone quiet — end this turn and prompt the user again. */
function finishTurn(): void {
  clearTimers();
  awaitingReply = false;
  sawReplyThisTurn = false;
  process.stdout.write('\n');
  const next = queued.shift();
  if (next !== undefined) {
    process.stdout.write(`\x1b[36myou ›\x1b[0m ${next}\n`);
    send(next);
    return;
  }
  rl.prompt();
}

function scheduleSilenceExit(): void {
  if (silenceTimer) clearTimeout(silenceTimer);
  silenceTimer = setTimeout(finishTurn, SILENCE_MS);
}

function send(text: string): void {
  awaitingReply = true;
  sawReplyThisTurn = false;
  socket.write(JSON.stringify({ text }) + '\n');
  process.stdout.write('\x1b[90m…thinking\x1b[0m\r'); // dim hint, overwritten by reply
  turnTimer = setTimeout(() => {
    if (!sawReplyThisTurn) {
      process.stdout.write('\x1b[33m(no reply — the agent may still be loading the model; try again)\x1b[0m\n');
      finishTurn();
    }
  }, TURN_TIMEOUT_MS);
}

socket.on('error', (err) => {
  const e = err as NodeJS.ErrnoException;
  if (e.code === 'ENOENT' || e.code === 'ECONNREFUSED') {
    console.error(`\nNanoClaw daemon not reachable at ${socketPath()}.`);
    console.error('Start the service first, e.g.:');
    console.error('  launchctl kickstart -k gui/$(id -u)/com.nanoclaw-v2-93bb2c8f');
  } else {
    console.error('\nCLI socket error:', err);
  }
  process.exit(2);
});

socket.on('connect', () => {
  process.stdout.write('\x1b[1mConnected to your NanoClaw agent.\x1b[0m Type a message, /exit to quit.\n\n');
  rl.prompt();
});

let buffer = '';
socket.on('data', (chunk) => {
  buffer += chunk.toString('utf8');
  let idx: number;
  while ((idx = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, idx).trim();
    buffer = buffer.slice(idx + 1);
    if (!line) continue;
    try {
      const msg = JSON.parse(line);
      if (typeof msg.text === 'string') {
        if (!sawReplyThisTurn) {
          // First chunk: clear the "…thinking" hint and label the speaker.
          process.stdout.write('\x1b[2K\r\x1b[35mbot ›\x1b[0m ');
          sawReplyThisTurn = true;
          if (turnTimer) {
            clearTimeout(turnTimer);
            turnTimer = null;
          }
        }
        process.stdout.write(msg.text + '\n');
        scheduleSilenceExit();
      }
    } catch {
      // Ignore non-JSON lines (forward compatibility with the chat protocol).
    }
  }
});

socket.on('close', () => {
  clearTimers();
  console.log('\nConnection closed.');
  process.exit(0);
});

rl.on('line', (input) => {
  const text = input.trim();
  if (!text) {
    rl.prompt();
    return;
  }
  if (text === '/exit' || text === '/quit') {
    rl.close();
    return;
  }
  if (awaitingReply) {
    // Still streaming the previous reply — queue this and send when it finishes,
    // so we keep clean turn boundaries without dropping the user's message.
    queued.push(text);
    process.stdout.write('\x1b[33m(queued — will send after the current reply)\x1b[0m\n');
    return;
  }
  send(text);
});

rl.on('close', () => {
  socket.end();
  console.log('\nBye.');
  process.exit(0);
});
