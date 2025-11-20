export { storeDatabase, loadDatabase }

import { Database } from "./database";
import { Project } from "./projects";
import { printScreen } from "./display";

// storeDatabase should be called every time you 
// create project - done
// delete project
// add todo
// remove todo
function storeDatabase(database) {
    const databaseToString = JSON.stringify(database);

    localStorage.setItem("userData", databaseToString);
}

function loadDatabase() {
    const retrievedString = localStorage.getItem("userData");

    if (retrievedString) {
        const database = JSON.parse(retrievedString);
        
        // re instantiate all the database
        const projectDatabase = new Database();
        Object.assign(projectDatabase, database);

        // re instantiate all of the projects
        const projects = projectDatabase.projectArray
        projects.forEach((project) => {
            const newProject = new Project();
            Object.assign(newProject, project);
        })

        // re instantiate all of the todos

        printScreen(projectDatabase);
        return projectDatabase
    } else {
        console.log("No user data found in localStorage.");
        const projectDatabase = new Database();
        return projectDatabase
    }
}