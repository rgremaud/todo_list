export class Todo { 
    constructor(task) {
        this.task = task
    }

    description() {
        console.log(`${this.task}`);
    }
}