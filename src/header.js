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
    projPriority.id = "projPriority";
    headerDivs.push(projPriority);
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
    const priorityText = document.createElement("div");
    priorityText.textContent = "Priority: ";

    const priorityBoxHolder = document.createElement("div");
    priorityBoxHolder.id = "priorityBoxHolder"

    div.appendChild(priorityText);
    div.appendChild(priorityBoxHolder);

    const box1 = document.createElement("div");
    box1.className = "priorityBoxes";
    const box2 = document.createElement("div");
    box2.className = "priorityBoxes";
    const box3 = document.createElement("div");
    box3.className = "priorityBoxes";

    priorityBoxHolder.appendChild(box1);
    priorityBoxHolder.appendChild(box2);
    priorityBoxHolder.appendChild(box3);

    if (project.priority === "high") { 
        box1.style.backgroundColor = "red";
        box2.style.backgroundColor = "red";
        box3.style.backgroundColor = "red";
    } else if( project.priority === "medium") {
        box1.style.backgroundColor = "orange";
        box2.style.backgroundColor = "orange";
    } else { 
        box1.style.backgroundColor = "green";
    }
}