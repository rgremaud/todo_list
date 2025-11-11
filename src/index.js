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
- Add a circle box at the start of each todo which is red if completed, green if not completed
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


