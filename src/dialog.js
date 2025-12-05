export {
  createProjectDialog,
  createTodoDialog,
  addTodoDialog,
};

import { submitTodoClickEvent } from "./button.js";
import { createCancelButton } from "./button.js";

function createProjectDialog(dialogId) {
  const projectDialog = createDialog(dialogId);

  const projectForm = createForm();

  const formLines = createProjectFormLines(projectDialog);

  formLines.forEach((line) => {
    projectForm.appendChild(line);
    line.className = "formLine";
  });

  projectDialog.appendChild(projectForm);

  const content = document.getElementById("content");

  content.appendChild(projectDialog);

  return projectDialog;
}

function createProjectFormLines(dialog) {
  const formLines = [];

  const priorityOptions = [
    { value: "high", text: "High" },
    { value: "medium", text: "Medium" },
    { value: "low", text: "Low" },
  ];

  const lineOne = createTextBoxInput("Project Title: ", "projectTitle");
  formLines.push(lineOne);
  const lineTwo = createTextBoxInput("Description: ", "projectDescription");
  formLines.push(lineTwo);
  const lineThree = createSelectInput(
    "Priority: ",
    "projectPriority",
    priorityOptions,
  );
  formLines.push(lineThree);
  const lineFour = createDateInput("Due Date: ", "projectDueDate");
  formLines.push(lineFour);
  const lineFive = document.createElement("div");
  // refactor
  formLines.push(lineFive);
  lineFive.classList = ("formLine", "buttonLine");
  const addProjectButton = document.createElement("button");
  addProjectButton.id = "addProjectButton";
  addProjectButton.textContent = "Add Project";

  lineFive.appendChild(addProjectButton);

  const cancelButton = createCancelButton(dialog);
  lineOne.appendChild(cancelButton);

  return formLines;
}

function createTodoDialog(project, database) {
  const todoDialog = createDialog(project.id + "todo");

  const lineOne = createTextBoxInput("New todo: ", project.id + "todoInput");

  const lineTwo = document.createElement("div");
  lineTwo.classList = ("formLine", "buttonLine");

  const todoDialogButton = document.createElement("button");
  todoDialogButton.textContent = "Add";
  todoDialogButton.id = project.id + "add";
  lineTwo.appendChild(todoDialogButton);

  const cancelButton = createCancelButton(todoDialog);
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

function createDialog(id = "") {
  const dialog = document.createElement("dialog");
  dialog.id = id;

  return dialog;
}

function createForm(id = "") {
  const form = document.createElement("form");
  form.id = id;

  return form;
}

function createTextBoxInput(text, id, value = "") {
  const formGroup = document.createElement("div");

  const formLineText = document.createElement("label");
  formLineText.textContent = text;

  const formInput = document.createElement("input");
  formInput.id = id;
  formInput.value = value;
  formLineText.htmlFor = id;

  formGroup.appendChild(formLineText);
  formGroup.appendChild(formInput);

  return formGroup;
}

function createSelectInput(text, id, options) {
  const formGroup = document.createElement("div");

  const formLineText = document.createElement("label");
  formLineText.textContent = text;

  const selectInput = document.createElement("select");
  selectInput.id = id;

  const selectOptions = options;

  selectOptions.forEach((option) => {
    const selection = document.createElement("option");
    selection.value = option.value;
    selection.textContent = option.text;
    selectInput.appendChild(selection);
  });

  formLineText.htmlFor = id;

  formGroup.appendChild(formLineText);
  formGroup.appendChild(selectInput);

  return formGroup;
}

function createDateInput(text, id) {
  const formGroup = document.createElement("div");

  const formLineText = document.createElement("label");
  formLineText.textContent = text;

  const dateInput = document.createElement("input");
  dateInput.id = id;
  dateInput.type = "date";

  formGroup.appendChild(formLineText);
  formGroup.appendChild(dateInput);

  return formGroup;
}
