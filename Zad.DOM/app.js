const inputs = document.getElementsByTagName("input");

for (let input of inputs) {
  console.log(input.value);
}

const arr = [...inputs];

console.log(arr);

const header = document.getElementsByClassName("header");

console.log(header);

const special = document.querySelector(".special");

console.log(special);

const specialPeas = document.querySelector("section ul li.special");

console.log(specialPeas);

const password = document.querySelector('input[type="password"]');

console.log(password);

const allLi = document.querySelectorAll("li");

console.log(allLi);
