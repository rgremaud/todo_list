export { Database };

import { Project } from "./projects.js";

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

  removeProject(project) {
    let index = this.projectArray.indexOf(project);

    if (index !== -1) {
      this.projectArray.splice(index, 1);
    }
  }
}
