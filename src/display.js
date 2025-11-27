export { printScreen, printTodos }

import { createTodoDialog } from "./dialog";
import { populateSidebar } from "./sidebar";
import { createHeaderDivs } from "./header";
import { addTodoButton } from "./button";
import { removeButtonTodo } from "./button";

import checkBox from "./assets/check_box.svg"
import blankCheckBox from "./assets/check_box_outline.svg"

function printScreen(database, project = "") {
    resetProjectDivs();

    populateSidebar(database);

    if (project !== "") {
        printHeader(project, database);
        addTodoDialog(project, database);
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

    const headerDivs = createHeaderDivs(project, database);

    headerDivs.forEach((div) => { 
        projectHeader.appendChild(div);
    })

    addTodoButton(projectHeader, project);
}

// keep but move since not display related
function addTodoDialog(project, database) {
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

function printTodos(project, database) {
    const projectDetails = document.getElementById("projectDetails");

    projectDetails.textContent = "";

    const todos = project.tasks;

    buildTodoDivs(todos, project);
}

function buildTodoDivs(todos, project) { 
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

            updateDivColor(taskDiv, taskMarker);

            const taskText = document.createElement("div");
            taskText.className = "taskText"
            taskText.textContent = todo.task;

            const remove = removeButtonTodo();

            taskContent.appendChild(taskMarker);
            taskContent.appendChild(taskText);
            taskDiv.appendChild(taskContent);
            taskDiv.appendChild(remove);

            projectDetails.appendChild(taskDiv);
        })
    }
}

function updateDivColor(div, taskMarker) { 
    div.addEventListener("click", () => {
                if (taskMarker.src === blankCheckBox) {
                    taskMarker.src = checkBox;
                    taskMarker.alt = "Completed";
                } else {
                    taskMarker.src = blankCheckBox;
                    taskMarker.alt = "Not completed";
                }
            });
}