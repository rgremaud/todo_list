// index.js
import "./reset.css";
import "./styles.css";

import { Project } from "./projects.js";

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

const threeDimensionalPrint = new Project("RC Car");
threeDimensionalPrint.newTodo("Print parts");
threeDimensionalPrint.newTodo("Assemble parts");
threeDimensionalPrint.newTodo("Test parts");

console.log(threeDimensionalPrint);
