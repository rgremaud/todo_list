export { createProjectButton, addProjectClickEvent }

import { Project } from "./projects";
import { printScreen } from "./display";
import { populateSidebar } from "./sidebar";

import addSvg from "./assets/add.svg"

function createProjectButton(dialog) {
    const sidebarHeader = document.getElementById("sidebarHeader");

    const button = document.createElement("button");
    const svg = document.createElement("img");
    svg.src = addSvg;
    svg.alt = "Add Project"
    button.appendChild(svg);
    button.id = "createProject"

    sidebarHeader.appendChild(button);

    // add click events for create project and add project
    button.addEventListener("click", () => {
        dialog.show();
    });

    return button
}

function addProjectClickEvent(buttonId, database, dialog) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
        const project = new Project(document.getElementById("projectTitle").value);
        database.addProject(project);
        dialog.close();
        document.getElementById("projectTitle").value = ""

        printScreen(database, content, project);
        populateSidebar(database);
    });
}
