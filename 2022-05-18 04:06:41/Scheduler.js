class Scheduler {
    constructor() {
        this.waitTasks = [] //  待执行任务
        this.runingTasks = [] //  正在执行的任务类别
        this.maxRunLen = 2    //  允许同时执行任务数量
    }

    add(promiseMaker) {
        if (this.runingTasks.length >= this.maxRunLen) {
            this.waitTasks.push(promiseMaker)
        } else {
            this.run(promiseMaker)
        }
    }

    run(promiseMaker) {
        let len = this.runingTasks.push(promiseMaker);

        promiseMaker().then(() => {
            this.runingTasks.splice(len - 1, 1)
            if (this.waitTasks.length) {
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
