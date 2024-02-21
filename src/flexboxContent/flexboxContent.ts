import { Uri } from "vscode";

export function getWebviewContent(
  cspSource: string,
  scriptPath: Uri,
  stylePath: Uri,
  imagesPath: Uri
) {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Flexbox Cheatsheet</title>
      <link rel="stylesheet" href="${stylePath}/custom.css" />
    </head>
  
    <body>
      <main>
        <h1>Flexbox Cheatsheet</h1>
  
        <h2>Container Properties</h2>
  
        <div class="properties">
          <h3>Display</h3>
          <div class="property" id="display-flex">
            <div>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                target="_blank"
                rel="noopener"
                >display</a
              >: flex;
            </div>
            <img src="${imagesPath}/display-flex.svg" alt="display: flex;" />
          </div>
        </div>
  
        <div class="properties">
          <h3>Ordering and orientation</h3>
          <div class="property" id="justify-start">
            <div>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                target="_blank"
                rel="noopener"
                >justify-content</a
              >: flex-start;
            </div>
            <img src="${imagesPath}/prueba.png" alt="justify-content: flex-start;" />
          </div>
        </div>
      </main>

      <script src="${scriptPath}/custom.js"></script>
    </body>
  </html>  
  `;
}
