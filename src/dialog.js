export { createProjectDialog, createTodoDialog };

import { printTodos } from "./display.js";

// rework the createProjectDialog so it is a form for submitting
// figure out why this is clearing all items when canceled
// add a due date and priority selection
function createProjectDialog(dialogId) {
    // create the dialog and assign ID
    const projectDialog = document.createElement("dialog");
    projectDialog.id = dialogId;

    // create the form
    const projectForm = document.createElement("form");
    // projectForm.method = "POST";

    // create line 1 div for project title 
    const lineOne = document.createElement("div");
    const projectTitle = document.createElement("label");
    projectTitle.textContent = "Project Title";

    const titleInput = document.createElement("input")
    titleInput.id = "projectTitle";
    projectTitle.htmlFor = "projectTitle";

    lineOne.appendChild(projectTitle);
    lineOne.appendChild(titleInput);

    // create line 2 for project description
    const lineTwo = document.createElement("div");
    const projectDescription = document.createElement("label");
    projectDescription.textContent = "Description: ";

    const descriptionInput = document.createElement("input");
    descriptionInput.id = "projectDescription";

    projectDescription.htmlFor = "projectDescription";

    lineTwo.appendChild(projectDescription);
    lineTwo.appendChild(descriptionInput);

    // create priority
    const lineThree = document.createElement("div");
    const projectPriority = document.createElement("label");
    projectPriority.textContent = "Priority: ";

    const priorityInput = document.createElement("select");
    priorityInput.id = "projectPriority";

    const priorityOptions = [
        { value: "high", text: "High" },
        { value: "medium", text: "Medium" },
        { value: "low", text: "Low" },
    ]

    priorityOptions.forEach(option => {
        const priorityOption = document.createElement("option");
        priorityOption.value = option.value;
        priorityOption.textContent = option.text;
        priorityInput.appendChild(priorityOption);
    })

    projectPriority.htmlFor = "projectPriority"

    lineThree.appendChild(projectPriority);
    lineThree.appendChild(priorityInput);

    // button
    const addProjectButton = document.createElement("button");
    addProjectButton.id = "addProjectButton";
    addProjectButton.textContent = "Add Project";

    // create a cancel button - will need to refactor this
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    cancelButton.addEventListener("click", () => {
        projectDialog.close();
    })

    projectForm.appendChild(lineOne);
    projectForm.appendChild(lineTwo);
    projectForm.appendChild(lineThree);
    projectForm.appendChild(addProjectButton);
    projectForm.appendChild(cancelButton);

    projectDialog.appendChild(projectForm);

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
        todoDialog.close();
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