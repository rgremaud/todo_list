export class Button {
    constructor(id, textContent) {
        this.dialogElement = document.createElement("dialog");
        this.dialogElement.id = id;
        this.dialogElement.textContent = textContent;
    }
}