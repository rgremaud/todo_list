export { createProjectDialog, createTodoDialog };

import { Button } from "./button.js";
import { printTodos } from "./display.js";



function createProjectDialog(dialogId) {
    // create the dialog and assign ID
    const projectDialog = document.createElement("dialog");
    projectDialog.id = dialogId;
    
    // assign the project title div
    const projectTitle = document.createElement("div");
    projectTitle.textContent = "Project Title";
    
    const input = document.createElement("input")
    input.id = "projectTitle";
        
    projectDialog.appendChild(projectTitle);
    projectDialog.appendChild(input);
    
    const addProjectButton = document.createElement("button");
    addProjectButton.id = "addProjectButton";
    addProjectButton.textContent = "Add Project";

    // create a cancel button - will need to refactor this
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    cancelButton.addEventListener("click", () => {
        projectDialog.close();
    })

    projectDialog.appendChild(addProjectButton);
    projectDialog.appendChild(cancelButton);

    content.appendChild(projectDialog);

    return projectDialog;
}

function createTodoDialog(project) {
    const todoDialog = document.createElement("dialog");
    todoDialog.id = project.id + "todo";

    const newTodo = document.createElement("div");
    newTodo.textContent = "New Todo: ";

    const input = document.createElement("input");
    input.id = project.id + "todoInput";

    todoDialog.appendChild(newTodo);
    todoDialog.appendChild(input);

    
    const todoDialogButton = document.createElement("button");
    todoDialogButton.textContent = "Add";
    todoDialogButton.id = project.id + "add";
    todoDialog.appendChild(todoDialogButton);

    const allTodoDiv = document.getElementById(project.id + "allTodo");

    // create a cancel button - will need to refactor this
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        todoDialog.dialogElement.close();
    })
    
    todoDialog.appendChild(cancelButton);

    submitTodoClickEvent(todoDialogButton, project, todoDialog, allTodoDiv);

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