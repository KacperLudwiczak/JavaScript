// function grumpus() {
//   console.log("ugh...you again...");
//   console.log("FOR THE LAST TIME...");
//   console.log("LEAVE ME ALONE!!!");
// }
// grumpus();

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled is ${roll}`);
// }
// function throwDice() {
//   for (let i = 1; i <= 10; i++) {
//     rollDie();
//   }
// }
// throwDice();

// function hello(name) {
//   console.log(`Hey, ${name}`);
// }
// hello("John");

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled is ${roll}`);
// }
// function throwDice(numRolls) {
//   for (let i = 1; i <= numRolls; i++) {
//     rollDie();
//   }
// }
// throwDice(3);

// function sum(x, y) {
//   console.log(x + y);
// }
// sum(6, 4);
// function div(x, y) {
//   console.log(x / y);
// }
// div(20, 4);
// div(4, 20);

// function add(x, y) {
//   return x + y;
// }
// const total = add(9, 16);
// console.log(total);

// function isBlue(color) {
//   if (color.toLowerCase() === "blue") {
//     return true;
//   } else return false;
// }
// console.log(isBlue("blue"));
// console.log(isBlue("BlUe"));
// console.log(isBlue("Ble"));

// function isBlue(color) {
//   return color.toLowerCase() === "blue";
// }
// console.log(isBlue("blue"));
// console.log(isBlue("BlUe"));
// console.log(isBlue("Ble"));

// function contains(colors) {
//   for (let color of colors) {
//     if (color === "blue" || color === "green") {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(contains("blue"));
// console.log(contains(["blue"]));
// console.log(contains(["black", "blue"]));
// console.log(contains(["black", "pink"]));
// console.log(contains(["black", "pink", "green"]));

// function isValidPassword(password, username) {
//   if (
//     password.length >= 8 &&
//     password.indexOf(" ") === -1 &&
//     password.includes(username) === false
//   )
//     return true;
//   return false;
// }
// console.log(isValidPassword("12345678", "abc"));
// console.log(isValidPassword("89Fjjlnms", "dogLuvr"));
// console.log(isValidPassword("dogLuvr123!", "dogLuvr"));

// function avg(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   return total / arr.length;
// }
// console.log(avg([0, 50]));
// console.log(avg([75, 76, 80, 95, 100]));

// function isPangram(sentence) {
//   if (
//     sentence.includes("a") &&
//     sentence.includes("b") &&
//     sentence.includes("c") &&
//     sentence.includes("d") &&
//     sentence.includes("e") &&
//     sentence.includes("f") &&
//     sentence.includes("g") &&
//     sentence.includes("h") &&
//     sentence.includes("i") &&
//     sentence.includes("j") &&
//     sentence.includes("k") &&
//     sentence.includes("l") &&
//     sentence.includes("m") &&
//     sentence.includes("n") &&
//     sentence.includes("o") &&
//     sentence.includes("p") &&
//     sentence.includes("q") &&
//     sentence.includes("r") &&
//     sentence.includes("s") &&
//     sentence.includes("t") &&
//     sentence.includes("u") &&
//     sentence.includes("v") &&
//     sentence.includes("w") &&
//     sentence.includes("x") &&
//     sentence.includes("y") &&
//     sentence.includes("z")
//   )
//     return true;
//   else return false;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram("The quick brown fox jumps over the lazy do"));

// function isPangram(sentence) {
//   let lowerCase = sentence.toLowerCase();
//   let alfabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let letter of alfabet) {
//     if (!lowerCase.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram("The quick brown fox jumps over the lazy do"));

// function getCard() {
//   let value = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const idv = Math.floor(Math.random() * value.length);

//   let suit = ["clubs", "spades", "hearts", "diamonds"];
//   const ids = Math.floor(Math.random() * suit.length);

//   return { value: value[idv], suit: suit[ids] };
// }
// console.log(getCard());

function pick(arr) {
  const id = Math.floor(Math.random() * arr.length);
  return arr[id];
}
function getCard() {
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let suits = ["clubs", "spades", "hearts", "diamonds"];
  return { value: pick(values), suit: pick(suits) };
}
console.log(getCard());
