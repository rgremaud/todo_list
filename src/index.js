// index.js
import "./reset.css";
import "./styles.css";

import { createProjectDialog } from "./dialog.js";
import { Database } from "./database.js";
import { addProjectClickEvent, createProjectButton } from "./button.js"
import { createHeader } from "./header.js";
import { Project } from "./projects.js"
import { printScreen } from "./display.js";

/*
Todo list:
- Figure out the structure for assigning due dates
*/

// initialize the site
function initialize() {
    createHeader();

    const projectDatabase = new Database();

    const newDialog = createProjectDialog("addProject");

    const createProject = createProjectButton("createProject", "Create Project", newDialog.dialogElement);

    addProjectClickEvent("addProjectButton", projectDatabase, newDialog.dialogElement);
}


initialize();


