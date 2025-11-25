export { createHeader, createHeaderDivs }

import { deleteProjectClickEvent } from "./button";
import { Project } from "./projects";
import { Database } from "./database";

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
    projPriority.textContent = "Priority: " + project.priority;

    const timeDelta = document.createElement("div");
    headerDivs.push(timeDelta);
    dateDelta(timeDelta, project);

    return headerDivs;
}

function dateDelta(div, project) { 
    const projectDueDate = new Date(project.dueDate);
    const currentDate = new Date();
    const delta = (projectDueDate.getTime() - currentDate.getTime())/(1000 * 60 * 60 * 24);
    const roundDays = Math.round(delta+1);
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