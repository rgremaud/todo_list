/*
Create a function that appends all project titles to a sidebar
required input = database
iterate over the database and pull each project
build a div for each project 
make each project title a link that allows you to navigate to that projects todos/etc
*/

export { createSidebar, populateSidebar }

function createSidebar() {
    const sidebar = document.getElementById("sidebar");

    const sidebarProjectList = document.createElement("div");
    sidebarProjectList.id = "sidebarProjectList";
    sidebar.appendChild(sidebarProjectList)
}

function populateSidebar(database) {
    const sidebarProjectList = document.getElementById("sidebarProjectList");
    sidebarProjectList.textContent = "";

    const projects = database.projectArray;

    projects.forEach((project) => {
        const projectSidebar = document.createElement("div");
        projectSidebar.className = "projectSidebar";
        projectSidebar.textContent = project.name;

        sidebarProjectList.appendChild(projectSidebar);
    })
}
