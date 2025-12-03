export { createProjectDialog, createTodoDialog, addTodoDialog, editProjectDialog };

import { closeDialog } from "./button.js";
import { submitTodoClickEvent } from "./button.js";

import cancelSvg from "./assets/cancel.svg";

function createProjectDialog(dialogId) {
  const projectDialog = createDialog(dialogId);

  const projectForm = createForm();

  const formLines = createProjectFormLines(projectDialog);

  formLines.forEach((line) => {
    projectForm.appendChild(line);
    line.className = "formLine";
  })

  projectDialog.appendChild(projectForm);

  const content = document.getElementById("content");

  content.appendChild(projectDialog);

  return projectDialog;
}

function createProjectFormLines(dialog) { 
  const formLines = []

  const priorityOptions = [
    { value: "high", text: "High" },
    { value: "medium", text: "Medium" },
    { value: "low", text: "Low" },
  ];

  const lineOne = createTextBoxInput("Project Title: ", "projectTitle");
  formLines.push(lineOne);
  const lineTwo = createTextBoxInput("Description: ", "projectDescription");
  formLines.push(lineTwo);
  const lineThree = createSelectInput("Priority: ", "projectPriority", priorityOptions)
  formLines.push(lineThree)
  const lineFour = createDateInput("Due date: ", "projectDueDate");
  formLines.push(lineFour)
  const lineFive = document.createElement("div");
  formLines.push(lineFive)
  lineFive.classList = ("formLine", "buttonLine");
  const addProjectButton = document.createElement("button");
  addProjectButton.id = "addProjectButton";
  addProjectButton.textContent = "Add Project";

  lineFive.appendChild(addProjectButton);

  // refactor this outside
  const cancelButton = document.createElement("button");

  const cancelSvgButton = document.createElement("img");
  cancelSvgButton.src = cancelSvg;
  cancelSvgButton.alt = "Cancel";

  cancelButton.appendChild(cancelSvgButton);

  closeDialog(cancelButton, dialog);

  lineOne.appendChild(cancelButton);

  return formLines;
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

function createDialog(id="") { 
  const dialog = document.createElement("dialog");
  dialog.id = id;

  return dialog;
}

function createForm(id="") {
  const form = document.createElement("form");
  form.id = id;

  return form;
}

function createTextBoxInput(text, id) { 
  const formGroup = document.createElement("div");
  
  const formLineText = document.createElement("label");
  formLineText.textContent = text;

  const formInput = document.createElement("input");
  formInput.id = id;
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
  })

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