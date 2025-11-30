export { createSidebar, populateSidebar };

import { printScreen } from "./display";

function createSidebar() {
  const sidebar = document.getElementById("sidebar");

  const sidebarHeader = document.createElement("div");
  sidebarHeader.id = "sidebarHeader";

  // this has functionality to add new - don't need to update
  const sidebarTitle = document.createElement("h3");
  sidebarTitle.textContent = "Projects";

  // create divs for Due in next 7 days, Due in next 30 Days, Due in 90+ Days
  const sidebarProjectList = document.createElement("div");
  sidebarProjectList.id = "sidebarProjectList";

  const dueSeven = document.createElement("div");
  dueSeven.id = "dueSeven";
  dueSeven.className = "dueDate";
  dueSeven.textContent = "Due in 7 Days";

  const dueThirty = document.createElement("div");
  dueThirty.id = "dueThirty";
  dueThirty.className = "dueDate";
  dueThirty.textContent = "Due in 30 Days";

  const dueNinety = document.createElement("div");
  dueNinety.id = "dueNinety";
  dueNinety.className = "dueDate";
  dueNinety.textContent = "Due in 90 Days";

  sidebarProjectList.appendChild(dueSeven);
  sidebarProjectList.appendChild(dueThirty);
  sidebarProjectList.appendChild(dueNinety);

  sidebarHeader.appendChild(sidebarTitle);
  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(sidebarProjectList);
}

function populateSidebar(database) {
  const dueSeven = document.getElementById("dueSeven");
  dueSeven.textContent = "";
  dueSeven.textContent = "Due in seven days"
  const dueThirty = document.getElementById("dueThirty");
  dueThirty.textContent = "";
  dueThirty.textContent = "Due in thirty days"
  const dueNinety = document.getElementById("dueNinety");
  dueNinety.textContent = "";
  dueNinety.textContent = "Due in ninety days"

  const projects = database.projectArray;

  projects.forEach((project) => {
    const projectSidebar = document.createElement("div");
    projectSidebar.className = "projectSidebar";
    projectSidebar.id = project.id + "sb";
    projectSidebar.textContent = project.name;
    projectSidebar.addEventListener("click", () => {
      printScreen(database, project);
    });
    // logic to filter by 7, 30, 90 here
    if (project.dateDelta() <= 7) { 
      dueSeven.appendChild(projectSidebar);
    } else if (project.dateDelta() <= 30) {
      dueThirty.appendChild(projectSidebar)
    } else {
      dueNinety.appendChild
    }
    
  });
}
