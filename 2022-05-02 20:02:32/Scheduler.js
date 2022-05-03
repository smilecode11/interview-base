class Scheduler {
    constructor() {
        this.waitTasks = [];
        this.runTasks = [];
        this.maxRunLen = 2;
    }

    add(promiseMaker) {
        if (this.runTasks.length < this.maxRunLen) {
            this.run(promiseMaker)
        } else {
            this.waitTasks.push(promiseMaker)
        }
    }

    run(promiseMaker) {
        let len = this.runTasks.push(promiseMaker)
        let index = len - 1;
        promiseMaker().then(() => {
            this.runTasks.splice(index, 1)
            if (this.waitTasks.length > 0) {
                this.run(this.waitTasks.shift())
            }
        })
    }
}


const timeout = (time) =>
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });

const scheduler = new Scheduler();
const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
