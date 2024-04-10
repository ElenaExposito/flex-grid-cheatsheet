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
