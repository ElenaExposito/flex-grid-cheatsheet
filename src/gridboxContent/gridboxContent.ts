import { Uri } from "vscode";
export function getWebviewContentGrid(
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
    <title>Gridbox Cheatsheet</title>
    <link rel="stylesheet" href="${stylePath}/custom.css" />
  </head>

  <body>
    <main>
      <h1>Gridbox Cheatsheet</h1>

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

          <div class="display-grid">
            <div class="property" id="display-grid">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#grid"
                  target="_blank"
                  rel="noopener"
                  >display: grid;</a
                >
              </div>
              <div class="show-grid">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="display-inline-grid">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#inline-grid"
                  target="_blank"
                  rel="noopener"
                  >display: inline-grid;</a
                >
              </div>
              <div class="show-grid show-display-inline-grid">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="display-subgrid">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid"
                  target="_blank"
                  rel="noopener"
                  >display: subgrid;</a
                >
              </div>
              <div class="show-grid show-display-subgrid">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Explicit Grid</h3>

          <div class="grid-template">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template"
                target="_blank"
                rel="noopener"
                >grid-template</a
              >
            </h4>
            <div class="property" id="grid-template-columns-rows-none">
              <div>
                <span class="property-title">grid-template-columns</span>: none;
                <br />
                <span class="property-title">grid-template-rows</span>: none;
              </div>

              <div class="show-grid show-grid-template-columns-rows-none">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-template-columns-rows-tracks">
              <div>
                <span class="property-title">grid-template-columns</span>: 8px auto 8px;
                </br>
                <span class="property-title">grid-template-columns</span>: 22% auto 22%;
              </div>
              
              <div class="show-grid show-grid-template-columns-rows-tracks">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-template-columns-rows-repeat">
              <div>
                <span class="property-title">grid-template-columns</span>: repeat(3, 12px);
                </br>
                <span class="property-title">grid-template-columns</span>: repeat(3, 12px);
              </div>

              <div class="show-grid show-grid-template-columns-rows-repeat">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Area Grid</h3>

          <div class="grid-template-areas">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"
                target="_blank"
                rel="noopener"
                >grid-template-areas</a
              >
            </h4>
            <div class="property" id="grid-template-areas-string-1">
              <div>
                <span class="property-title">grid-template-areas</span>:
                <br>
                 "a a a"
                 <br>
                 "b c c"
                 <br>
                 "b c c";
              </div>
              <div class="show-grid show-grid-template-areas-string-1">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="justify-content-center">
              <div>
                <span class="property-title">justify-content</span>: center;
              </div>
              <div class="show-grid show-justify-content-center">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-flex-end">
              <div>
                <span class="property-title">justify-content</span>: flex-end;
              </div>
              <div class="show-grid show-justify-content-flex-end">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-space-between">
              <div>
                <span class="property-title">justify-content</span>:
                space-between;
              </div>
              <div class="show-grid show-justify-content-space-between">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-space-around">
              <div>
                <span class="property-title">justify-content</span>:
                space-around;
              </div>
              <div class="show-grid show-justify-content-space-around">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
              </div>
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
              <div class="show-grid show-align-items-flex-start">
                <span class="grid-item align item-1"></span>
                <span class="grid-item align item-2"></span>
                <span class="grid-item align item-3"></span>
                <span class="grid-item align item-4"></span>
                <span class="grid-item align item-5"></span>
                <span class="grid-item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-center">
              <div>
                <span class="property-title">align-items</span>: center;
              </div>
              <div class="show-grid show-align-items-center">
                <span class="grid-item align item-1"></span>
                <span class="grid-item align item-2"></span>
                <span class="grid-item align item-3"></span>
                <span class="grid-item align item-4"></span>
                <span class="grid-item align item-5"></span>
                <span class="grid-item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-flex-end">
              <div>
                <span class="property-title">align-items</span>: flex-end;
              </div>
              <div class="show-grid show-align-items-flex-end">
                <span class="grid-item align item-1"></span>
                <span class="grid-item align item-2"></span>
                <span class="grid-item align item-3"></span>
                <span class="grid-item align item-4"></span>
                <span class="grid-item align item-5"></span>
                <span class="grid-item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-baseline">
              <div>
                <span class="property-title">align-items</span>: baseline;
              </div>
              <div class="show-grid show-align-items-baseline">
                <span class="grid-item align item-1"></span>
                <span class="grid-item align item-2"></span>
                <span class="grid-item align item-3"></span>
                <span class="grid-item align item-4"></span>
                <span class="grid-item align item-5"></span>
                <span class="grid-item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-stretch">
              <div>
                <span class="property-title">align-items</span>: stretch;
              </div>
              <div class="show-grid show-align-items-stretch">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
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
              <div class="show-grid show-align-content-flex-start">
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-3"></span>
                  <span class="grid-item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-5"></span>
                  <span class="grid-item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-center">
              <div>
                <span class="property-title">align-content</span>: center;
              </div>
              <div class="show-grid show-align-content-center">
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-3"></span>
                  <span class="grid-item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-5"></span>
                  <span class="grid-item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-flex-end">
              <div>
                <span class="property-title">align-content</span>: flex-end;
              </div>
              <div class="show-grid show-align-content-flex-end">
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-3"></span>
                  <span class="grid-item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-5"></span>
                  <span class="grid-item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-stretch">
              <div>
                <span class="property-title">align-content</span>: stretch;
              </div>
              <div class="show-grid two-columns show-align-content-stretch">
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

            <div class="property" id="align-content-space-between">
              <div>
                <span class="property-title">align-content</span>:
                space-between;
              </div>
              <div class="show-grid show-align-content-space-between">
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-3"></span>
                  <span class="grid-item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-5"></span>
                  <span class="grid-item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-space-around">
              <div>
                <span class="property-title">align-content</span>: space-around;
              </div>
              <div class="show-grid show-align-content-space-around">
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-1"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-2"></span>
                  <span class="grid-item align-content-item item-3"></span>
                  <span class="grid-item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-4"></span>
                  <span class="grid-item align-content-item item-5"></span>
                  <span class="grid-item align-content-item item-6"></span>
                </div>
              </div>
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
              <div class="show-grid">
                <span class="grid-item show-flex-grow-number item-1"></span>
                <span class="grid-item show-flex-grow-number item-3"></span>
                <span class="grid-item show-flex-grow-number item-5"></span>
              </div>
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
              <div class="show">
                <span
                  class="grid-item item-shrink show-flex-shrink-number item-1"
                ></span>
                <span class="grid-item show-flex-shrink-number item-3"></span>
              </div>
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
              <div class="show-grid">
                <span class="grid-item show-flex-basis-size item-1"></span>
                <span class="grid-item show-flex-basis-size item-3"></span>
                <span class="grid-item show-flex-basis-size item-5"></span>
              </div>
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
              <div class="show-grid">
                <span class="grid-item align-self-item item-1"></span>
                <span class="grid-item align-self-item item-2"></span>
                <span
                  class="grid-item align-self-item show-align-self-auto item-3"
                ></span>
                <span class="grid-item align-self-item item-4"></span>
                <span class="grid-item align-self-item item-5"></span>
                <span class="grid-item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-flex-start">
              <div>
                <span class="property-title">align-self</span>: flex-start;
              </div>
              <div class="show-grid">
                <span class="grid-item align-self-item item-1"></span>
                <span class="grid-item align-self-item item-2"></span>
                <span
                  class="grid-item align-self-item show-align-self-flex-start item-3"
                ></span>
                <span class="grid-item align-self-item item-4"></span>
                <span class="grid-item align-self-item item-5"></span>
                <span class="grid-item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-center">
              <div><span class="property-title">align-self</span>: center;</div>
              <div class="show-grid">
                <span class="grid-item align-self-item item-1"></span>
                <span class="grid-item align-self-item item-2"></span>
                <span
                  class="grid-item align-self-item show-align-self-center item-3"
                ></span>
                <span class="grid-item align-self-item item-4"></span>
                <span class="grid-item align-self-item item-5"></span>
                <span class="grid-item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-flex-end">
              <div>
                <span class="property-title">align-self</span>: flex-end;
              </div>
              <div class="show-grid">
                <span class="grid-item align-self-item item-1"></span>
                <span class="grid-item align-self-item item-2"></span>
                <span
                  class="grid-item align-self-item show-align-self-flex-end item-3"
                ></span>
                <span class="grid-item align-self-item item-4"></span>
                <span class="grid-item align-self-item item-5"></span>
                <span class="grid-item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-baseline">
              <div>
                <span class="property-title">align-self</span>: baseline;
              </div>
              <div class="show-grid">
                <span class="grid-item align-self-item item-1"></span>
                <span class="grid-item align-self-item item-2"></span>
                <span
                  class="grid-item align-self-item show-align-self-baseline item-3"
                ></span>
                <span class="grid-item align-self-item item-4"></span>
                <span class="grid-item align-self-item item-5"></span>
                <span class="grid-item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-stretch">
              <div>
                <span class="property-title">align-self</span>: stretch;
              </div>
              <div class="show-grid">
                <span class="grid-item align-self-item item-1"></span>
                <span class="grid-item align-self-item item-2"></span>
                <span
                  class="grid-item align-self-item show-align-self-stretch item-3"
                ></span>
                <span class="grid-item align-self-item item-4"></span>
                <span class="grid-item align-self-item item-5"></span>
                <span class="grid-item align-self-item item-6"></span>
              </div>
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
              <div class="show-grid">
                <span class="grid-item show-order-number item-1"></span>
                <span class="grid-item show-order-number item-2"></span>
                <span class="grid-item show-order-number item-3"></span>
                <span class="grid-item show-order-number item-4"></span>
                <span class="grid-item show-order-number item-5"></span>
                <span class="grid-item show-order-number item-6"></span>
              </div>
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
