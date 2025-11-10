export { printScreen }

import { createTodoDialog } from "./dialog";

function printScreen(database, content) {
    const array = database.projectArray;
    const allProjectContent = document.getElementById("allProjectContent");
    content.appendChild(allProjectContent);
    displayProjects(array, allProjectContent);
}

function displayProjects(array) {
    array.forEach((project) => {
        displayProject(project); 
        projectHeader(project); 
        displayTodos(project);
        todoDialog(project);
    })
}

function displayProject(project) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.id = project.id;

    allProjectContent.appendChild(projectDiv);
}

function projectHeader(project) {
    const projectDiv = document.getElementById(project.id);

    const projHeader = document.createElement("div");
    projHeader.className = "projHeader";

    const projName = document.createElement("h3");
    projName.textContent = project.name;

    const addTodo = todoButton(project);

    projHeader.appendChild(projName);
    projHeader.appendChild(addTodo);

    projectDiv.appendChild(projHeader);
}

function todoButton(project) {
    const addTodoButton = document.createElement("button");
    addTodoButton.id = project.id + "addTodoButton";
    addTodoButton.className = "addTodo";
    addTodoButton.textContent = "Add todo!"

    return addTodoButton
}

function displayTodos(project) {
    const allTodoDiv = document.createElement("div");
    allTodoDiv.className = "allTodoDiv";
    allTodoDiv.id = project.id + "allTodo";

    const projectDiv = document.getElementById(project.id);
    projectDiv.appendChild(allTodoDiv);
}

function todoDialog(project) { 
    const projectDiv = document.getElementById(project.id);
    const todoDialog = createTodoDialog(project);
    projectDiv.appendChild(todoDialog.dialogElement);

    openTodo(project);
}

function openTodo(project) { 
    const dialogId = project.id + "todo";
    const todoDialog = document.getElementById(dialogId);
    const button = document.getElementById(project.id + "addTodoButton");
    button.addEventListener("click", () => {
            todoDialog.show();
    })
}