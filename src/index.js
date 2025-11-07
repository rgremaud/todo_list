// index.js
import "./reset.css";
import "./styles.css";

import { createProjectDialog } from "./dialog.js";
import { Database } from "./database.js";
import { Button, createProjectButton } from "./button.js"
import { Project } from "./projects.js"
import { printScreen } from "./display.js";

/*
Todo list:
- Print todos to screen when added
- Rework the id and class names for all buttons - each Todo should have a button w/a class name that submits to that specific project
*/
// initialize the site
function initialize(content) {
    // Create project database to store all items
    const projectDatabase = new Database();

    // Create dialog to add projects
    const newDialog = createProjectDialog("addProject");

    // Create project buttons
    const createProject = createProjectButton("createProject", "Create Project", newDialog.dialogElement);

    // Look to move this
    addProjectButton.addEventListener("click", () => {
        const project = new Project(document.getElementById("projectTitle").value);
        projectDatabase.addProject(project);
        newDialog.dialogElement.close();
        document.getElementById("projectTitle").value = "";

        // build screen
        projectContent.textContent = "";
        printScreen(projectDatabase, content);
    });

}

const content = document.getElementById("content");
initialize(content);


