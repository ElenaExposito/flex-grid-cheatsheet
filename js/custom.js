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
  { id: "#flex-wrap-nowrap", text: "flex-wrap: nowrap" },
  { id: "#flex-wrap-wrap", text: "flex-wrap: wrap" },
  { id: "#flex-wrap-wrap-reverse", text: "flex-wrap: wrap-reverse" },

  //flex-flow
  { id: "flex-flow-row-nowrap", text: "flex-flow: row nowrap;" },
  { id: "flex-flow-row-wrap", text: "flex-flow: row wrap;" },
  {
    id: "flex-flow-row-reverse-nowrap",
    text: "flex-flow: row-reverse nowrap;",
  },
  { id: "flex-flow-row-reverse-wrap", text: "flex-flow: row-reverse wrap;" },
  { id: "flex-flow-column-nowrap", text: "flex-flow: column nowrap;" },
  { id: "flex-flow-column-wrap", text: "flex-flow: column wrap;" },
  {
    id: "flex-flow-column-reverse-nowrap",
    text: "flex-flow: column-reverse nowrap;",
  },
  {
    id: "flex-flow-column-reverse-wrap",
    text: "flex-flow: column-reverse wrap;",
  },

  { id: "#justify-start", text: "justify-content: flex-start;" },
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
