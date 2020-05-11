function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Vlad",
  age: 33,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 23,
};

person.logInfo.bind(lena, "FrontEnd", "123-435-432")();
person.logInfo.call(lena, "FrontEnd", "123-435-432");
person.logInfo.apply(lena, ["FrontEnd", "123-435-432"]);
