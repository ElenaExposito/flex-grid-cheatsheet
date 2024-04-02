import * as vscode from "vscode";
import { join } from "path";

import { getWebviewContentFlex } from "./flexboxContent/flexboxContent";
import { getWebviewContentGrid } from "./gridboxContent/gridboxContent";

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

  // Create a new WebView panel
  function createWebViewPanel(
    context: vscode.ExtensionContext,
    title: string,
    contentProvider: (
      cspSource: string,
      scriptPath: vscode.Uri,
      stylePath: vscode.Uri,
      imagesPath: vscode.Uri
    ) => string
  ) {
    const styleRoot = vscode.Uri.file(join(context.extensionPath, "style"));
    const imagesRoot = vscode.Uri.file(join(context.extensionPath, "images"));
    const scriptRoot = vscode.Uri.file(join(context.extensionPath, "js"));

    const panel = vscode.window.createWebviewPanel(
      title.toLowerCase().replace(" ", ""),
      title,
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

    panel.webview.html = contentProvider(
      cspSource,
      scriptPath,
      stylePath,
      imagesPath
    );

    panel.webview.onDidReceiveMessage(
      (message) => {
        if (message.command === "textCopied") {
          vscode.window.showInformationMessage(`Text copied: ${message.text}`);
        }
      },
      undefined,
      context.subscriptions
    );
  }

  // Create a new WebView panel for Flexbox
  let openFlexboxView = vscode.commands.registerCommand(
    "flex-grid-cheatsheet.openFlexboxView",
    () => {
      createWebViewPanel(context, "Flexbox Cheatsheet", getWebviewContentFlex);
    }
  );

  // Create a new WebView panel for Grid
  let openGridView = vscode.commands.registerCommand(
    "flex-grid-cheatsheet.openGridboxView",
    () => {
      createWebViewPanel(context, "Grid Cheatsheet", getWebviewContentGrid);
    }
  );

  context.subscriptions.push(helloWorld);
  context.subscriptions.push(goodBye);
  context.subscriptions.push(openFlexboxView);
  context.subscriptions.push(openGridView);
}

export function deactivate() {}
