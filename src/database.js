export { Database }

import { Project } from "./projects.js"

class Database {
    constructor() {
        this.projectArray = [];
    }

    createProject(projectName) {
        const project = new Project(projectName);

        return project;
    }

    addProject(project) {
        this.projectArray.push(project);
    }
}