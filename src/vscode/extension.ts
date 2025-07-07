import * as vscode from 'vscode';
import {format} from 'prettier';
import {prettierOptions} from '../utils';

const schemaNames = ['color-theme', 'textmate-colors', 'token-styling', 'workbench-colors'];

export const activate = (context: vscode.ExtensionContext): void => {
  const encoder = new TextEncoder();
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
            const formatted = await format(jsonDoc.getText(), prettierOptions);
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

export const deactivate = (): undefined => undefined;
