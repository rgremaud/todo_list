export { printScreen, printTodos }

import { createTodoDialog } from "./dialog";
import { createSidebar } from "./sidebar";

function printScreen(database, content, project) {
    createSidebar();
    resetProjectDivs();
    printHeader(project);
    todoDialog(project);
    printTodos(project)
}

function resetProjectDivs() {
    const projectHeader = document.getElementById("projectHeader");
    projectHeader.textContent = "";

    const projectDetails = document.getElementById("projectDetails");
    projectDetails.textContent = "";
}

function printHeader(project) {
    const projectHeader = document.getElementById("projectHeader");

    const projName = document.createElement("h3");
    projName.textContent = project.name;

    projectHeader.appendChild(projName);
    addTodoButton(projectHeader, project);
}

function addTodoButton(projectHeaderDiv, project) {
    const todoButton = document.createElement("button");
    todoButton.textContent = "Add Todo";
    todoButton.id = project.id + "addTodoButton"

    projectHeaderDiv.appendChild(todoButton);
}

// keep but move since not display related
function todoDialog(project) {
    const projectHeader = document.getElementById("projectHeader");
    const todoDialog = createTodoDialog(project);
    projectHeader.appendChild(todoDialog);

    openTodo(project);
}

// keep but move since not display related
function openTodo(project) {
    const dialogId = project.id + "todo";
    const todoDialog = document.getElementById(dialogId);
    const button = document.getElementById(project.id + "addTodoButton");
    button.addEventListener("click", () => {
        todoDialog.show();
    })
}

// keep, refactor
function printTodos(project) {
    // Use the project div to find the all todo div
    const projectDetails = document.getElementById("projectDetails");

    // reset the textContent of div
    projectDetails.textContent = "";

    // define current todos
    const todos = project.tasks;

    // iterate over each todo
    todos.forEach((todo) => {
        // create taskDiv
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        // create task content div
        const taskContent = document.createElement("div");
        taskContent.className = "taskContent";

        // create marker div
        const taskMarker = document.createElement("div");
        taskMarker.className = "taskMarker";
        // check the task completion status and populate color as red or green
        if (todo.completed === false) {
            taskMarker.style.backgroundColor = "red";
        } else {
            taskMarker.style.backgroundColor = "green";
        }

        // add a click event to each taskDiv to toggle color between red and green
        taskDiv.addEventListener("click", () => {
            if (taskMarker.style.backgroundColor === "red") {
                taskMarker.style.backgroundColor = "green";
                todo.completed = true;
            } else {
                taskMarker.style.backgroundColor = "red";
                todo.completed = false;
            }
        });

        // create task text div
        const taskText = document.createElement("div");
        taskText.className = "taskText"
        taskText.textContent = todo.task;

        // create remove button
        const remove = document.createElement("button");
        remove.textContent = "Remove";

        // add remove click event
        remove.addEventListener("click", () => {
            project.removeTodo(todo);
        })

        // append items
        taskContent.appendChild(taskMarker);
        taskContent.appendChild(taskText);
        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(remove);

        projectDetails.appendChild(taskDiv);
    })
}