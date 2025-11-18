/*
Create a function that appends all project titles to a sidebar
required input = database
iterate over the database and pull each project
build a div for each project 
make each project title a link that allows you to navigate to that projects todos/etc
*/

export { createSidebar, populateSidebar }

import { printScreen } from "./display";

function createSidebar() {
    const sidebar = document.getElementById("sidebar");

    const sidebarHeader = document.createElement("div");
    sidebarHeader.id = "sidebarHeader";

    const sidebarTitle = document.createElement("h3");
    sidebarTitle.textContent = "Projects";

    const sidebarProjectList = document.createElement("div");
    sidebarProjectList.id = "sidebarProjectList";

    sidebarHeader.appendChild(sidebarTitle);
    sidebar.appendChild(sidebarHeader);
    sidebar.appendChild(sidebarProjectList);
}

function populateSidebar(database) {
    const sidebarProjectList = document.getElementById("sidebarProjectList");
    sidebarProjectList.textContent = "";

    const content = document.getElementById("content");

    const projects = database.projectArray;

    projects.forEach((project) => {
        const projectSidebar = document.createElement("div");
        projectSidebar.className = "projectSidebar";
        projectSidebar.id = project.id + "sb";
        projectSidebar.textContent = project.name;
        projectSidebar.addEventListener("click", () => {
            printScreen(database, content, project);
        })
        sidebarProjectList.appendChild(projectSidebar);
    })
}
