import * as vscode from 'vscode';

import {schemaNames} from './schema-names.ts';

export const activate = (context: vscode.ExtensionContext): void => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  context.subscriptions.push(
    vscode.commands.registerCommand('saveBuiltInSchemas', async () => {
      const baseUri = vscode.workspace.workspaceFolders?.[0].uri;
      if (baseUri) {
        const outputDir = vscode.Uri.joinPath(baseUri, 'schemas');
        await vscode.workspace.fs.createDirectory(outputDir);

        await Promise.all(
          schemaNames.map(async (name) => {
            const schemaUri = vscode.Uri.parse(`vscode://schemas/${name}`);
            const jsonDoc = await vscode.workspace.openTextDocument(schemaUri);
            const schema = JSON.parse(jsonDoc.getText());

            if (name === 'workbench-colors') {
              const extensionsUri = vscode.Uri.joinPath(vscode.Uri.file(vscode.env.appRoot), 'extensions');
              const extensions = await vscode.workspace.fs.readDirectory(extensionsUri);
              await Promise.all(
                extensions
                  .filter(([, type]) => type === vscode.FileType.Directory)
                  .map(async ([extension]) => {
                    const manifestUri = vscode.Uri.joinPath(extensionsUri, extension, 'package.json');
                    let manifestBytes: Uint8Array;
                    try {
                      manifestBytes = await vscode.workspace.fs.readFile(manifestUri);
                    } catch (error) {
                      if (error instanceof vscode.FileSystemError && error.code === 'FileNotFound') return;
                      throw error;
                    }
                    const manifest: unknown = JSON.parse(decoder.decode(manifestBytes));
                    if (!manifest || typeof manifest !== 'object' || !('contributes' in manifest)) return;
                    const {contributes} = manifest;
                    if (!contributes || typeof contributes !== 'object' || !('colors' in contributes)) return;
                    if (!Array.isArray(contributes.colors)) return;

                    const messagesUri = vscode.Uri.joinPath(extensionsUri, extension, 'package.nls.json');
                    let messages: Record<string, unknown> = {};
                    try {
                      const parsed: unknown = JSON.parse(
                        decoder.decode(await vscode.workspace.fs.readFile(messagesUri))
                      );
                      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                        messages = Object.fromEntries(Object.entries(parsed));
                      }
                    } catch (error) {
                      if (!(error instanceof vscode.FileSystemError && error.code === 'FileNotFound')) throw error;
                    }

                    const colors: unknown[] = contributes.colors;
                    for (const color of colors) {
                      if (!color || typeof color !== 'object' || !('id' in color) || typeof color.id !== 'string') {
                        continue;
                      }
                      const description =
                        'description' in color && typeof color.description === 'string' ? color.description : '';
                      const key = description.match(/^%(.+)%$/)?.[1];
                      const translated = key ? messages[key] : undefined;
                      schema.properties[color.id] ??= {
                        description: typeof translated === 'string' ? translated : description,
                        oneOf: [
                          {type: 'string', format: 'color-hex'},
                          {type: 'string', const: 'default'},
                        ],
                      };
                    }
                  })
              );
            }

            const formatted = `${JSON.stringify(schema, null, 2)}\n`;
            await vscode.workspace.fs.writeFile(
              vscode.Uri.joinPath(outputDir, `${name}.json`),
              encoder.encode(formatted)
            );
          })
        );
      }
    })
  );
};

export const deactivate = () => undefined;
