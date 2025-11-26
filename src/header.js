export { createHeader, createHeaderDivs }

import { deleteProjectClickEvent } from "./button";

import deleteSvg from "./assets/delete.svg";

function createHeader() { 
    const header = document.getElementById("header");
    header.textContent = "todoodoo"
}

function createHeaderDivs(project, database) {
    const headerDivs = [];
    
    const projName = document.createElement("h3");
    headerDivs.push(projName);
    projName.textContent = "Project: " + project.name;

    const projDescription = document.createElement("div");
    projDescription.id = "description";
    headerDivs.push(projDescription);
    projDescription.textContent = "Description: " + project.description;

    const deleteProject = document.createElement("button");
    headerDivs.push(deleteProject);
    deleteProjectHeader(deleteProject, project, database);

    const projPriority = document.createElement("div");
    headerDivs.push(projPriority);
    // projPriority.textContent = "Priority: " + project.priority; // add new priority here
    priorityDisplay(project, projPriority);

    const timeDelta = document.createElement("div");
    headerDivs.push(timeDelta);
    dateDelta(timeDelta, project);

    return headerDivs;
}

function dateDelta(div, project) {
    const roundDays = project.dateDelta();
    div.textContent = "Due in " + roundDays + " days!"
}

function deleteProjectHeader(div, project, database) {
    div.id = "deleteProject"
    const svg = document.createElement("img")
    svg.src = deleteSvg;
    svg.alt = "Delete project";
    const deleteProjectText = document.createElement("div");
    deleteProjectText.textContent = "Delete project";
    div.appendChild(svg);
    div.appendChild(deleteProjectText);
    deleteProjectClickEvent(div, project, database) 
}

function priorityDisplay(project, div) {
    /*
    if priority is high = 3 boxes red colors
    else if medium = 2 boxes and orange
    else if low = 1 box and yellow
    create new div for text and then divs for boxes
    */
    const priorityText = document.createElement("div");
    priorityText.textContent = "Priority: ";

    const priorityBoxes = document.createElement("div");

    div.appendChild(priorityText);
    div.appendChild(priorityBoxes);

    for (let i = 0; i < 3; i++) {
        const box = document.createElement("div");
        box.style.backgroundColor = "red";
        box.style.height = "10px";
        box.style.width = "5px";
        box.style.margin = "1px";
        priorityBoxes.appendChild(box);
    }
}