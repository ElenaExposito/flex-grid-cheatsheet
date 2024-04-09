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

            <div class="property" id="grid-template-areas-string-2">
              <div>
                <span class="property-title">grid-template-areas</span>:
                <br>
                 "b b a"
                 <br>
                 "b b c"
                 <br>
                 "b b c";
              </div>
              <div class="show-grid show-grid-template-areas-string-2">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-template-areas-string-3">
              <div>
                <span class="property-title">grid-template-areas</span>:
                <br>
                 "a a ."
                 <br>
                 "a a ."
                 <br>
                 ". b c";
              </div>
              <div class="show-grid show-grid-template-areas-string-3">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <h3>Item Properties</h3>
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area"
                target="_blank"
                rel="noopener"
                >grid-area</a>
            </h4>
            <div class="property" id="grid-area">
              <div>
                <span class="property-title">grid-area</span>: <i>custom area name</i>;
              </div>
            </div>
            <h5>* Remember to use grid-area for the child elements to tell them where to place themselves based on the names defined in grid-template-areas.</h5>
          </div>
        </div>

        <div class="properties">
          <h3>Implicit Grid</h3>

          <div class="grid-auto">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
                target="_blank"
                rel="noopener"
                >grid-auto</a
              >
            </h4>
            <div class="property" id="grid-auto-columns">
              <div>
                <span class="property-title">grid-auto-columns</span>: 8px;
                <br />
                <span class="property-title">grid-auto-columns</span>: 22%;
                <br />
                <span class="property-title">grid-auto-columns</span>: auto;
              </div>
              <div class="show-grid show-grid-auto-columns">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-rows">
              <div>
                <span class="property-title">grid-auto-rows</span>: 8px;
                <br />
                <span class="property-title">grid-auto-rows</span>: 22%;
                <br />
                <span class="property-title">grid-auto-rows</span>: auto;
              </div>
              <div class="show-grid show-grid-auto-rows">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-flow-row">
              <div>
                <span class="property-title">grid-auto-flow</span>: row;
              </div>
              <div class="show-grid show-grid-auto-flow-row">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-flow-column">
              <div>
                <span class="property-title">grid-auto-flow</span>: column;
              </div>
              <div class="show-grid show-grid-auto-flow-column">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-flow-dense">
              <div>
                <span class="property-title">grid-auto-flow</span>: dense;
              </div>
              <div class="show-grid show-grid-auto-flow-dense">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="properties">
          <h3>Gutters (Gaps)</h3>

          <div class="grid-gaps">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/Gutters"
                target="_blank"
                rel="noopener"
                >Gutters</a
              >
            </h4>

            <div class="property" id="grid-column-gap">
              <div>
                <span class="property-title">grid-column-gap</span>: 8px;
                <br />
                <span class="property-title">grid-column-gap</span>: 22%;
                <br />
                <span class="property-title">grid-column-gap</span>: 0;
              </div>

                <div class="show-grid show-grid-column-gap">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-row-gap">
              <div>
                <span class="property-title">grid-row-gap</span>: 8px;
                <br />
                <span class="property-title">grid-row-gap</span>: 22%;
                <br />
                <span class="property-title">grid-row-gap</span>: 0;
              </div>

                <div class="show-grid show-grid-row-gap">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-gap">
              <div>
                <span class="property-title">grid-gap</span>: <i>row-gap</i> <i>column-gap</i>;
              </div>

                <div class="show-grid show-grid-gap">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>
            
          
          </div>
        </div>
      </div>

      <div class="container-properties">
        <h2>Item Properties</h2>

        <div class="properties">
          <h3>Line-based placement</h3>

          <div class="grid-column">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column"
                target="_blank"
                rel="noopener"
                >grid-column</a
              >
            </h4>

            <div class="property" id="grid-column-start">
              <div>
                <span class="property-title">grid-column-start</span>: line;
                <br />
                <span class="property-title">grid-column-end</span>: line;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-column-start item-1"></span>
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-column-start-span">
              <div>
                <span class="property-title">grid-column-start</span>: span line;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-column-start-span item-1"></span>
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-column-container">
              <div>
                <span class="property-title">grid-column</span>: column-start / column-end;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-column-container item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-column-container-span">
              <div>
                <span class="property-title">grid-column</span>: span column-start / span column-end;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-column-container-span item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>
          </div>

          <div class="grid-row">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row"
                target="_blank"
                rel="noopener"
                >grid-row</a
              >
            </h4>

            <div class="property" id="grid-row-start">
              <div>
                <span class="property-title">grid-row-start</span>: line;
                <br />
                <span class="property-title">grid-row-end</span>: line;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-row-start item-1"></span>
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-row-start-span">
              <div>
                <span class="property-title">grid-row-start</span>: span line;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-row-start-span item-1"></span>
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-row-container">
              <div>
                <span class="property-title">grid-row</span>: row-start / row-end;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-row-container item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-row-container-span">
              <div>
                <span class="property-title">grid-row</span>: span row-start / span row-end;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-row-container-span item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>
          </div>

          <div class="grid-column-row">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column#constituent_properties"
                target="_blank"
                rel="noopener"
                >grid-row + grid-column</a
              >
            </h4>

            <div class="property" id="grid-column-row">
              <div>
                <span class="property-title">grid-row</span>: 1 / span 2;
                <br />
                <span class="property-title">grid-column</span>: 1 / span 2;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-column-row item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-row-column">
              <div>
                <span class="property-title">grid-row</span>: 2 / span 2;
                <br />
                <span class="property-title">grid-column</span>: 2 / span 2;
              </div>

                <div class="show-grid grid-container-auto">
                  <span class="grid-item show-grid-row-column item-1"></span>
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
