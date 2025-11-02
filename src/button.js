export class Button {
    constructor(id, textContent) {
        this.buttonElement = document.createElement("button");
        this.buttonElement.id = id;
        this.buttonElement.textContent = textContent;
    }
}