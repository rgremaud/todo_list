// index.js
import "./reset.css";
import "./styles.css";

import { createProjectDialog } from "./dialog.js";
import { Database } from "./database.js";
import { addProjectClickEvent, createProjectButton } from "./button.js"
import { createHeader } from "./header.js";
import { createSidebar } from "./sidebar.js";

/*
Todo list:
- Link each sidebar div to the project ID
- Rework the allProjectContent div to only display a single project with a more comprehensive summary of what it includes.
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


