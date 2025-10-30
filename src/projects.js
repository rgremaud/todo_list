import { Todo } from "./todos.js";

export class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

    newTodo(todo) { 
        const task = new Todo(todo);
        this.tasks.push(task);
    }

    printTodos() { 
        console.log(this.tasks);
    }
}
