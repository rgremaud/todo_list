export { printScreen, printTodos }

import { createTodoDialog } from "./dialog";
import { createSidebar } from "./sidebar";

function printScreen(database, content, project) {
    const array = database.projectArray;
    const activeProject = document.getElementById("activeProject");
    content.appendChild(activeProject);
    displayActiveProject(activeProject, project);
    createSidebar();
}

// no longer necessary
function displayProjects(array) {
    array.forEach((project) => {
        createDisplayProject(project);
        createProjectHeader(project);
        createAllTodoDiv(project);
        todoDialog(project);
    })
}

function displayActiveProject(activeProjectDiv, project) { 
    activeProjectDiv.textContent = "";
    createProjectHeader(project);
    createAllTodoDiv(project);
    todoDialog(project);
}

function createProjectHeader(project) {
    const activeDiv = document.getElementById("activeProject");

    const projHeader = document.createElement("div");
    projHeader.className = "projHeader";

    const projName = document.createElement("h3");
    projName.textContent = project.name;

    const addTodo = todoButton(project);

    projHeader.appendChild(projName);
    projHeader.appendChild(addTodo);

    activeDiv.appendChild(projHeader);
}

// keep but move since not display related
function todoButton(project) {
    const addTodoButton = document.createElement("button");
    addTodoButton.id = project.id + "addTodoButton";
    addTodoButton.className = "addTodo";
    addTodoButton.textContent = "Add todo!"

    return addTodoButton
}

// keep but move since not display related
function createAllTodoDiv(project) {
    const allTodoDiv = document.createElement("div");
    allTodoDiv.className = "allTodoDiv";
    allTodoDiv.id = project.id + "allTodo";

    const activeDiv = document.getElementById("activeProject");
    activeDiv.appendChild(allTodoDiv);
}

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