export { Dialog, createProjectDialog, createTodoDialog };

import { Button } from "./button.js";
import { printTodos } from "./display.js";

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
        const div = document.createElement("div");
        div.textContent = divText;
    
        const input = document.createElement("input")
        input.id = inputId;
        
        this.dialogElement.appendChild(div);
        this.dialogElement.appendChild(input);
    }
}

function createProjectDialog(dialogId) {
    const newDialog = new Dialog(dialogId);
    newDialog.addLabelAndInput("Project Title: ", "projectTitle");
    newDialog.addButton("addProjectButton", "Add Project");
    
    content.appendChild(newDialog.dialogElement);

    return newDialog;
}

function createTodoDialog(project) {
    const todoDialogId = project.id + "todo"

    const todoDialog = new Dialog(todoDialogId);

    todoDialog.addLabelAndInput("New Todo: ", project.id + "todoInput");
    const todoDialogButton = document.createElement("button");
    todoDialogButton.textContent = "Add";
    todoDialogButton.id = project.id + "add";
    todoDialog.dialogElement.appendChild(todoDialogButton);

    const allTodoDiv = document.getElementById(project.id + "allTodo");

    submitTodoClickEvent(todoDialogButton, project, todoDialog.dialogElement, allTodoDiv);

    return todoDialog;
}

function submitTodoClickEvent(button, project, dialog, allTodoDiv) {
    const todoInput = project.id + "todoInput";
    button.addEventListener("click", () => {
        project.newTodo(document.getElementById(todoInput).value); 
        printTodos(project);

        document.getElementById(todoInput).value = "";

        dialog.close();
    });
}