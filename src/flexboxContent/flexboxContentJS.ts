import { Uri } from "vscode";

export function getWebviewContentFlexJS(
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
    <title>Flexbox Cheatsheet (CSS in JS)</title>
    <link rel="stylesheet" href="${stylePath}/custom.css" />
  </head>

  <body>
    <main>
      <h1>Flexbox Cheatsheet (CSS in JS)</h1>

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
            <div class="property" id="display-flex-js">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#flex"
                  target="_blank"
                  rel="noopener"
                  >display: 'flex'</a
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

            <div class="property" id="display-inline-flex-js">
              <div>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#inline-flex"
                  target="_blank"
                  rel="noopener"
                  >display: 'inlineFlex'</a
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
                >flexDirection</a
              >
            </h4>
            <div class="property" id="flex-direction-row-js">
              <div>
                <span class="property-title">flexDirection</span>: 'row'
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

            <div class="property" id="flex-direction-row-reverse-js">
              <div>
                <span class="property-title">flexDirection</span>: 'rowReverse'
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

            <div class="property" id="flex-direction-column-js">
              <div>
                <span class="property-title">flexDirection</span>: 'column'
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

            <div class="property" id="flex-direction-column-reverse-js">
              <div>
                <span class="property-title">flexDirection</span>:
                'columnReverse'
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
                >flexWrap</a
              >
            </h4>
            <div class="property" id="flex-wrap-nowrap-js">
              <div><span class="property-title">flexWrap</span>: 'nowrap'</div>
              <div class="show show-flex-wrap-nowrap">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-wrap-wrap-js">
              <div><span class="property-title">flexWrap</span>: 'wrap'</div>
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

            <div class="property" id="flex-wrap-wrap-reverse-js">
              <div>
                <span class="property-title">flexWrap</span>: 'wrapReverse'
              </div>
              <div class="show two-columns show-flex-wrap-wrap-reverse">
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
                >flexFlow</a
              >
            </h4>
            <div class="property" id="flex-flow-row-nowrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'row nowrap'
              </div>
              <div class="show show-flex-flow-row-nowrap">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-row-wrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'row wrap'
              </div>
              <div class="show show-flex-flow-row-wrap">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-row-reverse-nowrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'rowReverse
                nowrap'
              </div>
              <div class="show show-flex-flow-row-reverse-nowrap">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-row-reverse-wrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'rowReverse wrap'
              </div>
              <div class="show show-flex-flow-row-reverse-wrap">
                <span class="item item-1"></span>
                <span class="item item-2"></span>
                <span class="item item-3"></span>
                <span class="item item-4"></span>
                <span class="item item-5"></span>
                <span class="item item-6"></span>
              </div>
            </div>

            <div class="property" id="flex-flow-column-nowrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'column nowrap'
              </div>
              <div class="show two-columns show-flex-flow-column-nowrap">
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

            <div class="property" id="flex-flow-column-wrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'column wrap'
              </div>
              <div class="show two-columns show-flex-flow-column-wrap">
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

            <div class="property" id="flex-flow-column-reverse-nowrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'columnReverse
                nowrap'
              </div>
              <div
                class="show two-columns show-flex-flow-column-reverse-nowrap"
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

            <div class="property" id="flex-flow-column-reverse-wrap-js">
              <div>
                <span class="property-title">flexFlow</span>: 'columnReverse
                wrap'
              </div>
              <div class="show two-columns show-flex-flow-column-reverse-wrap">
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
                >justifyContent</a
              >
            </h4>
            <div class="property" id="justify-content-flex-start-js">
              <div>
                <span class="property-title">justifyContent</span>: 'flexStart'
              </div>
              <div class="show-flex show-justify-content-flex-start">
                <span class="item item-1"></span>
                <span class="item item-1"></span>
                <span class="item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-center-js">
              <div>
                <span class="property-title">justifyContent</span>: 'center'
              </div>
              <div class="show show-justify-content-center">
                <span class="item item-1"></span>
                <span class="item item-1"></span>
                <span class="item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-flex-end-js">
              <div>
                <span class="property-title">justifyContent</span>: 'flexEnd'
              </div>
              <div class="show show-justify-content-end">
                <span class="item item-1"></span>
                <span class="item item-1"></span>
                <span class="item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-space-between-js">
              <div>
                <span class="property-title">justifyContent</span>:
                'spaceBetween'
              </div>
              <div class="show show-justify-content-space-between">
                <span class="item item-1"></span>
                <span class="item item-1"></span>
                <span class="item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-space-around-js">
              <div>
                <span class="property-title">justifyContent</span>:
                'spaceAround'
              </div>
              <div class="show show-justify-content-space-around">
                <span class="item item-1"></span>
                <span class="item item-1"></span>
                <span class="item item-1"></span>
              </div>
            </div>

            <div class="property" id="justify-content-space-evenly-js">
              <div>
                <span class="property-title">justifyContent</span>:
                'spaceEvenly'
              </div>
              <div class="show show-justify-content-space-evenly">
                <span class="item item-1"></span>
                <span class="item item-1"></span>
                <span class="item item-1"></span>
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
            <div class="property" id="align-items-flex-start-js">
              <div>
                <span class="property-title">alignItems</span>: 'flexStart'
              </div>
              <div class="show show-align-items-flex-start">
                <span class="item align item-1"></span>
                <span class="item align item-2"></span>
                <span class="item align item-3"></span>
                <span class="item align item-4"></span>
                <span class="item align item-5"></span>
                <span class="item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-center-js">
              <div>
                <span class="property-title">alignItems</span>: 'center'
              </div>
              <div class="show show-align-items-center">
                <span class="item align item-1"></span>
                <span class="item align item-2"></span>
                <span class="item align item-3"></span>
                <span class="item align item-4"></span>
                <span class="item align item-5"></span>
                <span class="item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-flex-end-js">
              <div>
                <span class="property-title">alignItems</span>: 'flexEnd'
              </div>
              <div class="show show-align-items-flex-end">
                <span class="item align item-1"></span>
                <span class="item align item-2"></span>
                <span class="item align item-3"></span>
                <span class="item align item-4"></span>
                <span class="item align item-5"></span>
                <span class="item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-baseline-js">
              <div>
                <span class="property-title">alignItems</span>: 'baseline'
              </div>
              <div class="show show-align-items-baseline">
                <span class="item align item-1"></span>
                <span class="item align item-2"></span>
                <span class="item align item-3"></span>
                <span class="item align item-4"></span>
                <span class="item align item-5"></span>
                <span class="item align item-6"></span>
              </div>
            </div>

            <div class="property" id="align-items-stretch-js">
              <div>
                <span class="property-title">alignItems</span>: 'stretch'
              </div>
              <div class="show show-align-items-stretch">
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
          <h3>Multi-line Container Properties</h3>

          <div class="align-content">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
                target="_blank"
                rel="noopener"
                >alignContent</a
              >
            </h4>
            <div class="property" id="align-content-flex-start-js">
              <div>
                <span class="property-title">alignContent</span>: 'flexStart'
              </div>
              <div class="show show-flex-align-content-flex-start">
                <div class="column column-align-content">
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-3"></span>
                  <span class="item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-5"></span>
                  <span class="item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-center-js">
              <div>
                <span class="property-title">alignContent</span>: 'center'
              </div>
              <div class="show show-flex-align-content-center">
                <div class="column column-align-content">
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-3"></span>
                  <span class="item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-5"></span>
                  <span class="item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-flex-end-js">
              <div>
                <span class="property-title">alignContent</span>: 'flexEnd'
              </div>
              <div class="show show-flex-align-content-flex-end">
                <div class="column column-align-content">
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-3"></span>
                  <span class="item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-5"></span>
                  <span class="item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-stretch-js">
              <div>
                <span class="property-title">alignContent</span>: 'stretch'
              </div>
              <div class="show two-columns show-align-content-stretch">
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

            <div class="property" id="align-content-space-between-js">
              <div>
                <span class="property-title">alignContent</span>: 'spaceBetween'
              </div>
              <div class="show show-align-content-space-between">
                <div class="column column-align-content">
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-3"></span>
                  <span class="item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-5"></span>
                  <span class="item align-content-item item-6"></span>
                </div>
              </div>
            </div>

            <div class="property" id="align-content-space-around-js">
              <div>
                <span class="property-title">alignContent</span>: 'spaceAround'
              </div>
              <div class="show show-align-content-space-around">
                <div class="column column-align-content">
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-1"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-2"></span>
                  <span class="item align-content-item item-3"></span>
                  <span class="item align-content-item item-3"></span>
                </div>
                <div class="column column-align-content">
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-4"></span>
                  <span class="item align-content-item item-5"></span>
                  <span class="item align-content-item item-6"></span>
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
                >flexGrow</a
              >
            </h4>
            <div class="property" id="flex-grow-number-js">
              <div><span class="property-title">flexGrow</span>: 'number'</div>
              <div class="show">
                <span class="item show-flex-grow-number item-1"></span>
                <span class="item show-flex-grow-number item-3"></span>
                <span class="item show-flex-grow-number item-5"></span>
              </div>
            </div>
          </div>

          <div class="flex-shrink">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"
                target="_blank"
                rel="noopener"
                >flexShrink</a
              >
            </h4>
            <div class="property" id="flex-shrink-number-js">
              <div>
                <span class="property-title">flexShrink</span>: 'number'
              </div>
              <div class="show">
                <span
                  class="item item-shrink show-flex-shrink-number item-1"
                ></span>
                <span class="item show-flex-shrink-number item-3"></span>
              </div>
            </div>
          </div>

          <div class="flex-basis">
            <h4>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"
                target="_blank"
                rel="noopener"
                >flexBasis</a
              >
            </h4>
            <div class="property" id="flex-basis-size-js">
              <div><span class="property-title">flexBasis</span>: 'size'</div>
              <div class="show">
                <span class="item show-flex-basis-size item-1"></span>
                <span class="item show-flex-basis-size item-3"></span>
                <span class="item show-flex-basis-size item-5"></span>
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
                >alignSelf</a
              >
            </h4>
            <div class="property" id="align-self-auto-js">
              <div><span class="property-title">alignSelf</span>: 'auto'</div>
              <div class="show">
                <span class="item align-self-item item-1"></span>
                <span class="item align-self-item item-2"></span>
                <span
                  class="item align-self-item show-align-self-auto item-3"
                ></span>
                <span class="item align-self-item item-4"></span>
                <span class="item align-self-item item-5"></span>
                <span class="item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-flex-start-js">
              <div>
                <span class="property-title">alignSelf</span>: 'flexStart'
              </div>
              <div class="show">
                <span class="item align-self-item item-1"></span>
                <span class="item align-self-item item-2"></span>
                <span
                  class="item align-self-item show-align-self-flex-start item-3"
                ></span>
                <span class="item align-self-item item-4"></span>
                <span class="item align-self-item item-5"></span>
                <span class="item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-center-js">
              <div><span class="property-title">alignSelf</span>: 'center'</div>
              <div class="show">
                <span class="item align-self-item item-1"></span>
                <span class="item align-self-item item-2"></span>
                <span
                  class="item align-self-item show-align-self-center item-3"
                ></span>
                <span class="item align-self-item item-4"></span>
                <span class="item align-self-item item-5"></span>
                <span class="item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-flex-end-js">
              <div>
                <span class="property-title">alignSelf</span>: 'flexEnd'
              </div>
              <div class="show">
                <span class="item align-self-item item-1"></span>
                <span class="item align-self-item item-2"></span>
                <span
                  class="item align-self-item show-align-self-flex-end item-3"
                ></span>
                <span class="item align-self-item item-4"></span>
                <span class="item align-self-item item-5"></span>
                <span class="item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-baseline-js">
              <div>
                <span class="property-title">alignSelf</span>: 'baseline'
              </div>
              <div class="show">
                <span class="item align-self-item item-1"></span>
                <span class="item align-self-item item-2"></span>
                <span
                  class="item align-self-item show-align-self-baseline item-3"
                ></span>
                <span class="item align-self-item item-4"></span>
                <span class="item align-self-item item-5"></span>
                <span class="item align-self-item item-6"></span>
              </div>
            </div>

            <div class="property" id="align-self-stretch-js">
              <div>
                <span class="property-title">alignSelf</span>: 'stretch'
              </div>
              <div class="show">
                <span class="item align-self-item item-1"></span>
                <span class="item align-self-item item-2"></span>
                <span
                  class="item align-self-item show-align-self-stretch item-3"
                ></span>
                <span class="item align-self-item item-4"></span>
                <span class="item align-self-item item-5"></span>
                <span class="item align-self-item item-6"></span>
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
            <div class="property" id="order-number-js">
              <div><span class="property-title">order</span>: 'number'</div>
              <div class="show">
                <span class="item show-order-number item-1"></span>
                <span class="item show-order-number item-2"></span>
                <span class="item show-order-number item-3"></span>
                <span class="item show-order-number item-4"></span>
                <span class="item show-order-number item-5"></span>
                <span class="item show-order-number item-6"></span>
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
