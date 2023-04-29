// const sum = function (x, y) {
//   return x + y;
// };
// console.log(sum(2, 3));

// const sum2 = (x, y) => {
//   return x + y;
// };
// console.log(sum2(6, 7));

// const sum3 = (x, y) => x + y;
// console.log(sum3(6, 3));

// function add(x, y) {
//   return x + y;
// }
// const subtract = function (x, y) {
//   return x - y;
// };
// function multiply(x, y) {
//   return x * y;
// }
// const divide = function (x, y) {
//   return x / y;
// };

// const operations = [add, subtract, multiply, divide];

// console.log(operations[0](10, 7));
// console.log(operations[1](10, 7));
// console.log(operations[2](10, 7));
// console.log(operations[3](10, 7));

// for (let funcion of operations) {
//   let result = funcion(30, 5);
//   console.log(result);
// }

// const thing = {
//   doSomething: multiply,
// };
// console.log(thing);
// console.log(thing.doSomething);
// console.log(thing.doSomething());
// console.log(thing.doSomething(2, 5));

// function callThreeTimes(funcion) {
//   funcion();
//   funcion();
//   funcion();
// }

// function cry() {
//   console.log("BOO HOO BOO HOO");
// }

// function rage() {
//   console.log("I HATEEE");
// }

// console.log(callThreeTimes(cry));
// console.log(callThreeTimes(rage));

// function repeatNTimes(action, num) {
//   for (let i = 1; i <= num; i++) {
//     action();
//   }
// }

// function cry() {
//   console.log("BOO HOO BOO HOO");
// }

// function rage() {
//   console.log("I HATEEE");
// }

// console.log(repeatNTimes(cry, 5));
// console.log(repeatNTimes(rage, 8));

// function pickOne(funcion1, funcion2) {
//   let random = Math.random();
//   console.log(random);
//   if (random < 0.5) {
//     funcion1();
//   } else funcion2();
// }

// function cry() {
//   console.log("BOO HOO BOO HOO");
// }

// function rage() {
//   console.log("I HATEEE");
// }

// console.log(pickOne(cry, rage));

// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const triple = multiplyBy(3);
// console.log(triple(6));

// const double = multiplyBy(2);
// console.log(double(7));

// const halve = multiplyBy(0.5);
// console.log(halve(6));

// function makeBetween(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }

// const isChild = makeBetween(0, 18);
// console.log(isChild(15));
// console.log(isChild(19));

// const isNineties = makeBetween(1990, 1999);
// console.log(isNineties(1995));
// console.log(isNineties(2000));
// console.log(isNineties(1989));

// setTimeout(function () {
//   alert("Welcome");
// }, 3000);

// function nooo() {
//   alert("Noooooooooo");
// }

// const button = document.querySelector("button");
// button.addEventListener("click", nooo);

console.log(ok());

function ok() {
  console.log("OKKK");
}
