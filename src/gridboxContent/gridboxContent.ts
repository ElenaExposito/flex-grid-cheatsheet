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

          <div class="grid-template-columns">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
                target="_blank"
                rel="noopener"
                >grid-template-columns</a
              >
            </h4>
            <div class="property" id="grid-template-columns-none">
              <div>
                <span class="property-title">grid-template-columns</span>: none;
              </div>
              <div class="show-grid show-grid-template-columns-none">
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

            <div class="property" id="flex-direction-row-reverse">
              <div>
                <span class="property-title">flex-direction</span>: row-reverse;
              </div>
              <div class="show-grid show-flex-direction-row-reverse">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-direction-column">
              <div>
                <span class="property-title">flex-direction</span>: column;
              </div>
              <div class="show-grid show-flex-direction-column">
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
              <div class="show-grid show-flex-direction-column-reverse">
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
              <div class="show-grid show-flex-wrap-nowrap">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-wrap-wrap">
              <div><span class="property-title">flex-wrap</span>: wrap;</div>
              <div class="show-grid two-columns show-flex-wrap-wrap">
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
              <div class="show-grid two-columns show-flex-wrap-wrap-reverse">
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
              <div class="show-grid show-flex-flow-row-nowrap">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-row-wrap">
              <div>
                <span class="property-title">flex-flow</span>: row wrap;
              </div>
              <div class="show-grid show-flex-flow-row-wrap">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-row-reverse-nowrap">
              <div>
                <span class="property-title">flex-flow</span>: row-reverse
                nowwrap;
              </div>
              <div class="show-grid show-flex-flow-row-reverse-nowrap">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-row-reverse-wrap">
              <div>
                <span class="property-title">flex-flow</span>: row-reverse wrap;
              </div>
              <div class="show-grid show-flex-flow-row-reverse-wrap">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-2"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-4"></span>
                <span class="grid-item item-5"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-column-nowrap">
              <div>
                <span class="property-title">flex-flow</span>: column nowrap;
              </div>
              <div class="show-grid two-columns show-flex-flow-column-nowrap">
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

            <div class="property" id="flex-flow-column-wrap">
              <div>
                <span class="property-title">flex-flow</span>: column wrap;
              </div>
              <div class="show-grid two-columns show-flex-flow-column-wrap">
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

            <div class="property" id="flex-flow-column-reverse-nowrap">
              <div>
                <span class="property-title">flex-flow</span>: column-reverse
                nowrap;
              </div>
              <div
                class="show-grid two-columns show-flex-flow-column-reverse-nowrap"
              >
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

            <div class="property" id="flex-flow-column-reverse-wrap">
              <div>
                <span class="property-title">flex-flow</span>: column-reverse
                wrap;
              </div>
              <div
                class="show-grid two-columns show-flex-flow-column-reverse-wrap"
              >
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
              <div class="show-grid show-justify-content-flex-start">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
                <span class="grid-item item-1"></span>
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
