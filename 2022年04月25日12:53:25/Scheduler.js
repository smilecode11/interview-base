class Scheduler {
  wait;
  runing;
  maxRuningLen;

  constructor() {
    this.wait = [];
    this.runing = [];
    this.maxRuningLen = 2;
  }

  add(promiseMaker) {
    if (this.runing.length < this.maxRuningLen) {
      this.run(promiseMaker);
    } else {
      this.wait.push(promiseMaker)
    }
  }

  run(promiseMaker) {
    this.runing.push(promiseMaker);
    let index = this.runing.length - 1;
    promiseMaker().then(() => {
      this.runing.splice(index, 1)
      if (this.wait.length > 0) { 
        this.run(this.wait.shift())
      }
    });
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
