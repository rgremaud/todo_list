export { createProjectDialog, createTodoDialog, addTodoDialog, editProjectDialog };

import { closeDialog } from "./button.js";
import { submitTodoClickEvent } from "./button.js";

import cancelSvg from "./assets/cancel.svg";

function createProjectDialog(dialogId) {
  const projectDialog = document.createElement("dialog");
  projectDialog.id = dialogId;

  const projectForm = document.createElement("form");

  const lineOne = document.createElement("div");
  lineOne.className = "formLine";
  const projectTitle = document.createElement("label");
  projectTitle.textContent = "Project Title: ";

  const titleInput = document.createElement("input");
  titleInput.id = "projectTitle";
  projectTitle.htmlFor = "projectTitle";

  lineOne.appendChild(projectTitle);
  lineOne.appendChild(titleInput);

  const lineTwo = document.createElement("div");
  lineTwo.className = "formLine";
  const projectDescription = document.createElement("label");
  projectDescription.textContent = "Description: ";

  const descriptionInput = document.createElement("input");
  descriptionInput.id = "projectDescription";

  projectDescription.htmlFor = "projectDescription";

  lineTwo.appendChild(projectDescription);
  lineTwo.appendChild(descriptionInput);

  const lineThree = document.createElement("div");
  lineThree.className = "formLine";
  const projectPriority = document.createElement("label");
  projectPriority.textContent = "Priority: ";

  const priorityInput = document.createElement("select");
  priorityInput.id = "projectPriority";

  const priorityOptions = [
    { value: "high", text: "High" },
    { value: "medium", text: "Medium" },
    { value: "low", text: "Low" },
  ];

  priorityOptions.forEach((option) => {
    const priorityOption = document.createElement("option");
    priorityOption.value = option.value;
    priorityOption.textContent = option.text;
    priorityInput.appendChild(priorityOption);
  });

  projectPriority.htmlFor = "projectPriority";

  lineThree.appendChild(projectPriority);
  lineThree.appendChild(priorityInput);

  const lineFour = document.createElement("div");
  lineFour.className = "formLine";
  const projectDueDate = document.createElement("label");
  projectDueDate.textContent = "Due date: ";

  const dueDateInput = document.createElement("input");
  dueDateInput.id = "projectDueDate";
  dueDateInput.type = "date";

  lineFour.appendChild(projectDueDate);
  lineFour.appendChild(dueDateInput);

  const lineFive = document.createElement("div");
  lineFive.classList = ("formLine", "buttonLine");
  const addProjectButton = document.createElement("button");
  addProjectButton.id = "addProjectButton";
  addProjectButton.textContent = "Add Project";

  lineFive.appendChild(addProjectButton);

  const cancelButton = document.createElement("button");

  const cancelSvgButton = document.createElement("img");
  cancelSvgButton.src = cancelSvg;
  cancelSvgButton.alt = "Cancel";

  cancelButton.appendChild(cancelSvgButton);

  closeDialog(cancelButton, projectDialog);

  lineOne.appendChild(cancelButton);

  projectForm.appendChild(lineOne);
  projectForm.appendChild(lineTwo);
  projectForm.appendChild(lineThree);
  projectForm.appendChild(lineFour);
  projectForm.appendChild(lineFive);

  projectDialog.appendChild(projectForm);

  const content = document.getElementById("content");

  content.appendChild(projectDialog);

  return projectDialog;
}

function createTodoDialog(project, database) {
  const todoDialog = document.createElement("dialog");
  todoDialog.id = project.id + "todo";

  const lineOne = document.createElement("div");
  lineOne.className = "formLine";
  const newTodo = document.createElement("label");
  newTodo.textContent = "New Todo: ";

  const input = document.createElement("input");
  input.id = project.id + "todoInput";
  input.htmlFor = "input";

  lineOne.appendChild(newTodo);
  lineOne.appendChild(input);

  const lineTwo = document.createElement("div");
  lineTwo.classList = ("formLine", "buttonLine");

  const todoDialogButton = document.createElement("button");
  todoDialogButton.textContent = "Add";
  todoDialogButton.id = project.id + "add";
  lineTwo.appendChild(todoDialogButton);

  const cancelButton = document.createElement("button");

  const cancelSvgButton = document.createElement("img");
  cancelSvgButton.src = cancelSvg;
  cancelSvgButton.alt = "Cancel";

  cancelButton.appendChild(cancelSvgButton);
  closeDialog(cancelButton, todoDialog);

  lineOne.appendChild(cancelButton);

  todoDialog.appendChild(lineOne);
  todoDialog.appendChild(lineTwo);

  submitTodoClickEvent(todoDialogButton, project, todoDialog, database);

  return todoDialog;
}

