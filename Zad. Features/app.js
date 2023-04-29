// function multiply(x, y = 1) {
//   return x * y;
// }

// console.log(multiply(4, 5));
// console.log(multiply(4));

// const greet = (person, greeting = "Hi") => {
//   console.log(`${greeting}, ${person}`);
// };

// console.log(greet("Tom", "Hello"));
// console.log(greet("Tom"));

// function giveMeFour(a, b, c, d) {
//   console.log("a.", a);
//   console.log("b.", b);
//   console.log("c.", c);
//   console.log("d.", d);
// }

// const colors = ["red", "orange", "yellow", "green"];
// const str = "GOAL";

// console.log(giveMeFour(colors));
// console.log(giveMeFour(...colors));
// console.log(giveMeFour(...str));

// const animals1 = ["octopus", "squid", "fisch"];

// const animals2 = ["snail", "slug", "neon slug"];

// const animals3 = ["coral", "jelly"];

// const zoo1 = [animals1, animals2];
// const zoo2 = [...animals1, ...animals2];
// const zoo3 = ["garden slug", ...animals1, ...animals2];
// const zoo4 = [...animals3, ...animals2, ...animals1];

// console.log(zoo1);
// console.log(zoo2);
// console.log(zoo3);
// console.log(zoo4);

// const feline = {
//   legs: 4,
//   family: "Felidae",
// };

// const canine = {
//   family: "Caninae",
//   furry: true,
// };

// const dog = {
//   ...canine,
//   isPet: true,
//   adorable: true,
// };

// console.log(dog);

// const cat = {
//   ...feline,
//   isGrumpy: true,
//   personality: "good",
// };

// console.log(cat);

// const legs1 = {
//   ...feline,
//   legs: 3,
// };
// const legs2 = {
//   legs: 3,
//   ...feline,
// };

// console.log(legs1);
// console.log(legs2);

// const random = [..."hello", { ...dog }];

// console.log(random);

// function sum() {
//   const argsArr = [...arguments];
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal;
//   });
// }

// console.log(sum(1, 2, 3, 4, 5));

// function sum(...nums) {
//   return nums.reduce((total, cuurVal) => {
//     return total + cuurVal;
//   });
// }

// console.log(sum(1, 2, 3, 4, 5));

// function fullName(first, last, ...titles) {
//   console.log("first:", first);
//   console.log("last:", last);
//   console.log("titles:", titles);
// }

// console.log(fullName("Tom", "Jones", "Jr.", "3"));

// const multiply = (...nums) => {
//   return nums.reduce((total, currVal) => total * currVal);
// };

// console.log(multiply(5, 2, 3));

// const raceResults = [
//   "Eluid",
//   "Feyisa",
//   "Galen",
//   "Ghirmay",
//   "Alphonce",
//   "Jared",
// ];

// const [gold, silver, bronze] = raceResults;
// const [first, , , fourth] = raceResults;
// const [winner, ...others] = raceResults;

// console.log(raceResults);

// console.log(gold);
// console.log(silver);
// console.log(bronze);

// console.log(first);
// console.log(fourth);

// console.log(winner);
// console.log(others);

// const runner = {
//   first: "Eliud",
//   last: "Kipchonge",
//   country: "Kenya",
//   title: "Elder of the Order",
// };

// const { first, last, ...other } = runner;

// console.log(runner);
// console.log(first);
// console.log(last);
// console.log(other);

// const { country: nation, title: honor } = runner;

// console.log(nation);
// console.log(honor);
// console.log(runner);

// const results = [
//   {
//     first: "Eliud",
//     last: "Kipchonge",
//     country: "Kenya",
//   },
//   {
//     first: "Feyisa",
//     last: "Lilesa",
//     country: "Ethipia",
//   },
//   {
//     first: "Galen",
//     last: "Rupp",
//     country: "US",
//   },
// ];

// const [{ first: winner }, {}, {}] = results;

// console.log(winner);

// const [, silver] = results;
// const { country } = silver;

// console.log(silver);
// console.log(country);

const runner = {
  first: "Eliud",
  last: "Kipchonge",
  country: "Kenya",
  title: "Elder of the Order",
};

function print(person) {
  const { first, last, title } = person;
  console.log(`${first} ${last}: ${title}`);
}

console.log(print(runner));

function print2({ first, last, title }) {
  console.log(`${first} ${last}: ${title}`);
}

console.log(print2(runner));

const response = ["HTTP/1.1", "200 OK", "application/json"];

function parseResponse([protocol, status, type]) {
  console.log(`Status: ${status}`);
}

console.log(parseResponse(response));
