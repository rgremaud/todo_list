export { printScreen }

import { createTodoDialog } from "./dialog";

function printScreen(database, content) {
    const array = database.projectArray;
    const projectContent = document.getElementById("projectContent");
    content.appendChild(projectContent);

    // Iterate over each project in the database arrayto build out dom elements
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

        // 4 - create todos dialog and append
        const todoDialog = createTodoDialog("todoDialog", project.id);
        projectDiv.appendChild(todoDialog.dialogElement);

        projectDiv.appendChild(projName);
        projectDiv.appendChild(addTodo);
        projectContent.appendChild(projectDiv);

        // 5 - create div to house the todos
        const todoDiv = document.createElement("div");
        todoDiv.className = "todoDiv";
        projectDiv.appendChild(todoDiv);

        // 5 - Add click events to todo button to create a new todo and refresh the specific project
        addTodo.addEventListener("click", () => {
            todoDialog.dialogElement.show();
        })

        const submitTodo = document.getElementById(project.id);

        submitTodo.addEventListener("click", () => {
            project.newTodo(document.getElementById("todoName").value);
            project.printTodos(todoDiv);

            document.getElementById("todoName").value = "";

            todoDialog.dialogElement.close();
        });


    })
}