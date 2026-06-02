import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const thumbDir = path.join(root, 'public', 'project-thumbs');
const viewport = { width: 1440, height: 900 };

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);

const chrome = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chrome) {
  throw new Error('Chrome or Edge was not found. Set CHROME_PATH to a Chromium-based browser executable.');
}

const shots = [
  { url: 'https://dtechsystems.pl', file: 'dtech-systems.jpg' },
  { url: 'https://cezab-distribution.pl', file: 'cezab-distribution.jpg' },
  { url: 'https://motorline.pl', file: 'motorline.jpg' },
  { url: 'https://giovidoors.pl', file: 'giovidoors.jpg' },
  { url: 'https://neon-chebakia-a60491.netlify.app', file: 'giovi-pricing-tool.jpg' },
  { url: 'https://cezab24.pl', file: 'cezab24.jpg', consentClick: { x: 1064, y: 596 } },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDevtoolsPort(profileDir) {
  const portFile = path.join(profileDir, 'DevToolsActivePort');
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const text = await readFile(portFile, 'utf8');
      return text.trim().split('\n')[0];
    } catch {
      await delay(100);
    }
  }
  throw new Error('Chrome did not expose a DevTools port.');
}

function connectToPage(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();

  socket.addEventListener('message', (event) => {
    const payload = JSON.parse(event.data);
    if (!payload.id) return;
    const request = pending.get(payload.id);
    if (!request) return;
    pending.delete(payload.id);
    if (payload.error) {
      request.reject(new Error(payload.error.message));
      return;
    }
    request.resolve(payload.result);
  });

  const opened = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  return {
    opened,
    send(method, params = {}) {
      id += 1;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() {
      socket.close();
    },
  };
}

async function createPage(port) {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' });
  if (!response.ok) {
    throw new Error(`Could not create Chrome target: ${response.status}`);
  }
  return response.json();
}

async function captureShot(shot) {
  const profileDir = path.join(thumbDir, `.profile-${path.parse(shot.file).name}`);
  await rm(profileDir, { recursive: true, force: true });
  await mkdir(profileDir, { recursive: true });

  const chromeProcess = spawn(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--disable-extensions',
    '--disable-background-networking',
    '--hide-scrollbars',
    '--ignore-certificate-errors',
    '--no-first-run',
    '--remote-debugging-port=0',
    `--user-data-dir=${profileDir}`,
    `--window-size=${viewport.width},${viewport.height}`,
    'about:blank',
  ]);

  try {
    const port = await waitForDevtoolsPort(profileDir);
    const target = await createPage(port);
    const page = connectToPage(target.webSocketDebuggerUrl);
    await page.opened;
    await page.send('Page.enable');
    await page.send('Runtime.enable');
    await page.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await page.send('Page.navigate', { url: shot.url });
    await delay(9000);
    await page.send('Runtime.evaluate', {
      expression: `(() => {
        const words = ['zaakceptuj wszystkie', 'accept all', 'akceptuj', 'akceptuję', 'accept'];
        const nodes = [...document.querySelectorAll('button, a, input[type="button"], input[type="submit"]')];
        const found = nodes.find((node) => {
          const label = (node.innerText || node.value || node.getAttribute('aria-label') || '').trim().toLowerCase();
          return words.some((word) => label.includes(word));
        });
        if (found) {
          found.click();
          return true;
        }
        return false;
      })()`,
    });
    if (shot.consentClick) {
      await page.send('Input.dispatchMouseEvent', {
        type: 'mousePressed',
        button: 'left',
        clickCount: 1,
        x: shot.consentClick.x,
        y: shot.consentClick.y,
      });
      await page.send('Input.dispatchMouseEvent', {
        type: 'mouseReleased',
        button: 'left',
        clickCount: 1,
        x: shot.consentClick.x,
        y: shot.consentClick.y,
      });
    }
    await delay(1800);
    const screenshot = await page.send('Page.captureScreenshot', {
      format: 'jpeg',
      quality: 82,
      fromSurface: true,
      captureBeyondViewport: false,
    });
    await writeFile(path.join(thumbDir, shot.file), Buffer.from(screenshot.data, 'base64'));
    page.close();
  } finally {
    chromeProcess.kill();
    await delay(300);
  }
}

await mkdir(thumbDir, { recursive: true });

for (const shot of shots) {
  console.log(`Capturing ${shot.file} from ${shot.url}`);
  await captureShot(shot);
}
