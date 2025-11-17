export { printScreen, printTodos }

import { createTodoDialog } from "./dialog";
import { createSidebar } from "./sidebar";

function printScreen(database, content, project) {
    // add a central function that resets text content for sidebar and project
    createSidebar();
    resetDivs();
    printHeader(project);

}

function resetDivs() { 
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
}

// keep but move since not display related

// keep but move since not display related
function todoDialog(project) {
    const activeProject = document.getElementById("activeProject");
    const todoDialog = createTodoDialog(project);
    activeProject.appendChild(todoDialog);

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
    const allTodoDiv = document.getElementById(project.id + "allTodo")

    // reset the textContent of div
    allTodoDiv.textContent = "";

    // define current todos
    const todos = project.tasks;

    // iterate over each todo
    todos.forEach((todo) => {
        // create taskDiv
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

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
                console.log(todo)
            } else {
                taskMarker.style.backgroundColor = "red";
                todo.completed = false;
                console.log(todo);
            }
        });

        // create task text div
        const taskText = document.createElement("div");
        taskText.className = "taskText"
        taskText.textContent = todo.task;

        taskDiv.appendChild(taskMarker);
        taskDiv.appendChild(taskText);

        allTodoDiv.appendChild(taskDiv);
    })
}