import { WebviewViewProvider, WebviewView, Webview, Uri, EventEmitter, window} from "vscode";
import { Utils } from "utils";
import CodColorgen from 'components/CodColorgen';
import * as ReactDOMServer from "react-dom/server";

export class LeftPanelWebview implements WebviewViewProvider {
	constructor(
		private readonly extensionPath: Uri,
		private data: any,
		private _view: any = null
	) {}
    private onDidChangeTreeData: EventEmitter<any | undefined | null | void> = new EventEmitter<any | undefined | null | void>();

    refresh(context: any): void {
        this.onDidChangeTreeData.fire(null);
        this._view.webview.html = this._getHtmlForWebview(this._view?.webview);
    }

	//called when a view first becomes visible
	resolveWebviewView(webviewView: WebviewView): void | Thenable<void> {
		webviewView.webview.options = {
			enableScripts: true,
			localResourceRoots: [this.extensionPath],
		};
		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
		this._view = webviewView;
		this.activateMessageListener();
	}

	private activateMessageListener() {
		this._view.webview.onDidReceiveMessage((message) => {
			switch (message.action){
				case 'SHOW_WARNING_LOG':
					window.showWarningMessage(message.data.message);
					break;
				default:
					break;
			}
		});
	}

	private _getHtmlForWebview(webview: Webview) {
		// Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
		// Script to handle user action
		const scriptUri = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "color-picker.js")
		);
		const jquery = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "jquery-3.5.1.min.js")
		);
		const clipboard = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "clipboard.min.js")
		);
		const bootstrap = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "bootstrap.min.js")
		);
		const jscolor = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "jscolor.js")
		);
		const constantUri = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "constant.js")
		);
		// CSS file to handle styling
		const styleUri = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "color-picker.css")
		);
		//vscode-icon file from codicon lib
		const codiconsUri = webview.asWebviewUri(
			Uri.joinPath(this.extensionPath, "script", "codicon.css")
		);
		// Use a nonce to only allow a specific script to be run.
		const nonce = Utils.getNonce();

		return `<html>
                <head>
                    <meta charSet="utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">

                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="${codiconsUri}" rel="stylesheet" />
                    <link href="${styleUri}" rel="stylesheet">
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
					<script nonce="${nonce}" src="${jquery}"></script>
					<script nonce="${nonce}" src="${jscolor}"></script>
					<script nonce="${nonce}" src="${bootstrap}"></script>
					<script nonce="${nonce}" src="${clipboard}"></script>
					<script>
					jscolor.presets.default = {
						position:'bottom', backgroundColor:'#fafafaff', 
						borderColor:'rgba(72,51,187,1)', closeButton:true, 
						closeText:'Generate', controlBorderColor:'rgba(72,4,187,1)', 
						shadowColor:'rgba(57,162,255,0.2)',
						hideOnLeave: true,
						onInput: function(){
							const color=this.toHEXString();$("#t1").css("color",color),$("#t2").css("color",color),$(".btn").css("border", "1px solid " + color);var r=round(hexToRGB(color)[0]/255),g=round(hexToRGB(color)[1]/255),b=round(hexToRGB(color)[2]/255),colorCode="("+r+", "+g+", "+b+");",colorCodeMenu=r+" "+g+" "+b+"  1";function hexToRGB(o){let r=0,c=0,l=0;return 4===o.length?(r="0x"+o[1]+o[1],c="0x"+o[2]+o[2],l="0x"+o[3]+o[3]):7===o.length&&(r="0x"+o[1]+o[2],c="0x"+o[3]+o[4],l="0x"+o[5]+o[6]),[+r,+c,+l]}function round(o){var r=Number((100*Math.abs(o)).toPrecision(15));return Math.round(r)/100*Math.sign(o)}$("#in1").val(colorCode),$("#in2").val("color = "+colorCode),$("#in3").val("glowcolor = "+colorCode),$("#in4").val(colorCodeMenu),$("#t1").css("color",color),$("#t2").css("color",color);
						}
					};
					</script>

                </head>
                <body>
                    ${ReactDOMServer.renderToString((
							<CodColorgen />
						))
                    }
					<script nonce="${nonce}" type="text/javascript" src="${constantUri}"></script>
					<script nonce="${nonce}" src="${scriptUri}"></script>
				</body>
            </html>`;
	}
}
