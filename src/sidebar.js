export { createSidebar, populateSidebar };

import { printScreen } from "./display";

function createSidebar() {
  const sidebar = document.getElementById("sidebar");

  const sidebarHeader = document.createElement("div");
  sidebarHeader.id = "sidebarHeader";

  const sidebarTitle = document.createElement("h3");
  sidebarTitle.textContent = "Projects";

  const sidebarProjectList = document.createElement("div");
  sidebarProjectList.id = "sidebarProjectList";

  const due24 = document.createElement("div");
  due24.id = "due24";
  due24.className = "dueDate";
  due24.textContent = "Due in 24 hours";

  const dueSeven = document.createElement("div");
  dueSeven.id = "dueSeven";
  dueSeven.className = "dueDate";
  dueSeven.textContent = "Due in 7 days";

  const dueThirty = document.createElement("div");
  dueThirty.id = "dueThirty";
  dueThirty.className = "dueDate";
  dueThirty.textContent = "Due in 30 days";

  sidebarProjectList.appendChild(due24);
  sidebarProjectList.appendChild(dueSeven);
  sidebarProjectList.appendChild(dueThirty);

  sidebarHeader.appendChild(sidebarTitle);
  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(sidebarProjectList);
}

function populateSidebar(database) {
  const due24 = document.getElementById("due24");
  due24.textContent = "";
  due24.textContent = "Due in 24 hours";
  const dueSeven = document.getElementById("dueSeven");
  dueSeven.textContent = "";
  dueSeven.textContent = "Due next seven days";
  const dueThirty = document.getElementById("dueThirty");
  dueThirty.textContent = "";
  dueThirty.textContent = "Due next thirty days";

  const projects = database.projectArray;

  projects.forEach((project) => {
    const projectSidebar = projectSidebarDiv(database, project);
    sortByDate(project, projectSidebar, due24, dueSeven, dueThirty);
  });
}

function projectSidebarDiv(database, project) {
  const projectSidebar = document.createElement("div");
  projectSidebar.className = "projectSidebar";
  projectSidebar.id = project.id + "sb";
  projectSidebar.textContent = project.name;
  projectSidebar.addEventListener("click", () => {
    printScreen(database, project);
  });

  return projectSidebar;
}

function sortByDate(project, projectSidebar, due24, dueSeven, dueThirty) {
  console.log(project.dateDelta());
  if (project.dateDelta() <= 1) {
    due24.appendChild(projectSidebar);
  } else if (project.dateDelta() <= 7) {
    dueSeven.appendChild(projectSidebar);
  } else {
    dueThirty.appendChild(projectSidebar);
  }
}
