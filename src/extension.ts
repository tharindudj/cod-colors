// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getColorType } from './utils/getColorType';
import { formatColor } from './utils/format';
import { toCodColor } from './utils/toCodColor';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "COD Colors" is now active!');

  const convertToCod = vscode.commands.registerCommand('cod-colors.convertToCod', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			// Get the word within the selection
      const selectedText = document.getText(selection).trim();
      const colorType = getColorType(selectedText);
      console.log(colorType.type);
      const formatedColor = formatColor(colorType);
      console.log(formatedColor);
      const codColor = toCodColor(formatedColor);
      editor.edit(editBuilder => {
        editBuilder.replace(selection, codColor);
      });
		}
  });

  context.subscriptions.push(convertToCod);
}

// this method is called when your extension is deactivated
export function deactivate() {}