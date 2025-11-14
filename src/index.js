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
- Rework so button class is also removed, then refactor code
*/

// initialize the site
function initialize() {
    createHeader();

    const projectDatabase = new Database();
    const projectDialog = createProjectDialog("addProject");

    createProjectButton(projectDialog);
    addProjectClickEvent("addProjectButton", projectDatabase, projectDialog);
}


initialize();


