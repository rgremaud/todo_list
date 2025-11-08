export { printScreen }

import { createTodoDialog } from "./dialog";

function printScreen(database, content) {
    // define the array and identify the parent projectContent div
    const array = database.projectArray;
    const allProjectContent = document.getElementById("allProjectContent");
    content.appendChild(allProjectContent);

    // Iterate over each project in the database array to build out dom elements
    displayProjects(array, allProjectContent);
    // Iterate over each project to assign all todos
}

function displayProjects(array, allProjectContent) {
    array.forEach((project) => {
        displayProject(project);
        projectHeader(project);
        displayTodos(project);
        
        // // 6 - Add click events to todo button to create a new todo and refresh the specific project - move to separate function
        // addTodo.addEventListener("click", () => {
        //     todoDialog.dialogElement.show();
        // })
        // // Todo add button is set to project.id
        // const submitTodo = document.getElementById(project.id);

        // submitTodo.addEventListener("click", () => {
        //     project.newTodo(document.getElementById("todoName").value);
        //     project.printTodos(allTodoDiv);

        //     document.getElementById("todoName").value = "";

        //     todoDialog.dialogElement.close();
        // });
    })
}

function displayProject(project) {
    // 1 - top line project div
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.id = project.id;

    allProjectContent.appendChild(projectDiv);
}

function projectHeader(project) {
    // 2 - project name 
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
    // 3 - create button for each project div to add todo - move to a separate function
    const addTodo = document.createElement("button");
    addTodo.className = "addTodo";
    addTodo.textContent = "Add todo!"

    return addTodo
}

function displayTodos(project) {
    // 4 - create todos div to hold all the todos append - move to a separate function
    const allTodoDiv = document.createElement("div")
    allTodoDiv.className = "allTodoDiv"

    const projectDiv = document.getElementById(project.id);
    projectDiv.appendChild(allTodoDiv);
}

function todoDialog(project) { 
    const projectDiv = document.getElementById(project.id);
    const todoDialog = createTodoDialog(project.id + ".");
    projectDiv.appendChild(todoDialog.dialogElement);
}

function openTodo(button, project) { 
    const dialogId = project.id + ".";
    const todoDialog = document.getElementById(dialogId);
    button.addEventListener("click", () => {
            todoDialog.show();
    })
}