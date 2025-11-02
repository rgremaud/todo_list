export { addDialog };

import { Project } from "./projects.js";

function addDialog() { 
    const dialog = document.getElementById("projectDialog");
    const openDialog = document.getElementById("openDialog");
    const addProject = document.getElementById("addProject");

    // create div for label "Project Title"
    const label = document.createElement("label")
    label.textContent = "Project title: "
    // create div for input
    const input = document.createElement("input")
    input.id = "input";
    // append both to dialog box
    dialog.appendChild(label);
    dialog.appendChild(input);

    openDialog.addEventListener("click", () => {
        dialog.show();
    });

    addProject.addEventListener("click", () => {
        dialog.close();
        const project = new Project(document.getElementById("input").value);
        console.log(project);
    });

};

function addProject() {
    // add an input slot for project title

}

class Dialog {
    constructor(id) {
        this.dialog = document.createElement("dialog");
        this.dialog.id = id;
    }

    // add functions to add inputs / buttons to Dialog box
}
