// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function (num) {
//   console.log(num);
// });

// function triple(num) {
//   console.log(num * 3);
// }

// numbers.forEach(triple);

// const books = [
//   {
//     title: "Good omen",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// books.forEach(function (book) {
//   console.log(book.title.toUpperCase());
// });

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ["asap", "byob", "rsvp", "diy"];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// console.log(doubles);

// const numDetail = numbers.map(function (num) {
//   return {
//     value: num,
//     isEven: num % 2 === 0,
//   };
// });

// console.log(numDetail);

// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split("").join(".");
// });

// console.log(abbrevs);

// let movies = ["Mr. Fox", "Mrs. Smith", "Mrs. Doubtfire", "Mr. Deeds"];

// const moviesMrs = movies.find((movie) => {
//   return movie.includes("Mrs");
// });

// console.log(moviesMrs);

// const moviesMrs2 = movies.find((movie) => {
//   return movie.indexOf("Mrs") === 0;
// });

// console.log(moviesMrs2);

// const books = [
//   {
//     title: "Good omen",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// const goodBook = books.find((book) => {
//   return book.rating >= 4.3;
// });

// console.log(goodBook);

// const neilBook = books.find((book) => {
//   return book.authors.includes("Neil Gaiman");
// });

// console.log(neilBook);

// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter((num) => {
//   return num % 2 === 1;
// });
// const evens = nums.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(odds);
// console.log(evens);

// const bigNums = nums.filter((num) => num > 50);

// console.log(bigNums);

// const words = ["dog", "dig", "log", "bag", "wag"];

// const all3 = words.every((word) => {
//   return word.length === 3;
// });

// console.log(all3);

// const lastG = words.every((word) => {
//   const last = word.length - 1;
//   return word[last] === "g";
// });

// console.log(lastG);

// const firstD = words.some((word) => {
//   return word[0] === "d";
// });

// console.log(firstD);

// const prices = [400, 3000, 99.99, 35.99, 12, 9500];

// console.log(prices.sort());

// const sort1 = prices.sort((a, b) => a - b);

// console.log(sort1);

// const sort2 = prices.sort((a, b) => b - a);

// console.log(sort2);

const nums = [3, 4, 5, 6, 7];

const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

console.log(product);

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal;
  return max;
});

console.log(maxGrade);

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 100000);

console.log(sum);

const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

const results = votes.reduce((total, currentVal) => {
  if (total[currentVal]) {
    total[currentVal]++;
  } else {
    total[currentVal] = 1;
  }
  return total;
}, {});

console.log(results);
