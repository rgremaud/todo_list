export { Dialog };

import { Button } from "./button.js";

class Dialog {
    constructor(id) {
        this.dialogElement = document.createElement("dialog");
        this.dialogElement.id = id;
    }

    addButton(id, textContent) {
        const button = new Button(id, textContent);
        
        this.dialogElement.appendChild(button.buttonElement);
    }

    addLabelAndInput(divText, inputId) {
        // create div for label "Project Title"
        const div = document.createElement("div");
        div.textContent = divText;
        // create div for input
        const input = document.createElement("input")
        input.id = inputId;
        // append both to dialog box
        this.dialogElement.appendChild(div);
        this.dialogElement.appendChild(input);
    }
}
