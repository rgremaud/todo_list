export { createProjectButton, addProjectClickEvent }

import { Project } from "./projects";
import { printScreen } from "./display";

function createProjectButton(dialog) {
    const button = document.createElement("button");
    button.textContent = "Create Project"
    button.id = "createProject"

    sidebar.appendChild(button);

    // add click events for create project and add project
    button.addEventListener("click", () => {
        dialog.show();
    });

    return button
}
// addProjectClickEvent("addProjectButton", projectDatabase, projectDialog);
function addProjectClickEvent(buttonId, database, dialog) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
        const project = new Project(document.getElementById("projectTitle").value);
        database.addProject(project);
        dialog.close();
        document.getElementById("projectTitle").value = ""

        allProjectContent.textContent = "";
        printScreen(database, content);
    });
}
