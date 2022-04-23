class Scheduler {
    constructor() {
        this.waitTasks = [] //  待执行任务
        this.excutingTasks = [] //  正在执行的任务类别
        this.maxExcutingNum = 2    //  允许同时窒息任务数量
    }

    add(promiseMaker) {
        if (this.excutingTasks.length < this.maxExcutingNum) {
            this.run(promiseMaker)
        } else {
            this.waitTasks.push(promiseMaker)
        }
    }

    run(promiseMaker) {
        const len = this.excutingTasks.push(promiseMaker)
        const index = len - 1
        promiseMaker().then(() => {
            this.excutingTasks.splice(index, 1)
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
