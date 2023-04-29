// function getData() {
//   const data = axios.get("https://swapi.dev/api/people/").then((data) => {
//     console.log(data);
//   });
// }
// getData();

// function greet() {
//   return "Hello!!!";
// }
// console.log(greet());

// async function greet() {
//   return "Hello!!!";
// }

// greet().then((val) => {
//   console.log("Promise resolved with:", val);
// });

// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw "X and Y must be numbers";
//   }
//   return x + y;
// }

// add("e", "r")
//   .then((val) => {
//     console.log("Promise resolved with:", val);
//   })
//   .catch((err) => {
//     console.log("Promise rejected with:", err);
//   });

// console.log(add(6, 3));
// console.log(add(6, "3"));

// function getPlanets() {
//   return axios.get("https://swapi.dev/api/planets/");
// }

// getPlanets().then((response) => {
//   console.log(response.data);
// });

// async function getPlanets2() {
//   const response = await axios.get("https://swapi.dev/api/planets/");
//   console.log(response.data);
// }
// getPlanets2();

// async function getPlanets2() {
//   try {
//     const response = await axios.get("https://swapi.dev/api/planets/");
//     console.log(response.data);
//   } catch (err) {
//     console.log("Catch!!!!!", err);
//   }
// }
// getPlanets2();

// const moveX = (element, amount, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth;
//       const elRight = element.getBoundingClientRect().right;
//       const currLeft = element.getBoundingClientRect().left;
//       if (elRight + amount > bodyBoundary) {
//         reject({ bodyBoundary, elRight, amount });
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`;
//         resolve();
//       }
//     }, delay);
//   });
// };

// const button = document.querySelector("button");

// async function animateRight(element) {
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
//   await moveX(element, 100, 1000);
// }
// animateRight(button).catch((err) => {
//   console.log("All done", err);
// });

// const moveX = (element, amount, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth;
//       const elRight = element.getBoundingClientRect().right;
//       const currLeft = element.getBoundingClientRect().left;
//       if (elRight + amount > bodyBoundary) {
//         reject({ bodyBoundary, elRight, amount });
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`;
//         resolve();
//       }
//     }, delay);
//   });
// };

// const button = document.querySelector("button");

// async function animateRight(element, amt) {
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
//   await moveX(element, amt, 1000);
// }
// animateRight(button, 100).catch((err) => {
//   console.log("All done", err);
//   animateRight(button, -100);
// });

// async function get3Pokemon() {
//   const pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const pokemon2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const pokemon3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");

//   console.log(pokemon2.data.name);
//   console.log(pokemon1.data.name);
//   console.log(pokemon3.data.name);
// }
// get3Pokemon();

// async function get3Pokemon() {
//   const promis1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const promis2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const promis3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

//   const pokemon1 = await promis1;
//   const pokemon2 = await promis2;
//   const pokemon3 = await promis3;

//   console.log(pokemon2.data.name);
//   console.log(pokemon1.data.name);
//   console.log(pokemon3.data.name);
// }
// get3Pokemon();

// const button = document.querySelector("button");

// function changeColor(colorBody, colorButton, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = colorBody;
//       button.style.backgroundColor = colorButton;
//       resolve();
//     }, delay);
//   });
// }

// async function lightShow() {
//   await changeColor("teal", "red", 1000);
//   await changeColor("red", "teal", 1000);
//   await changeColor("blue", "violet", 1000);
//   await changeColor("violet", "blue", 1000);
//   await changeColor("green", "orange", 1000);
//   await changeColor("orange", "green", 1000);
// }

// lightShow();

// async function get3Pokemon() {
//   const promis1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const promis2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const promis3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

//   const results = await Promise.all([promis1, promis2, promis3]);

//   console.log(results);
//   console.log(results[0].data.name);
//   console.log(results[1].data.name);
//   console.log(results[2].data.name);
// }
// get3Pokemon();

async function get3Pokemon() {
  const promis1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const promis2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const promis3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  const results = await Promise.all([promis1, promis2, promis3]);

  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

get3Pokemon();
