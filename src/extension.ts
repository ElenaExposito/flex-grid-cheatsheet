import * as vscode from "vscode";
import { join } from "path";

import { getWebviewContent } from "./flexboxContent/flexboxContent";

export function activate(context: vscode.ExtensionContext) {
  // Hello and Good Bye commands
  let helloWorld = vscode.commands.registerCommand(
    "flex-grid-cheatsheet.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from flex-grid-cheatsheet!"
      );
    }
  );
  let goodBye = vscode.commands.registerCommand(
    "flex-grid-cheatsheet.goodBye",
    () => {
      vscode.window.showInformationMessage(
        "Good bye from flex-grid-cheatsheet!"
      );
    }
  );

  // Create a new WebView panel, configure local resource paths and sets an HTML content
  let openFlexboxView = vscode.commands.registerCommand(
    "flex-grid-cheatsheet.openFlexboxView",
    () => {
      const styleRoot = vscode.Uri.file(join(context.extensionPath, "style"));
      const imagesRoot = vscode.Uri.file(join(context.extensionPath, "images"));
      const scriptRoot = vscode.Uri.file(join(context.extensionPath, "js"));

      // Generate and show a new WebView panel
      const panel = vscode.window.createWebviewPanel(
        "flexboxCheatsheet",
        "Flexbox Cheatsheet",
        vscode.ViewColumn.Two,
        {
          localResourceRoots: [styleRoot, imagesRoot, scriptRoot],
          enableScripts: true,
        }
      );

      const stylePath = panel.webview.asWebviewUri(styleRoot);
      const imagesPath = panel.webview.asWebviewUri(imagesRoot);
      const scriptPath = panel.webview.asWebviewUri(scriptRoot);
      const cspSource = panel.webview.cspSource;

      panel.webview.html = getWebviewContent(
        cspSource,
        scriptPath,
        stylePath,
        imagesPath
      );

      panel.webview.onDidReceiveMessage(
        (message) => {
          if (message.command === "textCopied") {
            vscode.window.showInformationMessage(
              `Text copied: ${message.text}`
            );
          }
        },
        undefined,
        context.subscriptions
      );
    }
  );

  context.subscriptions.push(helloWorld);
  context.subscriptions.push(goodBye);
  context.subscriptions.push(openFlexboxView);
}

export function deactivate() {}
