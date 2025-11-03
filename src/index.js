// index.js
import "./reset.css";
import "./styles.css";

import { Dialog } from "./dialog.js";
import { Database } from "./database.js";
import { Button } from "./button.js"
import { Project } from "./projects.js"

/*
Todo list:
- Clean up button structure - remove class and create buttons like a normal person?
- Refactor the initialize function


*/
// initialize the dialog w/class

function initialize(content) {
    // Create project database to store all items
    const projectDatabase = new Database();
    
    // Create Dialog to add projects
    const newDialog = new Dialog("addProject");

    // Add Dialog info
    newDialog.addLabelAndInput("Project Title: ", "projectTitle");
    // Add Button
    newDialog.addButton("addProjectButton", "Add Project");
    // Append to content
    content.appendChild(newDialog.dialogElement);


    // Define buttons
    const createProject = new Button("createProject", "Create Project");
    content.appendChild(createProject.buttonElement);
    const addProjectButton = document.getElementById("addProjectButton")
    
    // add click events for create project and add project
    createProject.buttonElement.addEventListener("click", () => {
        newDialog.dialogElement.show();
    });

    addProjectButton.addEventListener("click", () => {
        const project = new Project(document.getElementById("projectTitle").value);
        projectDatabase.addProject(project);
        console.log(projectDatabase);
        newDialog.dialogElement.close();
    });
}

const content = document.getElementById("content");
initialize(content);


