export { createProjectButton, addProjectClickEvent }

import { Project } from "./projects";
import { printScreen } from "./display";
import { populateSidebar } from "./sidebar";

import addSvg from "./assets/add.svg"
import { storeDatabase } from "./storage";

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
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const project = new Project(document.getElementById("projectTitle").value,
            document.getElementById("projectDescription").value,
            document.getElementById("projectPriority").value);
        database.addProject(project);
        console.log(project); // remove
        dialog.close();
        document.getElementById("projectTitle").value = "";
        document.getElementById("projectDescription").value = "";
        document.getElementById("projectPriority").value = "";

        printScreen(database, content, project);
        populateSidebar(database);
        storeDatabase(database);
    });
}
