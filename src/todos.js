export class Todo { 
    constructor(task) {
        this.task = task;
        this.completed = false;
    }

    description() {
        console.log(`${this.task}`);
    }
}