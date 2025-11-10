export { Dialog, createProjectDialog, createTodoDialog };

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

// Function to generate and return dialog
function createProjectDialog(dialogId) {
    const newDialog = new Dialog(dialogId);

    // Add dialog info
    newDialog.addLabelAndInput("Project Title: ", "projectTitle");
    // Add button to dialog
    newDialog.addButton("addProjectButton", "Add Project");
    // Append to content
    content.appendChild(newDialog.dialogElement);

    return newDialog;
}

function createTodoDialog(project) {
    const todoDialogId = project.id + "todo"

    const todoDialog = new Dialog(todoDialogId);

    todoDialog.addLabelAndInput("New Todo: ", "todoName");
    const todoDialogButton = document.createElement("button");
    todoDialogButton.textContent = "Add";
    todoDialogButton.id = project.id+"add";
    todoDialog.dialogElement.appendChild(todoDialogButton);

    const allTodoDiv = document.getElementById(project.id + "allTodo");

    submitTodoClickEvent(todoDialogButton, project, todoDialog.dialogElement, allTodoDiv);

    return todoDialog;
}

function submitTodoClickEvent(button, project, dialog, allTodoDiv) {
    button.addEventListener("click", () => {
        project.newTodo(document.getElementById("todoName").value);
        project.printTodos(allTodoDiv);

        document.getElementById("todoName").value = "";

        dialog.close();
    });
}