import { Todo } from "./todos.js";

export class Project {
    constructor(name) {
        this.name = name
        this.createdAt = Date.now();
        /* logic to convert to date that can be displayed - factor this into 
        const displayDate = new Date(this.createdAt);
        displayDate.toString();
        */
        this.tasks = [];
        this.completed = false;
        this.id = crypto.randomUUID();
    }

    newTodo(todo) {
        const task = new Todo(todo);
        this.tasks.push(task);
    }

}
