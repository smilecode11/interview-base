// 实现一个调度器

class Scheduler {
    constructor() {
        this.waitTask = []
        this.runTask = []
        this.maxRunNum = 2
    }

    add(promiseMaker) {
        if (this.runTask.length < this.maxRunNum) {
            this.run(promiseMaker)
        } else {
            this.waitTask.push(promiseMaker)
        }
    }

    run(promiseMaker) {
        const len = this.runTask.push(promiseMaker)
        const index = len - 1;
        promiseMaker().then(() => {
            this.runTask.splice(index, 1)
            if (this.waitTask.length > 0) {
                this.run(this.waitTask.shift())
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
