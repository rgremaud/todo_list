// index.js
import "./reset.css";
import "./styles.css";

import { createDialog } from "./dialog.js";
import { Database } from "./database.js";
import { Button, createProjectButton } from "./button.js"
import { Project } from "./projects.js"

/*
Todo list:
- Add logic to print database items
*/
// initialize the site
function initialize(content) {
    // Create project database to store all items
    const projectDatabase = new Database();
    
   // Create dialog to add projects
    const newDialog = createDialog("addProject");

    // Create project buttons
    const createProject = createProjectButton("createProject", "Create Project", newDialog.dialogElement);
    
    // Look to move this
    addProjectButton.addEventListener("click", () => {
        const project = new Project(document.getElementById("projectTitle").value);
        projectDatabase.addProject(project);
        newDialog.dialogElement.close();
        console.log(projectDatabase);
        document.getElementById("projectTitle").value = "";
    });
}

const content = document.getElementById("content");
initialize(content);