function addTodoDialog(project, database) {
  const projectHeader = document.getElementById("projectHeader");
  const todoDialog = createTodoDialog(project, database);
  projectHeader.appendChild(todoDialog);

  openTodo(project);
}

function openTodo(project) {
  const dialogId = project.id + "todo";
  const todoDialog = document.getElementById(dialogId);
  const button = document.getElementById(project.id + "addTodoButton");
  button.addEventListener("click", () => {
    todoDialog.showModal();
  });
}

function editProjectDialog(headerDiv, dialogId, project, database) {
  const editProjectDialog = document.createElement("dialog");
  editProjectDialog.id = dialogId;
  editProjectDialog.className = "editDialog";

  const projectForm = document.createElement("form");

  const lineOne = document.createElement("div");
  lineOne.className = "formLine";
  const projectTitle = document.createElement("label");
  projectTitle.textContent = "Project Title: ";

  const titleInput = document.createElement("input");
  titleInput.id = "projectTitle";
  titleInput.value = project.name;
  projectTitle.htmlFor = "projectTitle";

  lineOne.appendChild(projectTitle);
  lineOne.appendChild(titleInput);

  const lineTwo = document.createElement("div");
  lineTwo.className = "formLine";
  const projectDescription = document.createElement("label");
  projectDescription.textContent = "Description: ";

  const descriptionInput = document.createElement("input");
  descriptionInput.value = project.description;
  descriptionInput.id = "projectDescription";

  projectDescription.htmlFor = "projectDescription";

  lineTwo.appendChild(projectDescription);
  lineTwo.appendChild(descriptionInput);

  const lineThree = document.createElement("div");
  lineThree.className = "formLine";
  const projectPriority = document.createElement("label");
  projectPriority.textContent = "Priority: ";

  const priorityInput = document.createElement("select");
  priorityInput.id = "projectPriority";

  const priorityOptions = [
    { value: "high", text: "High" },
    { value: "medium", text: "Medium" },
    { value: "low", text: "Low" },
  ];

  priorityOptions.forEach((option) => {
    const priorityOption = document.createElement("option");
    priorityOption.value = option.value;
    priorityOption.textContent = option.text;
    priorityInput.appendChild(priorityOption);
  });

  projectPriority.htmlFor = "projectPriority";

  lineThree.appendChild(projectPriority);
  lineThree.appendChild(priorityInput);

  const lineFour = document.createElement("div");
  lineFour.className = "formLine";
  const projectDueDate = document.createElement("label");
  projectDueDate.textContent = "Due date: ";

  const dueDateInput = document.createElement("input");
  dueDateInput.id = "projectDueDate";
  dueDateInput.type = "date";

  lineFour.appendChild(projectDueDate);
  lineFour.appendChild(dueDateInput);

  const lineFive = document.createElement("div");
  lineFive.classList = ("formLine", "buttonLine");
  const editProjectButton = document.createElement("button");
  editProjectButton.id = "addProjectButton";
  editProjectButton.textContent = "Edit Project";

  lineFive.appendChild(editProjectButton);

  const cancelButton = document.createElement("button");

  const cancelSvgButton = document.createElement("img");
  cancelSvgButton.src = cancelSvg;
  cancelSvgButton.alt = "Cancel";

  cancelButton.appendChild(cancelSvgButton);

  closeDialog(cancelButton, editProjectDialog, database);

  lineOne.appendChild(cancelButton);

  projectForm.appendChild(lineOne);
  projectForm.appendChild(lineTwo);
  projectForm.appendChild(lineThree);
  projectForm.appendChild(lineFour);
  projectForm.appendChild(lineFive);

  editProjectDialog.appendChild(projectForm);

  headerDiv.appendChild(editProjectDialog);

  return editProjectDialog;
}
