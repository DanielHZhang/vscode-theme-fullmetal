import fs from 'node:fs/promises';
import {createServer} from 'node:net';
import os from 'node:os';
import path from 'node:path';

import {runTests} from '@vscode/test-electron';

const server = createServer();
await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
const address = server.address();
if (!address || typeof address === 'string') throw new Error('Cannot reserve debugging port');
const port = address.port;
await new Promise<void>((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'fullmetal-smoke-'));
try {
  await runTests({
    version: process.env.VSCODE_TEST_VERSION ?? '1.140.0',
    ...(process.env.VSCODE_EXECUTABLE_PATH ? {vscodeExecutablePath: process.env.VSCODE_EXECUTABLE_PATH} : {}),
    extensionDevelopmentPath: process.cwd(),
    extensionTestsPath: path.resolve('build/vscode/icon-smoke-test.js'),
    extensionTestsEnv: {FULLMETAL_CDP_PORT: String(port)},
    launchArgs: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-workspace-trust',
      '--skip-welcome',
      '--skip-release-notes',
      `--user-data-dir=${path.join(temporary, 'user')}`,
      `--extensions-dir=${path.join(temporary, 'extensions')}`,
      `--remote-debugging-port=${port}`,
    ],
  });
} finally {
  await fs.rm(temporary, {recursive: true, force: true});
}
