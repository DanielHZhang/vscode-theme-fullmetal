import * as vscode from 'vscode';

export const run = async (): Promise<void> => {
  await vscode.commands.executeCommand('saveBuiltInSchemas');
};
