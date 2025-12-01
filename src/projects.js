import { Todo } from "./todos.js";

export class Project {
  constructor(name, description, priority, dueDate) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
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
    let index = this.tasks.indexOf(todo);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  dateDelta() {
    const projectDueDate = new Date(this.dueDate);
    const currentDate = new Date();
    const delta =
      (projectDueDate.getTime() - currentDate.getTime()) /
      (1000 * 60 * 60 * 24);
    const roundDays = Math.round(delta + 1);

    return roundDays;
  }

  updatePriority(newPrio) {
    this.priority = newPrio;
  }

  updateStatus() { 
    if (this.completed === false ) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }
}
