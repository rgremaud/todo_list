export { storeDatabase, loadDatabase }

import { Database } from "./database";
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
        
        const projectDatabase = new Database();
        Object.assign(projectDatabase, database);
        return projectDatabase
    } else {
        console.log("No user data found in localStorage.");
        const projectDatabase = new Database();
        return projectDatabase
    }
}