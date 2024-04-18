import { Uri } from "vscode";
export function getWebviewContentGridJS(
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
    <title>Gridbox Cheatsheet (CSS in JS)</title>
    <link rel="stylesheet" href="${stylePath}/custom.css" />
  </head>

  <body>
    <main>
      <h1>Gridbox Cheatsheet (CSS in JS)</h1>

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
            <div class="property" id="display-grid-js">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#grid"
                  target="_blank"
                  rel="noopener"
                  >display: 'grid'</a
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

            <div class="property" id="display-inline-grid-js">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#inline-grid"
                  target="_blank"
                  rel="noopener"
                  >display: 'inlineGrid'</a
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

            <div class="property" id="display-subgrid-js">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid"
                  target="_blank"
                  rel="noopener"
                  >display: 'subgrid'</a
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
                >gridTemplate</a
              >
            </h4>
            
            <div class="property" id="grid-template-columns-rows-none-js">
              <div>
                <span class="property-title">gridTemplateColumns</span>: 'none'
                <br />
                <span class="property-title">gridTemplateRows</span>: 'none'
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

            <div class="property" id="grid-template-columns-rows-tracks-js">
              <div>
                <span class="property-title">gridTemplateColumns</span>: '8px auto 8px'
                </br>
                <span class="property-title">gridTemplateColumns</span>: '22% auto 22%'
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

            <div class="property" id="grid-template-columns-rows-repeat-js">
              <div>
                <span class="property-title">gridTemplateColumns</span>: 'repeat(3, 12px)'
                </br>
                <span class="property-title">gridTemplateColumns</span>: 'repeat(3, 12px)'
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
                >gridTemplateAreas</a
              >
            </h4>

            <div class="property" id="grid-template-areas-string-1-js">
              <div>
                <span class="property-title">gridTemplateAreas</span>:
                <br>
                 '"a a a"
                 <br>
                 "b c c"
                 <br>
                 "b c c"'
              </div>
              <div class="show-grid show-grid-template-areas-string-1">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-template-areas-string-2-js">
              <div>
                <span class="property-title">gridTemplateAreas</span>:
                <br>
                 '"b b a"
                 <br>
                 "b b c"
                 <br>
                 "b b c"'
              </div>
              <div class="show-grid show-grid-template-areas-string-2">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-template-areas-string-3-js">
              <div>
                <span class="property-title">gridTemplateAreas</span>:
                <br>
                 '"a a ."
                 <br>
                 "a a ."
                 <br>
                 ". b c"'
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
                >gridArea</a>
            </h4>

            <div class="property" id="grid-area-js">
              <div>
                <span class="property-title">gridArea</span>: <i>'custom area name'</i>
              </div>
            </div>
            <h5>* Remember to use gridArea for the child elements to tell them where to place themselves based on the names defined in grid-template-areas.</h5>
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
                >gridAuto</a
              >
            </h4>

            <div class="property" id="grid-auto-columns-js">
              <div>
                <span class="property-title">gridAutoColumns</span>: '8px'
                <br />
                <span class="property-title">gridAutoColumns</span>: '22%'
                <br />
                <span class="property-title">gridAutoColumns</span>: 'auto'
              </div>
              <div class="show-grid show-grid-auto-columns">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-rows-js">
              <div>
                <span class="property-title">gridAutoRows</span>: '8px'
                <br />
                <span class="property-title">gridAutoRows</span>: '22%'
                <br />
                <span class="property-title">gridAutoRows</span>: 'auto'
              </div>
              <div class="show-grid show-grid-auto-rows">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-flow-row-js">
              <div>
                <span class="property-title">gridAutoFlow</span>: 'row'
              </div>
              <div class="show-grid show-grid-auto-flow-row">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-flow-column-js">
              <div>
                <span class="property-title">gridAutoFlow</span>: 'column'
              </div>
              <div class="show-grid show-grid-auto-flow-column">
                <span class="grid-item item-1"></span>
                <span class="grid-item item-3"></span>
                <span class="grid-item item-6"></span>
              </div>
            </div>

            <div class="property" id="grid-auto-flow-dense-js">
              <div>
                <span class="property-title">gridAutoFlow</span>: 'dense'
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

            <div class="property" id="grid-column-gap-js">
              <div>
                <span class="property-title">gridColumnGap</span>: '8px'
                <br />
                <span class="property-title">gridColumnGap</span>: '22%'
                <br />
                <span class="property-title">gridColumnGap</span>: '0'
              </div>

                <div class="show-grid show-grid-column-gap">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-row-gap-js">
              <div>
                <span class="property-title">gridRowGap</span>: '8px'
                <br />
                <span class="property-title">gridRowGap</span>: '22%'
                <br />
                <span class="property-title">gridRowGap</span>: '0'
              </div>

                <div class="show-grid show-grid-row-gap">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="grid-gap-js">
              <div>
                <span class="property-title">gridGap</span>: '<i>row-gap</i> <i>column-gap</i>'
              </div>

                <div class="show-grid show-grid-gap">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>
            
          
          </div>
        </div>

        <div class="properties">
          <h3>Primary Axis</h3>

          <div class="justify-items">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"
                target="_blank"
                rel="noopener"
                >justifyItems</a
              >
            </h4>

            <div class="property" id="show-justify-items-start-js">
              <div>
                <span class="property-title">justifyItems</span>: 'start'
              </div>

                <div class="show-grid grid-container-auto show-justify-items-start">
                  <span class="grid-item small-item-width item-1"></span>
                  <span class="grid-item small-item-width item-2"></span>
                  <span class="grid-item small-item-width item-2"></span>
                  <span class="grid-item small-item-width item-3"></span>
                  <span class="grid-item small-item-width item-3"></span>
                  <span class="grid-item small-item-width item-4"></span>
                  <span class="grid-item small-item-width item-4"></span>
                  <span class="grid-item small-item-width item-5"></span>
                  <span class="grid-item small-item-width item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-items-end-js">
              <div>
                <span class="property-title">justifyItems</span>: 'end'
              </div>

                <div class="show-grid grid-container-auto show-justify-items-end">
                  <span class="grid-item small-item-width item-1"></span>
                  <span class="grid-item small-item-width item-2"></span>
                  <span class="grid-item small-item-width item-2"></span>
                  <span class="grid-item small-item-width item-3"></span>
                  <span class="grid-item small-item-width item-3"></span>
                  <span class="grid-item small-item-width item-4"></span>
                  <span class="grid-item small-item-width item-4"></span>
                  <span class="grid-item small-item-width item-5"></span>
                  <span class="grid-item small-item-width item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-items-center-js">
              <div>
                <span class="property-title">justifyItems</span>: 'center'
              </div>

                <div class="show-grid grid-container-auto show-justify-items-center">
                  <span class="grid-item small-item-width item-1"></span>
                  <span class="grid-item small-item-width item-2"></span>
                  <span class="grid-item small-item-width item-2"></span>
                  <span class="grid-item small-item-width item-3"></span>
                  <span class="grid-item small-item-width item-3"></span>
                  <span class="grid-item small-item-width item-4"></span>
                  <span class="grid-item small-item-width item-4"></span>
                  <span class="grid-item small-item-width item-5"></span>
                  <span class="grid-item small-item-width item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-items-stretch-js">
              <div>
                <span class="property-title">justifyItems</span>: 'stretch'
              </div>

                <div class="show-grid grid-container-auto show-justify-items-stretch">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
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
          <h3>Secondary Axis</h3>

          <div class="align-items">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
                target="_blank"
                rel="noopener"
                >alignItems</a
              >
            </h4>

            <div class="property" id="show-align-items-start-js">
              <div>
                <span class="property-title">alignItems</span>: 'start'
              </div>

                <div class="show-grid grid-container-auto show-align-items-start">
                  <span class="grid-item small-item-height item-1"></span>
                  <span class="grid-item small-item-height item-2"></span>
                  <span class="grid-item small-item-height item-2"></span>
                  <span class="grid-item small-item-height item-3"></span>
                  <span class="grid-item small-item-height item-3"></span>
                  <span class="grid-item small-item-height item-4"></span>
                  <span class="grid-item small-item-height item-4"></span>
                  <span class="grid-item small-item-height item-5"></span>
                  <span class="grid-item small-item-height item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-items-end-js">
              <div>
                <span class="property-title">alignItems</span>: 'end'
              </div>

                <div class="show-grid grid-container-auto show-align-items-end">
                  <span class="grid-item small-item-height item-1"></span>
                  <span class="grid-item small-item-height item-2"></span>
                  <span class="grid-item small-item-height item-2"></span>
                  <span class="grid-item small-item-height item-3"></span>
                  <span class="grid-item small-item-height item-3"></span>
                  <span class="grid-item small-item-height item-4"></span>
                  <span class="grid-item small-item-height item-4"></span>
                  <span class="grid-item small-item-height item-5"></span>
                  <span class="grid-item small-item-height item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-items-center-js">
              <div>
                <span class="property-title">alignItems</span>: 'center'
              </div>

                <div class="show-grid grid-container-auto show-align-items-center">
                  <span class="grid-item small-item-height item-1"></span>
                  <span class="grid-item small-item-height item-2"></span>
                  <span class="grid-item small-item-height item-2"></span>
                  <span class="grid-item small-item-height item-3"></span>
                  <span class="grid-item small-item-height item-3"></span>
                  <span class="grid-item small-item-height item-4"></span>
                  <span class="grid-item small-item-height item-4"></span>
                  <span class="grid-item small-item-height item-5"></span>
                  <span class="grid-item small-item-height item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-items-stretch-js">
              <div>
                <span class="property-title">alignItems</span>: 'stretch'
              </div>

                <div class="show-grid grid-container-auto show-align-items-stretch">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
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
          <h3>Content Distribution</h3>

          <div class="justify-content">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
                target="_blank"
                rel="noopener"
                >justifyContent</a
              >
            </h4>

            <div class="property" id="show-justify-content-start-js">
              <div>
                <span class="property-title">justifyContent</span>: 'start'
              </div>

                <div class="show-grid grid-justify-content show-justify-content-start">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-content-end-js">
              <div>
                <span class="property-title">justifyContent</span>: 'end'
              </div>

                <div class="show-grid grid-justify-content show-justify-content-end">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-content-center-js">
              <div>
                <span class="property-title">justifyContent</span>: 'center'
              </div>

                <div class="show-grid grid-justify-content show-justify-content-center">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-content-stretch-js">
              <div>
                <span class="property-title">justifyContent</span>: 'stretch'
              </div>

                <div class="show-grid grid-justify-content show-justify-content-stretch">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-content-space-around-js">
              <div>
                <span class="property-title">justifyContent</span>: 'spaceAround'
              </div>

                <div class="show-grid grid-justify-content show-justify-content-space-around">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-content-space-between-js">
              <div>
                <span class="property-title">justifyContent</span>: 'spaceBetween'
              </div>

                <div class="show-grid grid-justify-content show-justify-content-space-between">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-justify-content-space-evenly-js">
              <div>
                <span class="property-title">justifyContent</span>: 'spaceEvenly'
              </div>

                <div class="show-grid grid-justify-content show-justify-content-space-evenly">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>
          </div>

          <div class="align-content">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
                target="_blank"
                rel="noopener"
                >alignContent</a
              >
            </h4>

            <div class="property" id="show-align-content-start-js">
              <div>
                <span class="property-title">alignContent</span>: 'start'
              </div>

                <div class="show-grid grid-align-content show-align-content-start">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-content-end-js">
              <div>
                <span class="property-title">alignContent</span>: 'end'
              </div>

                <div class="show-grid grid-align-content show-align-content-end">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-content-center-js">
              <div>
                <span class="property-title">alignContent</span>: 'center'
              </div>

                <div class="show-grid grid-align-content show-align-content-center">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-content-stretch-js">
              <div>
                <span class="property-title">alignContent</span>: 'stretch'
              </div>

                <div class="show-grid grid-align-content show-align-content-stretch">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-content-space-around-js">
              <div>
                <span class="property-title">alignContent</span>: 'spaceAround'
              </div>

                <div class="show-grid grid-align-content show-align-content-space-around">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-content-space-between-js">
              <div>
                <span class="property-title">alignContent</span>: 'spaceBetween'
              </div>

                <div class="show-grid grid-align-content show-align-content-space-between">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
                  <span class="grid-item item-6"></span>
                </div>
            </div>

            <div class="property" id="show-align-content-space-evenly-js">
              <div>
                <span class="property-title">alignContent</span>: 'spaceEvenly'
              </div>

                <div class="show-grid grid-align-content show-align-content-space-evenly">
                  <span class="grid-item item-1"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-2"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-3"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-4"></span>
                  <span class="grid-item item-5"></span>
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
                >gridColumn</a
              >
            </h4>

            <div class="property" id="grid-column-start-js">
              <div>
                <span class="property-title">gridColumnStart</span>: 'line'
                <br />
                <span class="property-title">gridColumnEnd</span>: 'line'
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

            <div class="property" id="grid-column-start-span-js">
              <div>
                <span class="property-title">gridColumnStart</span>: 'span line'
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

            <div class="property" id="grid-column-container-js">
              <div>
                <span class="property-title">gridColumn</span>: 'column-start / column-end'
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

            <div class="property" id="grid-column-container-span-js">
              <div>
                <span class="property-title">gridColumn</span>: 'span columnStart / span columnEnd'
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
                >gridRow</a
              >
            </h4>

            <div class="property" id="grid-row-start-js">
              <div>
                <span class="property-title">gridRowStart</span>: 'line'
                <br />
                <span class="property-title">gridRowEnd</span>: 'line'
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

            <div class="property" id="grid-row-start-span-js">
              <div>
                <span class="property-title">gridRowStart</span>: 'span line'
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

            <div class="property" id="grid-row-container-js">
              <div>
                <span class="property-title">gridRow</span>: rowStart / rowEnd
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

            <div class="property" id="grid-row-container-span-js">
              <div>
                <span class="property-title">gridRow</span>: span rowStart / span rowEnd
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
                >gridRow + gridColumn</a
              >
            </h4>

            <div class="property" id="grid-column-row-js">
              <div>
                <span class="property-title">gridRow</span>: '1 / span 2'
                <br />
                <span class="property-title">gridColumn</span>: '1 / span 2'
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

            <div class="property" id="grid-row-column-js">
              <div>
                <span class="property-title">gridRow</span>: '2 / span 2'
                <br />
                <span class="property-title">gridColumn</span>: '2 / span 2'
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
          <h3>Primary Axis</h3>

          <div class="justify-self">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"
                target="_blank"
                rel="noopener"
                >justifySelf</a
              >
            </h4>

            <div class="property" id="show-justify-self-start-js">
              <div>
                <span class="property-title">justifySelf</span>: 'start'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-justify-self-start item-1"></span>
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

            <div class="property" id="show-justify-self-end-js">
              <div>
                <span class="property-title">justifySelf</span>: 'end'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-justify-self-end item-1"></span>
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

            <div class="property" id="show-justify-self-center-js">
              <div>
                <span class="property-title">justifySelf</span>: 'center'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-justify-self-center item-1"></span>
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

            <div class="property" id="show-justify-self-stretch-js">
              <div>
                <span class="property-title">justifySelf</span>: 'stretch'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-justify-self-stretch item-1"></span>
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
          <h3>Secondary Axis</h3>

          <div class="align-self">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"
                target="_blank"
                rel="noopener"
                >alignSelf</a
              >
            </h4>

            <div class="property" id="show-align-self-start-js">
              <div>
                <span class="property-title">alignSelf</span>: 'start'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-align-self-start item-1"></span>
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

            <div class="property" id="show-align-self-end-js">
              <div>
                <span class="property-title">alignSelf</span>: 'end'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-align-self-end item-1"></span>
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

            <div class="property" id="show-align-self-center-js">
              <div>
                <span class="property-title">alignSelf</span>: 'center'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-align-self-center item-1"></span>
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

            <div class="property" id="show-align-self-stretch-js">
              <div>
                <span class="property-title">alignSelf</span>: 'stretch'
              </div>

                <div class="show-grid grid-container-auto-self">
                  <span class="grid-item show-align-self-stretch item-1"></span>
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

        </div>
      </div>
    </main>

    <script src="${scriptPath}/custom.js"></script>
  </body>
</html>

  `;
}
