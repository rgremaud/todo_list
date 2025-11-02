// index.js
import "./reset.css";
import "./styles.css";

// import { Project } from "./projects.js";
import { addDialog } from "./dialog.js";
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
addDialog();

const projectDatabase = new Database();
console.log(projectDatabase);

