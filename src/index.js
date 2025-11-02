// index.js
import "./reset.css";
import "./styles.css";

import { Dialog } from "./dialog.js";
import { Database } from "./database.js";
import { add } from "date-fns";


/*
Todo list:
objects - Projects - top level projects
        - Todos - tasks under projects
        - Database - storage for all projects

Upon initialize - build a database object


*/
// initialize the dialog w/class
// addDialog();

function initialize(content) {
    const projectDatabase = new Database();
    console.log(projectDatabase);

    const newDialog = new Dialog("addProject");
    newDialog.addButton("addProject", "Add Project");
    content.appendChild(newDialog.dialogElement);
}

const content = document.getElementById("content");
initialize(content);


