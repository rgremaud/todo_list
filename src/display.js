export { printScreen }

function printScreen(database, content) { 
    const array = database.projectArray;
    const projectContent = document.getElementById("projectContent");
    content.appendChild(projectContent);

    array.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.textContent = project.name;
        projectDiv.className = "projects";

        projectContent.appendChild(projectDiv);
    })
}