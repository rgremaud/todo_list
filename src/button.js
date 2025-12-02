export {
    createProjectButton,
    addProjectClickEvent,
    deleteProjectClickEvent,
    addTodoButton,
    removeButtonTodo,
    closeDialog,
    submitTodoClickEvent,
    completedStatusClickEvent,
    editProjectClick,
};

import { Project } from "./projects";
import { printScreen } from "./display";
import { populateSidebar } from "./sidebar";
import { storeDatabase } from "./storage";
import { printTodos } from "./display";

import addSvg from "./assets/add.svg";
import addTodo from "./assets/add_circle.svg";
import removeSvg from "./assets/remove.svg";

function createProjectButton(dialog) {
    const sidebarHeader = document.getElementById("sidebarHeader");

    const button = document.createElement("button");
    const svg = document.createElement("img");
    svg.src = addSvg;
    svg.alt = "Add Project";
    button.appendChild(svg);
    button.id = "createProject";

    sidebarHeader.appendChild(button);

    button.addEventListener("click", () => {
        dialog.showModal();
    });

    return button;
}

function editProjectClick(button, dialog) {
  button.addEventListener("click", () => {
        dialog.showModal();
    });
}

function addProjectClickEvent(buttonId, database, dialog) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const project = new Project(
            document.getElementById("projectTitle").value,
            document.getElementById("projectDescription").value,
            document.getElementById("projectPriority").value,
            document.getElementById("projectDueDate").value,
        );
        database.addProject(project);

        dialog.close();
        document.getElementById("projectTitle").value = "";
        document.getElementById("projectDescription").value = "";
        document.getElementById("projectPriority").value = "";
        document.getElementById("projectDueDate").value = "";

        printScreen(database, project);
        populateSidebar(database);
        storeDatabase(database);
    });
}

function deleteProjectClickEvent(button, project, database) {
    button.addEventListener("click", () => {
        database.removeProject(project);
        printScreen(database, (project = ""));
        storeDatabase(database);
    });
}

function addTodoButton(projectHeaderDiv, project) {
    const todoButton = document.createElement("button");
    const todoButtonText = document.createElement("div");
    todoButtonText.textContent = "Add todo";
    const addCircle = document.createElement("img");
    addCircle.src = addTodo;
    addCircle.alt = "Add todo";
    todoButton.id = project.id + "addTodoButton";

    todoButton.appendChild(addCircle);
    todoButton.appendChild(todoButtonText);

    projectHeaderDiv.appendChild(todoButton);
}

function removeButtonTodo(project, database, todo) {
    const remove = document.createElement("button");
    const svg = document.createElement("img");
    svg.src = removeSvg;
    svg.alt = "Remove";
    remove.className = "removeButton";
    remove.appendChild(svg);

    remove.addEventListener("click", () => {
        project.removeTodo(todo);
        storeDatabase(database);
        printTodos(project);
    });

    return remove;
}

function closeDialog(/*database*/ button, dialog, /*project*/) {
    button.addEventListener("click", () => {
      // printScreen(database, project);
      dialog.close();
    });
}

function submitTodoClickEvent(button, project, dialog, database) {
    const todoInput = project.id + "todoInput";
    button.addEventListener("click", () => {
        project.newTodo(document.getElementById(todoInput).value);
        printTodos(project);

        document.getElementById(todoInput).value = "";

        storeDatabase(database);

        dialog.close();
    });
}

function completedStatusClickEvent(div, project, database) {
    div.addEventListener('click', () => {
        project.updateStatus();
        storeDatabase(database);
        printScreen(database, project);
    })
}