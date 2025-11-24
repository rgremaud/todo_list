export { printScreen, printTodos }

import { createTodoDialog } from "./dialog";
import { populateSidebar } from "./sidebar";
import { deleteProjectClickEvent } from "./button"
import { storeDatabase } from "./storage";

import deleteSvg from "./assets/delete.svg";
import removeSvg from "./assets/remove.svg";
import checkBox from "./assets/check_box.svg"
import blankCheckBox from "./assets/check_box_outline.svg"
import addTodo from "./assets/add_circle.svg"

function printScreen(database, project = "") {
    resetProjectDivs();

    populateSidebar(database);

    if (project !== "") {
        printHeader(project, database);
        todoDialog(project, database);
        printTodos(project, database)
    }
}

function resetProjectDivs() {
    const projectHeader = document.getElementById("projectHeader");
    projectHeader.textContent = "";

    const projectDetails = document.getElementById("projectDetails");
    projectDetails.textContent = "";
}

function printHeader(project, database) {
    const projectHeader = document.getElementById("projectHeader");

    const projName = document.createElement("h3");
    projName.textContent = project.name;

    const timestamp = document.createElement("div");
    timestamp.textContent = "Created " + displayTimestamp(project);

    const projDescription = document.createElement("div");
    projDescription.textContent = project.description;

    const projPriority = document.createElement("div");
    projPriority.textContent = project.priority;

    const dueDate = document.createElement("div");
    dueDate.textContent = "Due date " + project.dueDate;

    // Testing time until due - doesnt work.
    const timeDelta = document.createElement("div");
    const unformattedDueDate = new Date(project.dueDate);
    const unformattedCreatedDate = new Date(project.createdAt);
    console.log(unformattedDueDate);
    console.log(unformattedCreatedDate);
    const delta = (unformattedDueDate.getTime() - unformattedCreatedDate.getTime())/(1000 * 60 * 60 * 24);
    timeDelta.textContent = "Due in " + delta;

    const deleteProject = document.createElement("button");
    deleteProject.id = "deleteProject"
    const svg = document.createElement("img")
    svg.src = deleteSvg;
    svg.alt = "Delete project";
    const deleteProjectText = document.createElement("div");
    deleteProjectText.textContent = "Delete project";
    deleteProject.appendChild(svg);
    deleteProject.appendChild(deleteProjectText);
    deleteProjectClickEvent(deleteProject, project, database)

    projectHeader.appendChild(projName);
    projectHeader.appendChild(projDescription);
    projectHeader.appendChild(projPriority);
    projectHeader.appendChild(timestamp);
    projectHeader.appendChild(dueDate);
    projectHeader.appendChild(timeDelta);
    projectHeader.appendChild(deleteProject);
    addTodoButton(projectHeader, project);
}

// consider moving this back into the project class once functioning
function displayTimestamp(project) {
    const unformattedDate = new Date(project.createdAt);
    const formattedDate = unformattedDate.toDateString();

    return formattedDate;
}

function addTodoButton(projectHeaderDiv, project) {
    const todoButton = document.createElement("button");
    const todoButtonText = document.createElement("div");
    todoButtonText.textContent = "Add todo";
    const addCircle = document.createElement("img");
    addCircle.src = addTodo;
    addCircle.alt = "Add todo";
    todoButton.id = project.id + "addTodoButton"

    todoButton.appendChild(addCircle);
    todoButton.appendChild(todoButtonText);

    projectHeaderDiv.appendChild(todoButton);
}

// keep but move since not display related
function todoDialog(project, database) {
    const projectHeader = document.getElementById("projectHeader");
    const todoDialog = createTodoDialog(project, database);
    projectHeader.appendChild(todoDialog);

    openTodo(project);
}

// keep but move since not display related
function openTodo(project) {
    const dialogId = project.id + "todo";
    const todoDialog = document.getElementById(dialogId);
    const button = document.getElementById(project.id + "addTodoButton");
    button.addEventListener("click", () => {
        todoDialog.showModal();
    })
}

// keep, refactor
function printTodos(project, database) {
    // Use the project div to find the all todo div
    const projectDetails = document.getElementById("projectDetails");

    // reset the textContent of div
    projectDetails.textContent = "";

    // define current todos
    const todos = project.tasks;

    // iterate over each todo
    if (todos !== undefined) {
        todos.forEach((todo) => {
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";

            const taskContent = document.createElement("div");
            taskContent.className = "taskContent";

            const taskMarker = document.createElement("img");
            taskMarker.className = "taskMarker";
            if (todo.completed === false) {
                taskMarker.src = blankCheckBox;
                taskMarker.alt = "Not completed";
            } else {
                taskMarker.src = checkBox;
                taskMarker.alt = "Completed";
            }

            taskDiv.addEventListener("click", () => {
                if (taskMarker.src === blankCheckBox) {
                    taskMarker.src = checkBox;
                    taskMarker.alt = "Completed";
                } else {
                    taskMarker.src = blankCheckBox;
                    taskMarker.alt = "Not completed";
                }
            });

            const taskText = document.createElement("div");
            taskText.className = "taskText"
            taskText.textContent = todo.task;

            const remove = document.createElement("button");
            const svg = document.createElement("img");
            svg.src = removeSvg
            svg.alt = "Remove";
            remove.className = "removeButton";
            remove.appendChild(svg);

            // move this to button
            remove.addEventListener("click", () => {
                project.removeTodo(todo);
                storeDatabase(database);
                printTodos(project);
            })

            taskContent.appendChild(taskMarker);
            taskContent.appendChild(taskText);
            taskDiv.appendChild(taskContent);
            taskDiv.appendChild(remove);

            projectDetails.appendChild(taskDiv);
        })
    }
}