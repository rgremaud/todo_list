export class Todo { 
    constructor(task) {
        this.task = task;
        this.completed = false;
        this.id = crypto.randomUUID();
    }

    description() {
        console.log(`${this.task}`);
    }
}