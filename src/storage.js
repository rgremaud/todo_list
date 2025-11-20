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
            // define index number
            let index = projects.indexOf(project)
            // re instantiate
            const newProject = new Project();
            Object.assign(newProject, project);
            // remove the old project item from array
            projects.splice(index, 1);
            // add new project item from array
            projects.splice(index, 0, newProject);
            // re instantiate all of the todos
            const todos = project.tasks

            todos.forEach((todo) => {
                let index = todos.indexOf(todo);

                const newTodo = new Todo();
                Object.assign(newTodo, todo);

                todos.splice(index, 1);

                todos.splice(index, 0, newTodo);
            })
        })

        printScreen(projectDatabase);
        return projectDatabase
    } else {
        console.log("No user data found in localStorage.");
        const projectDatabase = new Database();
        return projectDatabase
    }
}