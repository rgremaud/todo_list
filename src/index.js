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
- Rework site layout with a header, then project nav column across left with active project details displayed center screen
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


