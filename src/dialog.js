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

// class Dialog {
//     constructor(dialogId, openDialog, closeDialog, parentDi) {
//         this.dialog = new Element("dialog", "projectDialog");// dialog
//         this.openDialog = document.createElement(`${openDialog}`); // button
//         this.closeDialog = document.createElement(`${closeDialog}`) // button
//     }

//     clickEvents() {
//         openDialog.addEventListener("click", () => {
//             dialog.show();
//             });

//         addProject.addEventListener("click", () => {
//             dialog.close();
//             });
//     }
// }

// class Element {
//   constructor(tag, id, classes = [], textContent) {
//     this.element = document.createElement(tag);
//     if (id) {
//       this.element.id = id;
//     }
//     if (classes.length > 0) {
//       this.element.classList.add(...classes);
//     }
//     this.element.textContent = textContent;
//   }

//   appendTo(parentElement) {
//     parentElement.appendChild(this.element);
//   }
// }