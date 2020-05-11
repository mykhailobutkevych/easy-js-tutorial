const person = new Object({
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greet!");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello!");
};

const lena = Object.create(person);
lena.name = "Elena";

//===========================

const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(20));
