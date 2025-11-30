export { storeDatabase, loadDatabase };

import { Database } from "./database";
import { Project } from "./projects";
import { printScreen } from "./display";
import { Todo } from "./todos";

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

    const projects = projectDatabase.projectArray;
    projects.forEach((project) => {
      let index = projects.indexOf(project);
      const newProject = new Project();
      Object.assign(newProject, project);
      projects.splice(index, 1);
      projects.splice(index, 0, newProject);
      const todos = project.tasks;

      todos.forEach((todo) => {
        let index = todos.indexOf(todo);

        const newTodo = new Todo();
        Object.assign(newTodo, todo);

        todos.splice(index, 1);

        todos.splice(index, 0, newTodo);
      });
    });

    printScreen(projectDatabase);
    return projectDatabase;
  } else {
    const projectDatabase = new Database();
    return projectDatabase;
  }
}
