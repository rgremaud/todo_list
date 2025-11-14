/*
Create a function that appends all project titles to a sidebar
required input = database
iterate over the database and pull each project
build a div for each project 
make each project title a link that allows you to navigate to that projects todos/etc
*/

export { createSidebar }

function createSidebar(database) {
    const sidebar = document.getElementById("sidebar");
    sidebar.textContent = "";
    const projects = database.projectArray;

    projects.forEach((project) => {
        const projectSidebar = document.createElement("div");
        projectSidebar.className = "projectSidebar";
        projectSidebar.textContent = project.name;

        sidebar.appendChild(projectSidebar);
    })
}