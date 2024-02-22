function copyTextToClipBoard(text, id) {
  return function () {
    const vscode = acquireVsCodeApi();

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
  { id: "#display-flex", text: "display: flex;" },
  { id: "#display-inline-flex", text: "display: inline-flex;" },

  { id: "#flex-direction-row", text: "flex-direction: row;" },
  { id: "#flex-direction-row-reverse", text: "flex-direction: row-reverse;" },
  { id: "#flex-direction-column", text: "flex-direction: column;" },
  {
    id: "#flex-direction-column-reverse",
    text: "flex-direction: column-reverse;",
  },

  { id: "#flex-wrap-nowrap", text: "flex-wrap: nowrap" },
  { id: "#flex-wrap-wrap", text: "flex-wrap: wrap" },
  { id: "#flex-wrap-wrap-reverse", text: "flex-wrap: wrap-reverse" },

  { id: "#justify-start", text: "justify-content: flex-start;" },
];

(function () {
  for (const value of texts) {
    const displayFlexElement = document.querySelector(value.id);

    displayFlexElement?.addEventListener(
      "click",
      copyTextToClipBoard(value.text, value.id)
    );
  }
})();
