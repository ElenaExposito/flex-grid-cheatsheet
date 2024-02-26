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
          <h3>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
              target="_blank"
              rel="noopener"
              >Display
            </a>
          </h3>

          <div class="display-flex">
            <div class="property" id="display-flex">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#flex"
                  target="_blank"
                  rel="noopener"
                  >display: flex;</a
                >
              </div>
              <div class="show">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="display-inline-flex">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#inline-flex"
                  target="_blank"
                  rel="noopener"
                  >display: inline-flex;</a
                >
              </div>
              <div class="show show-display-inline-flex">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Ordering and Orientation</h3>

          <div class="flex-direction">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"
                target="_blank"
                rel="noopener"
                >flex-direction</a
              >
            </h4>
            <div class="property" id="flex-direction-row">
              <div>
                <span class="property-title">flex-direction</span>: row;
              </div>
              <div class="show show-flex-direction-row">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-direction-row-reverse">
              <div>
                <span class="property-title">flex-direction</span>: row-reverse;
              </div>
              <div class="show show-flex-direction-row-reverse">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-direction-column">
              <div>
                <span class="property-title">flex-direction</span>: column;
              </div>
              <div class="show show-flex-direction-column">
                <span class="item-reverse item-1"></span>
                <span class="item-reverse item-2"></span>
                <span class="item-reverse item-3"></span>
                <span class="item-reverse item-4"></span>
                <span class="item-reverse item-5"></span>
                <span class="item-reverse item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-direction-column-reverse">
              <div>
                <span class="property-title">flex-direction</span>:
                column-reverse;
              </div>
              <div class="show show-flex-direction-column-reverse">
                <span class="item-reverse item-1"></span>
                <span class="item-reverse item-2"></span>
                <span class="item-reverse item-3"></span>
                <span class="item-reverse item-4"></span>
                <span class="item-reverse item-5"></span>
                <span class="item-reverse item-6"></span>
              </div>
            </div>
          </div>

          <div class="flex-wrap">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"
                target="_blank"
                rel="noopener"
                >flex-wrap</a
              >
            </h4>
            <div class="property" id="flex-wrap-nowrap">
              <div><span class="property-title">flex-wrap</span>: nowrap;</div>
              <div class="show show-flex-wrap-nowrap">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-wrap-wrap">
              <div><span class="property-title">flex-wrap</span>: wrap;</div>
              <div class="show two-columns show-flex-wrap-wrap">
                <div class="column">
                  <span class="item-column item-1"></span>
                  <span class="item-column item-1"></span>
                  <span class="item-column item-2"></span>
                  <span class="item-column item-2"></span>
                  <span class="item-column item-3"></span>
                  <span class="item-column item-3"></span>
                </div>
                <div class="column">
                  <span class="item-column item-4"></span>
                  <span class="item-column item-4"></span>
                  <span class="item-column item-5"></span>
                  <span class="item-column item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="flex-wrap-wrap-reverse">
              <div>
                <span class="property-title">flex-wrap</span>: wrap-reverse;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-wrap: wrap-reverse;"
              />
            </div>
          </div>

          <div class="flex-flow">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow"
                target="_blank"
                rel="noopener"
                >flex-flow</a
              >
            </h4>
            <div class="property" id="flex-flow-row-nowrap">
              <div>
                <span class="property-title">flex-flow</span>: row nowrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: row nowrap;"
              />
            </div>

            <div class="property" id="flex-flow-row-wrap">
              <div>
                <span class="property-title">flex-flow</span>: row wrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: row wrap;"
              />
            </div>

            <div class="property" id="flex-flow-row-reverse-nowrap">
              <div>
                <span class="property-title">flex-flow</span>: row-reverse
                nowwrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: row-reverse nowrap;"
              />
            </div>

            <div class="property" id="flex-flow-row-reverse-wrap">
              <div>
                <span class="property-title">flex-flow</span>: row-reverse wrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: row-reverse wrap;"
              />
            </div>

            <div class="property" id="flex-flow-column-nowrap">
              <div>
                <span class="property-title">flex-flow</span>: column nowrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: column nowrap;"
              />
            </div>

            <div class="property" id="flex-flow-column-wrap">
              <div>
                <span class="property-title">flex-flow</span>: column wrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: column wrap;"
              />
            </div>

            <div class="property" id="flex-flow-column-reverse-nowrap">
              <div>
                <span class="property-title">flex-flow</span>: column-reverse
                nowrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: column-reverse nowrap;"
              />
            </div>

            <div class="property" id="flex-flow-column-reverse-wrap">
              <div>
                <span class="property-title">flex-flow</span>: column-reverse
                wrap;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-flow: column-reverse wrap;"
              />
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Primary Axis</h3>

          <div class="justify-content">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
                target="_blank"
                rel="noopener"
                >justify-content</a
              >
            </h4>
            <div class="property" id="justify-content-flex-start">
              <div>
                <span class="property-title">justify-content</span>: flex-start;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="justify-content: flex-start;"
              />
            </div>

            <div class="property" id="justify-content-center">
              <div>
                <span class="property-title">justify-content</span>: center;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="justify-content: center;"
              />
            </div>

            <div class="property" id="justify-content-flex-end">
              <div>
                <span class="property-title">justify-content</span>: flex-end;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="justify-content: flex-end;"
              />
            </div>

            <div class="property" id="justify-content-space-between">
              <div>
                <span class="property-title">justify-content</span>:
                space-between;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="justify-content: space-between;"
              />
            </div>

            <div class="property" id="justify-content-space-around">
              <div>
                <span class="property-title">justify-content</span>:
                space-around;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="justify-content: space-around;"
              />
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Secondary Axis</h3>

          <div class="align-items">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
                target="_blank"
                rel="noopener"
                >align-items</a
              >
            </h4>
            <div class="property" id="align-items-flex-start">
              <div>
                <span class="property-title">align-items</span>: flex-start;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-items: flex-start;"
              />
            </div>

            <div class="property" id="align-items-center">
              <div>
                <span class="property-title">align-items</span>: center;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-items: center;"
              />
            </div>

            <div class="property" id="align-items-flex-end">
              <div>
                <span class="property-title">align-items</span>: flex-end;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-items: flex-end;"
              />
            </div>

            <div class="property" id="align-items-baseline">
              <div>
                <span class="property-title">align-items</span>: baseline;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-items: baseline;"
              />
            </div>

            <div class="property" id="align-items-stretch">
              <div>
                <span class="property-title">align-items</span>: stretch;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-items: stretch;"
              />
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Multi-line Container Properties</h3>

          <div class="align-content">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
                target="_blank"
                rel="noopener"
                >align-content</a
              >
            </h4>
            <div class="property" id="align-content-flex-start">
              <div>
                <span class="property-title">align-content</span>: flex-start;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-content: flex-start;"
              />
            </div>

            <div class="property" id="align-content-center">
              <div>
                <span class="property-title">align-content</span>: center;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-content: center;"
              />
            </div>

            <div class="property" id="align-content-flex-end">
              <div>
                <span class="property-title">align-content</span>: flex-end;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-content: flex-end;"
              />
            </div>

            <div class="property" id="align-content-stretch">
              <div>
                <span class="property-title">align-content</span>: stretch;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-content: stretch;"
              />
            </div>

            <div class="property" id="align-content-space-between">
              <div>
                <span class="property-title">align-content</span>:
                space-between;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-content: space-between;"
              />
            </div>

            <div class="property" id="align-content-space-around">
              <div>
                <span class="property-title">align-content</span>: space-around;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-content: space-around;"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container-properties">
        <h2>Item Properties</h2>

        <div class="properties">
          <h3>Flexibility</h3>

          <div class="flex-grow">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow"
                target="_blank"
                rel="noopener"
                >flex-grow</a
              >
            </h4>
            <div class="property" id="flex-grow-number">
              <div><span class="property-title">flex-grow</span>: number;</div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-grow: number;"
              />
            </div>
          </div>

          <div class="flex-shrink">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"
                target="_blank"
                rel="noopener"
                >flex-shrink</a
              >
            </h4>
            <div class="property" id="flex-shrink-number">
              <div>
                <span class="property-title">flex-shrink</span>: number;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-shrink: number;"
              />
            </div>
          </div>

          <div class="flex-basis">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"
                target="_blank"
                rel="noopener"
                >flex-basis</a
              >
            </h4>
            <div class="property" id="flex-basis-size">
              <div><span class="property-title">flex-basis</span>: size;</div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="flex-basis: size;"
              />
            </div>
          </div>

          <div class="flex">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
                target="_blank"
                rel="noopener"
                >flex</a
              >
            </h4>
            <div class="property" id="flex-grow">
              <div><span class="property-title">flex</span>: grow;</div>
              <img src="${imagesPath}/display-flex.svg" alt="flex: grow;" />
            </div>

            <div class="property" id="flex-shrink">
              <div><span class="property-title">flex</span>: shrink;</div>
              <img src="${imagesPath}/display-flex.svg" alt="flex: shrink;" />
            </div>

            <div class="property" id="flex-basis">
              <div><span class="property-title">flex</span>: basis;</div>
              <img src="${imagesPath}/display-flex.svg" alt="flex: basis;" />
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Alignment and Ordering</h3>

          <div class="align-self">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"
                target="_blank"
                rel="noopener"
                >align-self</a
              >
            </h4>
            <div class="property" id="align-self-auto">
              <div><span class="property-title">align-self</span>: auto;</div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-self: auto;"
              />
            </div>

            <div class="property" id="align-self-flex-start">
              <div>
                <span class="property-title">align-self</span>: flex-start;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-self: flex-start;"
              />
            </div>

            <div class="property" id="align-self-center">
              <div><span class="property-title">align-self</span>: center;</div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-self: center;"
              />
            </div>

            <div class="property" id="align-self-flex-end">
              <div>
                <span class="property-title">align-self</span>: flex-end;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-self: flex-end;"
              />
            </div>

            <div class="property" id="align-self-baseline">
              <div>
                <span class="property-title">align-self</span>: baseline;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-self: baseline;"
              />
            </div>

            <div class="property" id="align-self-stretch">
              <div>
                <span class="property-title">align-self</span>: stretch;
              </div>
              <img
                src="${imagesPath}/display-flex.svg"
                alt="align-self: stretch;"
              />
            </div>
          </div>

          <div class="order">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/order"
                target="_blank"
                rel="noopener"
                >order</a
              >
            </h4>
            <div class="property" id="order-number">
              <div><span class="property-title">order</span>: number;</div>
              <img src="${imagesPath}/display-flex.svg" alt="order: number;" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <script src="${scriptPath}/custom.js"></script>
  </body>
</html>

  `;
}
