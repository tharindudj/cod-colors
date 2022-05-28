try {
	require("module-alias/register");
} catch (e) {
	console.log("module-alias import error !");
}
import * as vscode from "vscode";
import { EXTENSION_CONSTANT } from "constant";
import { LeftPanelWebview } from "providers/colorgen-provider";
import { getColorType } from './utils/getColorType';
import { formatColor } from './utils/format';
import { toCodColor } from './utils/toCodColor';

export function activate(context: vscode.ExtensionContext) {

	const convertToCod = vscode.commands.registerCommand('cod-colors.convertToCod', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			// Get the word within the selection
      const selectedText = document.getText(selection).trim();
      const colorType = getColorType(selectedText);
      console.log(colorType.type);
      const formattedColor = formatColor(colorType);
      const codColor = toCodColor(formattedColor);
      editor.edit(editBuilder => {
        editBuilder.replace(selection, codColor);
      });
		}
  });
	context.subscriptions.push(convertToCod);

	// Register view
	const leftPanelWebViewProvider = new LeftPanelWebview(context?.extensionUri, {});
	let view = vscode.window.registerWebviewViewProvider(
		EXTENSION_CONSTANT.LEFT_PANEL_WEBVIEW_ID,
		leftPanelWebViewProvider,
	);
	context.subscriptions.push(view);

};

// this method is called when your extension is deactivated
export function deactivate() {}
