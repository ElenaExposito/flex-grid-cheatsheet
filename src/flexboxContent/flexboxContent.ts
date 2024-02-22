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

      <div class="container-properties">
        <h2>Container Properties</h2>

        <div class="properties">
          <h3>Display</h3>
          <div class="display">
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

            <div class="property" id="display-inline-flex">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >display</a
                >: inline-flex;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="display: inline-flex;"
              />
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Ordering and Orientation</h3>

          <div class="flex-direction">
            <div class="property" id="flex-direction-row">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >flex-direction</a
                >: row;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-direction: row;"
              />
            </div>

            <div class="property" id="flex-direction-row-reverse">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >flex-direction</a
                >: row-reverse;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-direction: row-reverse;"
              />
            </div>

            <div class="property" id="flex-direction-column">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >flex-direction</a
                >: column;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-direction: column;"
              />
            </div>

            <div class="property" id="flex-direction-column-reverse">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >flex-direction</a
                >: column-reverse;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-direction: column-reverse;"
              />
            </div>
          </div>

          <div class="flex-wrap">
            <div class="property" id="flex-wrap-nowrap">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >flex-wrap</a
                >: nowrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-wrap: nowrap;"
              />
            </div>

            <div class="property" id="flex-wrap-wrap">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >flex-wrap</a
                >: wrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-wrap: wrap;"
              />
            </div>

            <div class="property" id="flex-wrap-wrap-reverse">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                  target="_blank"
                  rel="noopener"
                  >flex-wrap</a
                >: wrap-reverse;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-wrap: wrap-reverse;"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container-properties">
        <h2>Item Properties</h2>

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
            <img
              src="${imagesPath}/prueba.png"
              alt="justify-content: flex-start;"
            />
          </div>
        </div>
      </div>
    </main>

    <script src="${scriptPath}/custom.js"></script>
  </body>
</html>


  `;
}
