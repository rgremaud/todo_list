export { Button, createProjectButton }

class Button {
    constructor(id, textContent) {
        this.buttonElement = document.createElement("button");
        this.buttonElement.id = id;
        this.buttonElement.textContent = textContent;
    }

    showDialogForm(button, dialog) {
        button.addEventListener("click", () => {
            dialog.show();
        });
    }

    addProjectClick(button, dialog, database) {
        button.addEventListener("click", () => {
            const project = new Project(document.getElementById("projectTitle").value);
            database.addProject(project);
            dialog.close();
        });
    }
}

function createProjectButton(buttonId, textContent, dialog) { 
    const button = new Button(buttonId, textContent);
    content.appendChild(button.buttonElement);
    
    // add click events for create project and add project
    button.showDialogForm(button.buttonElement, dialog);
    
    return button
}

function createAddProjectButton() { 
    const createProject = new Button("createProject", "Create Project");
    content.appendChild(createProject.buttonElement);
    const addProjectButton = document.getElementById("addProjectButton");
    
    // add click events for create project and add project
    createProject.showDialogForm(createProject.buttonElement, newDialog.dialogElement);
    // addProjectButton.addProjectClick(addProjectButton, newDialog.dialogElement, projectDatabase);

    addProjectButton.addEventListener("click", () => {
        const project = new Project(document.getElementById("projectTitle").value);
        projectDatabase.addProject(project);
        console.log(projectDatabase);
        newDialog.dialogElement.close();
    });
}