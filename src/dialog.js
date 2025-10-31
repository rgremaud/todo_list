export { addDialog };

function addDialog() { 
    const dialog = document.getElementById("projectDialog");
    const openDialog = document.getElementById("openDialog");
    const addProject = document.getElementById("addProject");

    openDialog.addEventListener("click", () => {
    dialog.show();
    });

    addProject.addEventListener("click", () => {
    dialog.close();
    });

};