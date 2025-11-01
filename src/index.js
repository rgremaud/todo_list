// index.js
import "./reset.css";
import "./styles.css";

import { Project } from "./projects.js";
import { addDialog } from "./dialog.js";
import { add } from "date-fns";


/*
Todo list: 
Hierarchy -
    1 - Projects    
        Todos: a)
               b)
               c)
               etc
    
Project: - Name
            - Creation date
            - Status
Todos: - Include description
        - Priority
        - Completetion

*/

/* 

class Project

name
date
status - completed, active, upcoming

*/
// initialize the dialog w/class
addDialog();

const threeDimensionalPrint = new Project("RC Car");
threeDimensionalPrint.newTodo("Print parts");
threeDimensionalPrint.newTodo("Assemble parts");
threeDimensionalPrint.newTodo("Test parts");

console.log(threeDimensionalPrint);
