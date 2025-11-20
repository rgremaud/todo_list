export { printScreen, printTodos }

import { createTodoDialog } from "./dialog";
import { populateSidebar } from "./sidebar";

import deleteSvg from "./assets/delete.svg";
import checkBox from "./assets/check_box.svg"
import blankCheckBox from "./assets/check_box_outline.svg"

function printScreen(database, content, project) {
    resetProjectDivs();

    populateSidebar(database);

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

    const timestamp = document.createElement("div");
    timestamp.textContent = "Created " + displayTimestamp(project);

    const projDescription = document.createElement("div");
    projDescription.textContent = project.description;

    const projPriority = document.createElement("div");
    projPriority.textContent = project.priority;

    projectHeader.appendChild(projName);
    projectHeader.appendChild(projDescription);
    projectHeader.appendChild(projPriority);
    projectHeader.appendChild(timestamp);
    addTodoButton(projectHeader, project);
}

// consider moving this back into the project class once functioning
function displayTimestamp(project) {
    /* logic to convert to date that can be displayed - factor this into 
        const displayDate = new Date(this.createdAt);
        displayDate.toString();
        */
    const unformattedDate = new Date(project.createdAt);
    const formattedDate = unformattedDate.toDateString();

    return formattedDate;
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
        /*
            const button = document.createElement("button");
            const svg = document.createElement("img");
            svg.src = addSvg;
            svg.alt = "Add Project"
            button.appendChild(svg);
        */
        // create marker div
        const taskMarker = document.createElement("img");
        taskMarker.className = "taskMarker";
        // check the task completion status and populate color as red or green
        if (todo.completed === false) {
            taskMarker.src = blankCheckBox;
            taskMarker.alt = "Not completed";
        } else {
            taskMarker.src = checkBox;
            taskMarker.alt = "Completed";
        }

        // add a click event to each taskDiv to toggle color between red and green
        taskDiv.addEventListener("click", () => {
            if (taskMarker.src === blankCheckBox) {
                taskMarker.src = checkBox;
                taskMarker.alt = "Completed";
            } else {
                taskMarker.src = blankCheckBox;
                taskMarker.alt = "Not completed";
            }
        });

        // create task text div
        const taskText = document.createElement("div");
        taskText.className = "taskText"
        taskText.textContent = todo.task;

        // create remove button
        const remove = document.createElement("button");
        const svg = document.createElement("img");
        svg.src = deleteSvg
        svg.alt = "Remove";
        remove.className = "removeButton";
        remove.appendChild(svg);

        // add remove click event
        remove.addEventListener("click", () => {
            project.removeTodo(todo);
            printTodos(project);
        })

        // append items
        taskContent.appendChild(taskMarker);
        taskContent.appendChild(taskText);
        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(remove);

        projectDetails.appendChild(taskDiv);
    })
}