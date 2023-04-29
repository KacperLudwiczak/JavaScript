// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => {
//     return sum + r;
//   });
//   const avg = sum / arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg,
//   };
// };

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats = getStats(reviews);

// console.log(stats);

// const getStats2 = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => {
//     return sum + r;
//   });
//   const avg = sum / arr.length;
//   return {
//     max,
//     min,
//     sum,
//     avg,
//   };
// };

// const reviews2 = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats2 = getStats2(reviews2);

// console.log(stats2);

// const role = "host";
// const person = "Jools Holland";
// const role2 = "director";
// const person2 = "James Cameon";

// const team1 = {};

// team1.role = person;
// team1.role2 = person2;

// console.log(team1);

// const team2 = {};

// team2[role] = person;
// team2[role2] = person2;

// console.log(team2);

// const team3 = {
//   [role]: person,
//   [role2]: person2,
//   [1 + 6 + 9]: "sixteen",
// };

// console.log(team3);

// function addProperty(object, key, value) {
//   const copy = { ...object };
//   copy[key] = value;
//   return copy;
// }

// console.log(addProperty(team3, "happy", ":-)"));

// const addProperty2 = (object, key, value) => {
//   return {
//     ...object,
//     [key]: value,
//   };
// };

// console.log(addProperty2(team3, "happy", ":-)"));

// const math = {
//   numbers: [1, 2, 3, 4, 5],
//   add: function (x, y) {
//     return x + y;
//   },
//   multiply: function (x, y) {
//     return x * y;
//   },
// };

// console.log(math);
// console.log(math.add(6, 3));

// const math2 = {
//   numbers: [1, 2, 3, 4, 5],
//   add(x, y) {
//     return x + y;
//   },
//   multiply(x, y) {
//     return x * y;
//   },
// };

// console.log(math2);
// console.log(math2.add(6, 3));

// const auth = {
//   username: "Tom",
//   login() {
//     console.log("Logged You In");
//   },
//   logout() {
//     console.log("Goodbye");
//   },
// };

// console.log(auth);

// const person = {
//   first: "Cherilyn",
//   last: "Sarkisian",
//   nickName: "Cher",
//   fullName() {
//     console.log(this);
//   },
//   fullName2() {
//     console.log(this.first);
//   },
// };

// console.log(person);
// console.log(person.fullName());
// console.log(person.fullName2());

// const person = {
//   first: "Cherilyn",
//   last: "Sarkisian",
//   nickName: "Cher",
//   fullName() {
//     console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
//   },
// };

// console.log(person.fullName());

// const person = {
//   first: "Cherilyn",
//   last: "Sarkisian",
//   nickName: "Cher",
//   fullName() {
//     const { first, last, nickName } = this;
//     return `${first} ${last} AKA ${nickName}`;
//   },
//   printBio() {
//     const fullName = this.fullName();
//     return `${fullName} this is a BIO`;
//   },
// };

// console.log(person.fullName());
// console.log(person.printBio());

// person.nickName = "Cherrrrr";
// console.log(person.fullName());

// const printBio = person.printBio;
// console.log(printBio);

// const annoyer = {
//   phrases: ["litterar", "crazy", "even", "totes", "yolo", "stop"],
//   pick() {
//     const { phrases } = this;
//     const index = Math.floor(Math.random() * phrases.length);
//     return phrases[index];
//   },
//   start() {
//     this.timerId = setInterval(() => {
//       console.log(this.pick());
//     }, 3000);
//   },
//   stop() {
//     clearInterval(this.timerId);
//   },
// };

// console.log(annoyer.start());

// function makeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({ value, suit });
//     }
//   }
//   return deck;
// }

// console.log(makeDeck());

// const myDeck = makeDeck();

// function drawCard(deck) {
//   return deck.pop();
// }

// const card1 = drawCard(myDeck);

// console.log(card1);

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMult(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
};

console.log(myDeck.initializeDeck());
console.log(myDeck.drawCard());
console.log(myDeck.drawCard());
console.log(myDeck.drawMult(5));
console.log(myDeck.deck);
