export { printScreen }

import { createTodoDialog } from "./dialog";
/*
Todo - style the div so project name shows at top
    - Show todo's below
    - Add a button to add todos
*/

function printScreen(database, content) {
    const array = database.projectArray;
    const projectContent = document.getElementById("projectContent");
    content.appendChild(projectContent);

    array.forEach((project) => {
        // create project divs - refactor this to a separate function
        // 1 - top line project div
        const projectDiv = document.createElement("div");
        projectDiv.className = "projects";

        // 2 - project name
        const projName = document.createElement("h3");
        projName.textContent = project.name;

        // 3 - create button for each project div to add todo
        const addTodo = document.createElement("button");
        addTodo.textContent = "Add todo!"

        // 4 - create todos dialog 
        const todoDialog = createTodoDialog("todoDialog");
        console.log(todoDialog);
        projectDiv.appendChild(todoDialog.dialogElement);

        // Add click events to todo button to create a new todo and refresh the specific project
        addTodo.addEventListener("click", () => {
            console.log("test");
            todoDialog.dialogElement.show();
        })

        projectDiv.appendChild(projName);
        projectDiv.appendChild(addTodo);
        projectContent.appendChild(projectDiv);
    })
}