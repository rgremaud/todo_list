// index.js
import "./reset.css";
import "./styles.css";

import { createProjectDialog } from "./dialog.js";
import { Database } from "./database.js";
import { addProjectClickEvent, createProjectButton } from "./button.js"
import { createHeader } from "./header.js";
import { createSidebar } from "./sidebar.js";
/*
Add option to delete projects
Add localStorage
Hitting cancel on the add project button seems to clear everything
*/

// initialize the site
function initialize() {
    createHeader();
    createSidebar();

    const projectDatabase = new Database();
    const projectDialog = createProjectDialog("addProject");

    createProjectButton(projectDialog);
    addProjectClickEvent("addProjectButton", projectDatabase, projectDialog);
}


initialize();


