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
