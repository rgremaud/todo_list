export { printScreen }

import { createTodoDialog } from "./dialog";

function printScreen(database, content) {
    const array = database.projectArray;
    const allProjectContent = document.getElementById("allProjectContent");
    content.appendChild(allProjectContent);

    // Iterate over each project in the database array to build out dom elements
    displayProjects(array, allProjectContent);
    // Iterate over each project to assign all todos
}

function displayProjects(array) {
    array.forEach((project) => {
        displayProject(project); // creates top line project div
        projectHeader(project); // creates header div with title + add todo button
        displayTodos(project); // creates div for all todo's to be stored in
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

    const addTodo = todoButton();
    todoDialog(project);

    openTodo(addTodo, project);

    projHeader.appendChild(projName);
    projHeader.appendChild(addTodo);

    projectDiv.appendChild(projHeader);
}

function todoButton() {
    const addTodoButton = document.createElement("button");
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
}

function openTodo(button, project) { 
    const dialogId = project.id + "todo";
    const todoDialog = document.getElementById(dialogId);
    button.addEventListener("click", () => {
            todoDialog.show();
    })
}