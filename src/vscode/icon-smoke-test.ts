import assert from 'node:assert/strict';

import * as vscode from 'vscode';

// Inspect the actual renderer's generated CSS and loaded font, not just the setting value.
export const run = async (): Promise<void> => {
  await vscode.workspace
    .getConfiguration('workbench')
    .update('productIconTheme', 'fullmetal-fluent', vscode.ConfigurationTarget.Global);
  const port = process.env.FULLMETAL_CDP_PORT;
  assert(port);
  const targets = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()) as {
    type: string;
    webSocketDebuggerUrl: string;
  }[];
  const target = targets.find((target) => target.type === 'page');
  assert(target, 'VS Code renderer debugging target exists');
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise<void>((resolve, reject) => {
    socket.addEventListener('open', () => resolve(), {once: true});
    socket.addEventListener('error', () => reject(new Error('Cannot connect to VS Code renderer')), {once: true});
  });
  try {
    const result = await new Promise<{
      result?: {value?: {font: string; inherited: boolean; brand: boolean; loaded: boolean; square: boolean}};
      exceptionDetails?: unknown;
    }>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Renderer smoke test timed out')), 30_000);
      socket.addEventListener('message', (event) => {
        const message = JSON.parse(String(event.data));
        if (message.id === 1) {
          clearTimeout(timeout);
          resolve(message.result);
        }
      });
      socket.send(
        JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            awaitPromise: true,
            returnByValue: true,
            expression: `(async () => {
          const probe = document.createElement('span');
          document.body.append(probe);
          probe.style.cssText = 'position:fixed;font-size:16px';
          const style = id => { probe.className = 'codicon codicon-' + id; return getComputedStyle(probe, '::before'); };
          try {
            for (let i = 0; i < 100; i++) {
              if (style('add').fontFamily.includes('fullmetal-fluent')) break;
              await new Promise(resolve => setTimeout(resolve, 100));
            }
            const font = style('add').fontFamily;
            const character = style('add').content.slice(1, -1);
            await document.fonts.load('16px ' + font, character);
            const inherited = style('widget-close').content === style('close').content && style('widget-close').fontFamily === font;
            const brand = !style('github').fontFamily.includes('fullmetal-fluent');
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = '16px ' + font;
            return {font, inherited, brand, loaded: document.fonts.check('16px ' + font, character), square: Math.abs(context.measureText(character).width - 16) < 0.1};
          } finally { probe.remove(); }
        })()`,
          },
        })
      );
    });
    assert(!result.exceptionDetails, JSON.stringify(result.exceptionDetails));
    const value = result.result?.value;
    assert(value, 'Renderer returned smoke test results');
    assert(value.font.includes('fullmetal-fluent'), 'Fullmetal font selected by renderer CSS');
    assert(value.loaded, 'WOFF loaded by Chromium');
    assert(value.inherited, 'Workbench alias inherits the themed close icon');
    assert(value.brand, 'Brand artwork retains its native font');
    assert(value.square, 'Glyph advance is exactly 16px at UI size');
    console.log('Fullmetal icon renderer smoke test passed:', value);
  } finally {
    socket.close();
  }
};
