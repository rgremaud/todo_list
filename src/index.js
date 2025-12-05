// index.js
import "./reset.css";
import "./styles.css";

import { createProjectDialog } from "./dialog.js";
import { addProjectClickEvent, createProjectButton } from "./button.js";
import { createHeader } from "./header.js";
import { createSidebar } from "./sidebar.js";
import { loadDatabase } from "./storage.js";
import { printScreen } from "./display.js";

function initialize() {
  createHeader();
  createSidebar();

  const projectDatabase = loadDatabase();
  const projects = projectDatabase.projectArray;
  printScreen(projectDatabase, projects[0]);
  const projectDialog = createProjectDialog("addProject");

  createProjectButton(projectDialog);
  addProjectClickEvent("addProjectButton", projectDatabase, projectDialog);
}

initialize();
