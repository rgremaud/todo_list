// index.js
import "./reset.css";
import "./styles.css";

import { createProjectDialog } from "./dialog.js";
import { Database } from "./database.js";
import { addProjectClickEvent, createProjectButton } from "./button.js"
import { createHeader } from "./header.js";
import { createSidebar } from "./sidebar.js";
import { loadDatabase } from "./storage.js";
/*

Add option to adjust priority on projects
Add option to assign to-do date on projects
Add option to adjust to-do date
Hitting cancel on the add project button clears the current view
Creating a project doesn't properly load it
*/

// initialize the site
function initialize() {
    createHeader();
    createSidebar();

    const projectDatabase = loadDatabase();
    const projectDialog = createProjectDialog("addProject");

    createProjectButton(projectDialog);
    addProjectClickEvent("addProjectButton", projectDatabase, projectDialog);
}

initialize();
