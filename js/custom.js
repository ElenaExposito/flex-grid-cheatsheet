const vscode = acquireVsCodeApi();

function copyTextToClipBoard(text) {
  return function () {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    vscode.postMessage({
      command: "textCopied",
      text,
    });
  };
}

const texts = [
  // FLEX
  // Display
  { id: "#display-flex", text: "display: flex;" },
  { id: "#display-inline-flex", text: "display: inline-flex;" },

  // flex-direction
  { id: "#flex-direction-row", text: "flex-direction: row;" },
  { id: "#flex-direction-row-reverse", text: "flex-direction: row-reverse;" },
  { id: "#flex-direction-column", text: "flex-direction: column;" },
  {
    id: "#flex-direction-column-reverse",
    text: "flex-direction: column-reverse;",
  },

  // flex-wrap
  { id: "#flex-wrap-nowrap", text: "flex-wrap: nowrap;" },
  { id: "#flex-wrap-wrap", text: "flex-wrap: wrap;" },
  { id: "#flex-wrap-wrap-reverse", text: "flex-wrap: wrap-reverse;" },

  // flex-flow
  { id: "#flex-flow-row-nowrap", text: "flex-flow: row nowrap;" },
  { id: "#flex-flow-row-wrap", text: "flex-flow: row wrap;" },
  {
    id: "#flex-flow-row-reverse-nowrap",
    text: "flex-flow: row-reverse nowrap;",
  },
  { id: "#flex-flow-row-reverse-wrap", text: "flex-flow: row-reverse wrap;" },
  { id: "#flex-flow-column-nowrap", text: "flex-flow: column nowrap;" },
  { id: "#flex-flow-column-wrap", text: "flex-flow: column wrap;" },
  {
    id: "#flex-flow-column-reverse-nowrap",
    text: "flex-flow: column-reverse nowrap;",
  },
  {
    id: "#flex-flow-column-reverse-wrap",
    text: "flex-flow: column-reverse wrap;",
  },

  // justify-content
  { id: "#justify-content-flex-start", text: "justify-content: flex-start;" },
  { id: "#justify-content-center", text: "justify-content: center;" },
  { id: "#justify-content-flex-end", text: "justify-content: flex-end;" },
  {
    id: "#justify-content-space-between",
    text: "justify-content: space-between;",
  },
  {
    id: "#justify-content-space-around",
    text: "justify-content: space-around;",
  },
  {
    id: "#justify-content-space-evenly",
    text: "justify-content: space-evenly;",
  },

  // align-items
  { id: "#align-items-flex-start", text: "align-items: flex-start;" },
  { id: "#align-items-center", text: "align-items: center;" },
  { id: "#align-items-flex-end", text: "align-items: flex-end;" },
  { id: "#align-items-baseline", text: "align-items: baseline;" },
  { id: "#align-items-stretch", text: "align-items: stretch;" },

  // align-content
  { id: "#align-content-flex-start", text: "align-content: flex-start;" },
  { id: "#align-content-center", text: "align-content: center;" },
  { id: "#align-content-flex-end", text: "align-content: flex-end;" },
  { id: "#align-content-stretch", text: "align-content: stretch;" },
  { id: "#align-content-space-between", text: "align-content: space-between;" },
  { id: "#align-content-space-around", text: "align-content: space-around;" },

  // flex-grow
  { id: "#flex-grow-number", text: "flex-grow: 0;" },

  // flex-shrink
  { id: "#flex-shrink-number", text: "flex-shrink: 0;" },

  // flex-basis
  { id: "#flex-basis-auto", text: "flex-basis: auto;" },
  { id: "#flex-basis-content", text: "flex-basis: content;" },
  { id: "#flex-basis-size", text: "flex-basis: 100px;" },

  // align-self
  { id: "#align-self-auto", text: "align-self: auto;" },
  { id: "#align-self-flex-start", text: "align-self: flex-start;" },
  { id: "#align-self-center", text: "align-self: center;" },
  { id: "#align-self-flex-end", text: "align-self: flex-end;" },
  { id: "#align-self-baseline", text: "align-self: baseline;" },
  { id: "#align-self-stretch", text: "align-self: stretch;" },

  // order
  { id: "#order-number", text: "order: 0;" },

  // FLEX + JS
  // Display
  { id: "#display-flex-js", text: "display: 'flex'" },
  { id: "#display-inline-flex-js", text: "display: 'inlineFlex'" },

  // flexDirection
  { id: "#flex-direction-row-js", text: "flexDirection: 'row'" },
  { id: "#flex-direction-row-reverse-js", text: "flexDirection: 'rowReverse'" },
  { id: "#flex-direction-column-js", text: "flexDirection: 'column'" },
  {
    id: "#flex-direction-column-reverse-js",
    text: "flexDirection: 'columnReverse'",
  },

  // flexWrap
  { id: "#flex-wrap-nowrap-js", text: "flexWrap: 'nowrap'" },
  { id: "#flex-wrap-wrap-js", text: "flexWrap: 'wrap'" },
  { id: "#flex-wrap-wrap-reverse-js", text: "flexWrap: 'wrapReverse'" },

  // flexFlow
  { id: "#flex-flow-row-nowrap-js", text: "flexFlow: 'row nowrap'" },
  { id: "#flex-flow-row-wrap-js", text: "flexFlow: 'row wrap'" },
  {
    id: "#flex-flow-row-reverse-nowrap-js",
    text: "flexFlow: 'rowReverse nowrap'",
  },
  { id: "#flex-flow-row-reverse-wrap-js", text: "flexFlow: 'rowReverse wrap'" },
  { id: "#flex-flow-column-nowrap-js", text: "flexFlow: 'column nowrap'" },
  { id: "#flex-flow-column-wrap-js", text: "flexFlow: 'column wrap'" },
  {
    id: "#flex-flow-column-reverse-nowrap-js",
    text: "flexFlow: 'columnReverse nowrap'",
  },
  {
    id: "#flex-flow-column-reverse-wrap-js",
    text: "flexFlow: 'columnReverse wrap'",
  },

  // justifyContent
  { id: "#justify-content-flex-start-js", text: "justifyContent: 'flexStart'" },
  { id: "#justify-content-center-js", text: "justifyContent: 'center'" },
  { id: "#justify-content-flex-end-js", text: "justifyContent: 'flexEnd'" },
  {
    id: "#justify-content-space-between-js",
    text: "justifyContent: 'spaceBetween'",
  },
  {
    id: "#justify-content-space-around-js",
    text: "justifyContent: 'spaceAround'",
  },
  {
    id: "#justify-content-space-evenly-js",
    text: "justifyContent: 'spaceEvenly'",
  },

  // alignItems
  { id: "#align-items-flex-start-js", text: "alignItems: 'flexStart'" },
  { id: "#align-items-center-js", text: "alignItems: 'center'" },
  { id: "#align-items-flex-end-js", text: "alignItems: 'flexEnd'" },
  { id: "#align-items-baseline-js", text: "alignItems: 'baseline'" },
  { id: "#align-items-stretch-js", text: "alignItems: 'stretch'" },

  // alignContent
  { id: "#align-content-flex-start-js", text: "alignContent: 'flexStart'" },
  { id: "#align-content-center-js", text: "alignContent: 'center'" },
  { id: "#align-content-flex-end-js", text: "alignContent: 'flexEnd'" },
  { id: "#align-content-stretch-js", text: "alignContent: 'stretch'" },
  {
    id: "#align-content-space-between-js",
    text: "alignContent: 'spaceBetween'",
  },
  { id: "#align-content-space-around-js", text: "alignContent: 'spaceAround'" },

  // flexGrow
  { id: "#flex-grow-number-js", text: "flexGrow: '0'" },

  // flexShrink
  { id: "#flex-shrink-number-js", text: "flexShrink: '0'" },

  // flexBasis
  { id: "#flex-basis-auto-js", text: "flexBasis: 'auto'" },
  { id: "#flex-basis-content-js", text: "flexBasis: 'content'" },
  { id: "#flex-basis-size-js", text: "flexBasis: '100px'" },

  // alignSelf
  { id: "#align-self-auto-js", text: "alignSelf: 'auto'" },
  { id: "#align-self-flex-start-js", text: "alignSelf: 'flexStart'" },
  { id: "#align-self-center-js", text: "alignSelf: 'center'" },
  { id: "#align-self-flex-end-js", text: "alignSelf: 'flexEnd'" },
  { id: "#align-self-baseline-js", text: "alignSelf: 'baseline'" },
  { id: "#align-self-stretch-js", text: "alignSelf: 'stretch'" },

  // order
  { id: "#order-number-js", text: "order: '0'" },

  // GRID
  // Display
  { id: "#display-grid", text: "display: grid;" },
  { id: "#display-inline-grid", text: "display: inline-grid;" },
  { id: "#display-subgrid", text: "display: subgrid;" },
  // grid-template-columns-rows-none
  {
    id: "#grid-template-columns-rows-none",
    text: "grid-template-columns: none;\ngrid-template-rows: none;",
  },
  // grid-template-columns-rows-tracks
  {
    id: "#grid-template-columns-rows-tracks",
    text: "grid-template-columns: 8px auto 8px;\ngrid-template-rows: 22% auto 22%;",
  },
  // grid-template-columns-rows-repeat
  {
    id: "#grid-template-columns-rows-repeat",
    text: "grid-template-columns: repeat(3, 12px);\ngrid-template-rows: repeat(3, 12px);",
  },
  // grid-template-areas-string
  {
    id: "#grid-template-areas-string-1",
    text: 'grid-template-areas:\n"a a a"\n"b c c"\n"b c c";',
  },
  {
    id: "#grid-template-areas-string-2",
    text: 'grid-template-areas:\n  "b b a"\n  "b b c"\n  "b b c";',
  },
  {
    id: "#grid-template-areas-string-3",
    text: 'grid-template-areas:\n  "a a ."\n  "a a ."\n  ". b c";',
  },
  // grid-area
  { id: "#grid-area", text: "grid-area: a;" },
  // grid-auto
  { id: "#grid-auto-columns", text: "grid-auto-columns: 8px;" },
  { id: "#grid-auto-rows", text: "grid-auto-rows: 8px;" },
  { id: "#grid-auto-flow-row", text: "grid-auto-flow: row;" },
  { id: "#grid-auto-flow-column", text: "grid-auto-flow: column;" },
  { id: "#grid-auto-flow-dense", text: "grid-auto-flow: dense;" },
  // grid-gaps
  { id: "#grid-column-gap", text: "grid-column-gap: 8px;" },
  { id: "#grid-row-gap", text: "grid-row-gap: 8px;" },
  { id: "#grid-gap", text: "grid-gap: 10px 2px;" },
  // justify-items
  { id: "#show-justify-items-start", text: "justify-items: start; " },
  { id: "#show-justify-items-end", text: "justify-items: end; " },
  { id: "#show-justify-items-center", text: "justify-items: center; " },
  { id: "#show-justify-items-stretch", text: "justify-items: stretch; " },
  // align-items
  { id: "#show-align-items-start", text: "align-items: start; " },
  { id: "#show-align-items-end", text: "align-items: end; " },
  { id: "#show-align-items-center", text: "align-items: center; " },
  { id: "#show-align-items-stretch", text: "align-items: stretch; " },
  // justify-content
  { id: "#show-justify-content-start", text: "justify-content: start; " },
  { id: "#show-justify-content-end", text: "justify-content: end; " },
  { id: "#show-justify-content-center", text: "justify-content: center; " },
  { id: "#show-justify-content-stretch", text: "justify-content: stretch; " },
  {
    id: "#show-justify-content-space-around",
    text: "justify-content: space-around; ",
  },
  {
    id: "#show-justify-content-space-between",
    text: "justify-content: space-between; ",
  },
  {
    id: "#show-justify-content-space-evenly",
    text: "justify-content: space-evenly; ",
  },
  // align-content
  { id: "#show-align-content-start", text: "align-content: start; " },
  { id: "#show-align-content-end", text: "align-content: end; " },
  { id: "#show-align-content-center", text: "align-content: center; " },
  { id: "#show-align-content-stretch", text: "align-content: stretch; " },
  {
    id: "#show-align-content-space-around",
    text: "align-content: space-around; ",
  },
  {
    id: "#show-align-content-space-between",
    text: "align-content: space-between; ",
  },
  {
    id: "#show-align-content-space-evenly",
    text: "align-content: space-evenly; ",
  },
  // grid-column
  {
    id: "#grid-column-start",
    text: "grid-column-start: 1;\n grid-column-end: 3;",
  },
  { id: "#grid-column-start-span", text: "grid-column-start: span 3;" },
  { id: "#grid-column-container", text: "grid-column: 2 / 3;" },
  { id: "#grid-column-container-span", text: "grid-column: 2 / span 2;" },
  // grid-row
  {
    id: "#grid-row-start",
    text: "grid-row-start: 1;\n grid-row-end: 3;",
  },
  { id: "#grid-row-start-span", text: "grid-row-start: span 3;" },
  { id: "#grid-row-container", text: "grid-row: 1 / 3;" },
  { id: "#grid-row-container-span", text: "grid-row: 1 / span 3;" },
  // Combining grid-column and grid-row
  {
    id: "#grid-column-row",
    text: "grid-row: 1 / span 2;\n grid-column: 1 / span 2;",
  },
  {
    id: "#grid-row-column",
    text: "grid-row: 2 / span 2;\n grid-column: 2 / span 2;",
  },
  // justify-self
  { id: "#show-justify-self-start", text: "justify-self: start; " },
  { id: "#show-justify-self-end", text: "justify-self: end; " },
  { id: "#show-justify-self-center", text: "justify-self: center; " },
  { id: "#show-justify-self-stretch", text: "justify-self: stretch; " },
  // align-self
  { id: "#show-align-self-start", text: "align-self: start; " },
  { id: "#show-align-self-end", text: "align-self: end; " },
  { id: "#show-align-self-center", text: "align-self: center; " },
  { id: "#show-align-self-stretch", text: "align-self: stretch; " },

  // GRID + JS
  // Display
  { id: "#display-grid-js", text: "display: 'grid'" },
  { id: "#display-inline-grid-js", text: "display: 'inlineGrid'" },
  { id: "#display-subgrid-js", text: "display: 'subgrid'" },

  // gridTemplateColumnsRowsNone
  {
    id: "#grid-template-columns-rows-none-js",
    text: "gridTemplateColumns: 'none',\ngridTemplateRows: 'none'",
  },

  // gridTemplateColumnsRowsTracks
  {
    id: "#grid-template-columns-rows-tracks-js",
    text: "gridTemplateColumns: '8px auto 8px',\ngridTemplateRows: '22% auto 22%'",
  },

  // gridTemplateColumnsRowsRepeat
  {
    id: "#grid-template-columns-rows-repeat-js",
    text: "gridTemplateColumns: 'repeat(3, 12px)',\ngridTemplateRows: 'repeat(3, 12px)'",
  },

  // gridTemplateAreasString
  {
    id: "#grid-template-areas-string-1-js",
    text: 'gridTemplateAreas:\n"a a a"\n"b c c"\n"b c c"',
  },
  {
    id: "#grid-template-areas-string-2-js",
    text: 'gridTemplateAreas:\n  "b b a"\n  "b b c"\n  "b b c"',
  },
  {
    id: "#grid-template-areas-string-3-js",
    text: 'gridTemplateAreas:\n  "a a ."\n  "a a ."\n  ". b c"',
  },

  // gridArea
  { id: "#grid-area-js", text: "gridArea: 'a'" },

  // gridAuto
  { id: "#grid-auto-columns-js", text: "gridAutoColumns: '8px'" },
  { id: "#grid-auto-rows-js", text: "gridAutoRows: '8px'" },
  { id: "#grid-auto-flow-row-js", text: "gridAutoFlow: 'row'" },
  { id: "#grid-auto-flow-column-js", text: "gridAutoFlow: 'column'" },
  { id: "#grid-auto-flow-dense-js", text: "gridAutoFlow: 'dense'" },

  // gridGaps
  { id: "#grid-column-gap-js", text: "gridColumnGap: '8px'" },
  { id: "#grid-row-gap-js", text: "gridRowGap: '8px'" },
  { id: "#grid-gap-js", text: "gridGap: '10px 2px'" },

  // justifyItems
  { id: "#show-justify-items-start-js", text: "justifyItems: 'start'" },
  { id: "#show-justify-items-end-js", text: "justifyItems: 'end'" },
  { id: "#show-justify-items-center-js", text: "justifyItems: 'center'" },
  { id: "#show-justify-items-stretch-js", text: "justifyItems: 'stretch'" },

  // alignItems
  { id: "#show-align-items-start-js", text: "alignItems: 'start'" },
  { id: "#show-align-items-end-js", text: "alignItems: 'end'" },
  { id: "#show-align-items-center-js", text: "alignItems: 'center'" },
  { id: "#show-align-items-stretch-js", text: "alignItems: 'stretch'" },

  // justifyContent
  { id: "#show-justify-content-start-js", text: "justifyContent: 'start'" },
  { id: "#show-justify-content-end-js", text: "justifyContent: 'end'" },
  { id: "#show-justify-content-center-js", text: "justifyContent: 'center'" },
  { id: "#show-justify-content-stretch-js", text: "justifyContent: 'stretch'" },
  {
    id: "#show-justify-content-space-around-js",
    text: "justifyContent: 'spaceAround'",
  },
  {
    id: "#show-justify-content-space-between-js",
    text: "justifyContent: 'spaceBetween'",
  },
  {
    id: "#show-justify-content-space-evenly-js",
    text: "justifyContent: 'spaceEvenly'",
  },

  // alignContent
  { id: "#show-align-content-start-js", text: "alignContent: 'start'" },
  { id: "#show-align-content-end-js", text: "alignContent: 'end'" },
  { id: "#show-align-content-center-js", text: "alignContent: 'center'" },
  { id: "#show-align-content-stretch-js", text: "alignContent: 'stretch'" },
  {
    id: "#show-align-content-space-around-js",
    text: "alignContent: 'spaceAround'",
  },
  {
    id: "#show-align-content-space-between-js",
    text: "alignContent: 'spaceBetween'",
  },
  {
    id: "#show-align-content-space-evenly-js",
    text: "alignContent: 'spaceEvenly'",
  },

  // gridColumn
  {
    id: "#grid-column-start-js",
    text: "gridColumnStart: 1,\ngridColumnEnd: 3",
  },
  { id: "#grid-column-start-span-js", text: "gridColumnStart: 'span 3'" },
  { id: "#grid-column-container-js", text: "gridColumn: '2 / 3'" },
  { id: "#grid-column-container-span-js", text: "gridColumn: '2 / span 2'" },

  // gridRow
  {
    id: "#grid-row-start-js",
    text: "gridRowStart: 1,\ngridRowEnd: 3",
  },
  { id: "#grid-row-start-span-js", text: "gridRowStart: 'span 3'" },
  { id: "#grid-row-container-js", text: "gridRow: '1 / 3'" },
  { id: "#grid-row-container-span-js", text: "gridRow: '1 / span 3'" },

  // Combining gridColumn and gridRow
  {
    id: "#grid-column-row-js",
    text: "gridRow: '1 / span 2',\ngridColumn: '1 / span 2'",
  },
  {
    id: "#grid-row-column-js",
    text: "gridRow: '2 / span 2',\ngridColumn: '2 / span 2'",
  },

  // justifySelf
  { id: "#show-justify-self-start-js", text: "justifySelf: 'start'" },
  { id: "#show-justify-self-end-js", text: "justifySelf: 'end'" },
  { id: "#show-justify-self-center-js", text: "justifySelf: 'center'" },
  { id: "#show-justify-self-stretch-js", text: "justifySelf: 'stretch'" },

  // alignSelf
  { id: "#show-align-self-start-js", text: "alignSelf: 'start'" },
  { id: "#show-align-self-end-js", text: "alignSelf: 'end'" },
  { id: "#show-align-self-center-js", text: "alignSelf: 'center'" },
  { id: "#show-align-self-stretch-js", text: "alignSelf: 'stretch'" },
];

(function () {
  for (const value of texts) {
    const displayFlexElement = document.querySelector(value.id);

    displayFlexElement?.addEventListener(
      "click",
      copyTextToClipBoard(value.text)
    );
  }
})();
