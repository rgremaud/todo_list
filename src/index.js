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
- Add a header section w/page title
- Add a sidebar that lists projects
- Create center console area for tracking todos
*/

// initialize the site
function initialize() {
    const projectDatabase = new Database();

    const newDialog = createProjectDialog("addProject");

    const createProject = createProjectButton("createProject", "Create Project", newDialog.dialogElement);

    addProjectClickEvent("addProjectButton", projectDatabase, newDialog.dialogElement);
}


initialize();


