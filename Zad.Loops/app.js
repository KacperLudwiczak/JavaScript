// for (let i = 1; i <= 10; i++) {
//   console.log("Hello", i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num} = ${num * num}`);
// }

// for (let i = 200; i >= 0; i -= 3) {
//   console.log(i);
// }

// const scores = [98, 77, 84, 91, 57, 66];
// for (let i = 0; i < scores.length; i++) {
//   console.log(`${i}. ${scores[i]}`);
// }

// const students = [
//   {
//     name: "Zeus",
//     grade: 86,
//   },
//   {
//     name: "Artemis",
//     grade: 97,
//   },
//   {
//     name: "Hera",
//     grade: 72,
//   },
//   {
//     name: "Apollo",
//     grade: 90,
//   },
// ];
// for (let i = 0; i < students.length; i++) {
//   let student = students[i];
//   console.log(`${student.name} scored ${student.grade}`);
// }
// let total = 0;
// for (let i = 0; i < students.length; i++) {
//   let student = students[i];
//   total += student.grade;
//   console.log(total);
// }
// console.log(total);
// let avg = total / students.length;
// console.log(avg);

// const word = "stressed";
// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
// }
// console.log(word.length);
// console.log(word.length - 1);
// let reverse = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   reverse += word[i];
//   console.log(reverse);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`First lopp: ${i}  `);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log(`  Second loop: ${j}`);
//   }
// }

// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   console.log(row);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }
// let total = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     total += row[j];
//   }
// }
// console.log(`Total score: ${total}`);

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//   console.log(`Target: ${target}. Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Congrats!!! Target: ${target}. Guess: ${guess}`);

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (true) {
//   if (target === guess) break;
//   guess = Math.floor(Math.random() * 10);
//   console.log(`Target: ${target}. Guess: ${guess}`);
// }
// console.log(`Congrats!!! Target: ${target}. Guess: ${guess}`);

// let subreddits = ["soccer", "popheads", "cringe", "books"];
// for (let sub of subreddits) {
//   console.log(sub);
// }

// for (let char of "hello") {
//   console.log(char.toUpperCase());
// }

// const square = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];
// for (let row of square) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// const moviesReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amadeus: 10,
//   "Kill Bill": 8,
//   "In Bruges": 9,
//   Coraline: 7.5,
// };
// console.log(Object.keys(moviesReviews));
// console.log(Object.values(moviesReviews));
// for (let movie of Object.keys(moviesReviews)) {
//   console.log(movie, moviesReviews[movie]);
// }
// const ratings = Object.values(moviesReviews);
// let total = 0;
// for (let rating of ratings) {
//   total += rating;
// }
// console.log(`Total: ${total}`);
// let avg = total / ratings.length;
// console.log(`Average: ${avg}`);

// const person = {
//   name: "John",
//   lastName: "Smith",
//   age: 15,
// };
// for (let property in person) {
//   console.log(property);
//   console.log(person[property]);
// }

for (let k of [88, 99, 77, 66]) {
  console.log(k);
}
for (let k in [88, 99, 77, 66]) {
  console.log(k);
}
