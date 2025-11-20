import { Todo } from "./todos.js";

// Update project to include description, dueDate and priority

export class Project {
    constructor(name, description, priority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.createdAt = Date.now();
        this.tasks = [];
        this.completed = false;
        this.id = crypto.randomUUID();
    }

    newTodo(todo) {
        const task = new Todo(todo);
        this.tasks.push(task);
    }

    removeTodo(todo) {
        let index = this.tasks.indexOf(todo)

        if (index !== -1) {
            this.tasks.splice(index, 1)
        }
    }
}
