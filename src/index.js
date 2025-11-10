// index.js
import "./reset.css";
import "./styles.css";

import { createProjectDialog } from "./dialog.js";
import { Database } from "./database.js";
import { addProjectClickEvent, createProjectButton } from "./button.js"
import { Project } from "./projects.js"
import { printScreen } from "./display.js";

/*
Todo list:
- Rework all code to no longer include the button / dialog classes
*/

// initialize the site
function initialize(content) {
    // Create project database to store all items
    const projectDatabase = new Database();

    // Create dialog to add projects
    const newDialog = createProjectDialog("addProject");

    // Create header with createProject button
    const header = document.createElement("header");
    content.appendChild(header);
    const createProject = createProjectButton("createProject", "Create Project", newDialog.dialogElement);

    // Look to move this
    addProjectButton.addEventListener("click", () => {
        // Create project
        const project = projectDatabase.createProject(document.getElementById("projectTitle").value);
        // Add project to database
        projectDatabase.addProject(project);
        // close dialog
        newDialog.dialogElement.close();
        // clear dialog content
        document.getElementById("projectTitle").value = "";

        // reset screen
        allProjectContent.textContent = "";
        // build new screen
        printScreen(projectDatabase, content);

    });

}

const content = document.getElementById("content");
initialize(content);


