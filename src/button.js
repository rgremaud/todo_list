export { Button, createProjectButton, addProjectClickEvent }

import { Project } from "./projects";
import { printScreen } from "./display";

class Button {
    constructor(id, textContent) {
        this.buttonElement = document.createElement("button");
        this.buttonElement.id = id;
        this.buttonElement.textContent = textContent;
    }

    showDialogForm(button, dialog) {
        button.addEventListener("click", () => {
            dialog.show();
        });
    }

    addProjectClick(button, dialog, database) {
        button.addEventListener("click", () => {
            const project = new Project(document.getElementById("projectTitle").value);
            database.addProject(project);
            dialog.close();
        });
    }
}

function createProjectButton(buttonId, textContent, dialog) {
    const button = new Button(buttonId, textContent);
    content.appendChild(button.buttonElement);

    // add click events for create project and add project
    button.showDialogForm(button.buttonElement, dialog);

    return button
}

function addProjectClickEvent(buttonName = "projectTitle", database, dialog) {
    const project = new Project(document.getElementById(buttonName).value);
    database.addProject(project);
    dialog.close();
    document.getElementById(buttonName).value = ""

    projectContent.textContent = "";
    printScreen(projectDatabase, content);
}
