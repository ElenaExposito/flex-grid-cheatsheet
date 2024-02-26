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
  //Display
  { id: "#display-flex", text: "display: flex;" },
  { id: "#display-inline-flex", text: "display: inline-flex;" },

  //flex-direction
  { id: "#flex-direction-row", text: "flex-direction: row;" },
  { id: "#flex-direction-row-reverse", text: "flex-direction: row-reverse;" },
  { id: "#flex-direction-column", text: "flex-direction: column;" },
  {
    id: "#flex-direction-column-reverse",
    text: "flex-direction: column-reverse;",
  },

  //flex-wrap
  { id: "#flex-wrap-nowrap", text: "flex-wrap: nowrap;" },
  { id: "#flex-wrap-wrap", text: "flex-wrap: wrap;" },
  { id: "#flex-wrap-wrap-reverse", text: "flex-wrap: wrap-reverse;" },

  //flex-flow
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

  //justify-content
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

  //align-items
  { id: "#align-items-flex-start", text: "align-items: flex-start;" },
  { id: "#align-items-center", text: "align-items: center;" },
  { id: "#align-items-flex-end", text: "align-items: flex-end;" },
  { id: "#align-items-baseline", text: "align-items: baseline;" },
  { id: "#align-items-stretch", text: "align-items: stretch;" },

  //align-content
  { id: "#align-content-flex-start", text: "align-content: flex-start;" },
  { id: "#align-content-center", text: "align-content: center;" },
  { id: "#align-content-flex-end", text: "align-content: flex-end;" },
  { id: "#align-content-stretch", text: "align-content: stretch;" },
  { id: "#align-content-space-between", text: "align-content: space-between;" },
  { id: "#align-content-space-around", text: "align-content: space-around;" },

  //flex-grow
  { id: "#flex-grow-number", text: "flex-grow: 0;" },

  //flex-shrink
  { id: "#flex-shrink-number", text: "flex-shrink: 0;" },

  //flex-basis
  { id: "#flex-basis-auto", text: "flex-basis: auto;" },
  { id: "#flex-basis-content", text: "flex-basis: content;" },
  { id: "#flex-basis-size", text: "flex-basis: 100px;" },

  //flex
  { id: "#flex-grow", text: "flex: grow;" },
  { id: "#flex-shrink", text: "flex: shrink;" },
  { id: "#flex-basis", text: "flex: basis;" },

  //align-self
  { id: "#align-self-auto", text: "align-self: auto;" },
  { id: "#align-self-flex-start", text: "align-self: flex-start;" },
  { id: "#align-self-center", text: "align-self: center;" },
  { id: "#align-self-flex-end", text: "align-self: flex-end;" },
  { id: "#align-self-baseline", text: "align-self: baseline;" },
  { id: "#align-self-stretch", text: "align-self: stretch;" },

  //order
  { id: "#order-number", text: "order: 0;" },
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
