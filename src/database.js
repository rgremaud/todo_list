export { Database }

class Database {
    constructor() {
        this.projectArray = [];
    }

    addProject(project) {
        this.projectArray.push(project);
    }
}