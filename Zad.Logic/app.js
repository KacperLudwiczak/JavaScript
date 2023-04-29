// console.log("It work");
// console.error("My Error");

// if (1 === 1) {
//   console.log("It is true");
// } else {
//   console.log("It is not true");
// }
// if (1 === 2) {
//   console.log("It is true");
// } else {
//   console.log("It is not true");
// }

// let num = 37;
// if (num % 2 !== 0) {
//   console.log("Nieparzysta liczba");
// }

// let rating = 3;
// if (rating === 3) {
//   console.log("Great");
// } else if (rating === 2) {
//   console.log("OK");
// } else if (rating === 1) {
//   console.log("Bad");
// } else {
//   console.log("Something is wrong");
// }

// let highScore = 1430;
// let userScore = 1600;
// if (userScore >= highScore) {
//   console.log(`You have new high score of ${userScore}`);
//   highScore = userScore;
// } else {
//   console.log(`Your score ${userScore}. The high score is ${highScore}`);
// }

// let password = "hello6";
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Good password");
//   } else {
//     console.log("Password long enough, but cannot contain spaces");
//   }
// } else {
//   console.log("Password must be longer");
// }

// let password = "hlaaaao6";
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Good password");
// } else {
//   console.log("Wrong Password");
// }

// let num = 3;
// if (num >= 1 && num <= 10) {
//   console.log("Number from 1 to 10");
// } else {
//   console.log("Not number from 1 to 10");
// }

// let flavor = "watermelon";
// if (flavor !== "grape" && flavor !== "cherry") {
//   console.log("We dont have");
// }
// if (!(flavor === "grape" || flavor === "cherry")) {
//   console.log("We dont have 2");
// }

// let x = 7;
// console.log(x == 7 || (x === 3 && x > 10));
// console.log((x == 7 || x === 3) && x > 10);

// let day = 6;
// if (day === 1) {
//   console.log("Mon");
// } else if (day === 2) {
//   console.log("Tue");
// } else if (day === 3) {
//   console.log("Wed");
// } else if (day === 4) {
//   console.log("Thu");
// } else if (day === 5) {
//   console.log("Fri");
// } else if (day === 6) {
//   console.log("Sat");
// } else if (day === 7) {
//   console.log("Sun");
// } else {
//   console.log("Wrong day");
// }

// let day = 5;
// switch (day) {
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Tue");
//     break;
//   case 3:
//     console.log("Wed");
//     break;
//   case 4:
//     console.log("Thu");
//     break;
//   case 5:
//     console.log("Fri");
//     break;
//   case 6:
//     console.log("Sat");
//     break;
//   case 7:
//     console.log("Sun");
//     break;
// }

// let emoji = "happy face";
// switch (emoji) {
//   case "sad face":
//   case "happy face":
//     console.log("yellow");
//     break;
//   case "heart":
//   case "lips":
//     console.log("red");
//     break;
// }

// let num = 8;
// num === 7 ? console.log("lucky") : console.log("bad");

let status = "offline";
let color = status === "offline" ? console.log("red") : console.log("green");
