// const inputs = document.getElementsByTagName("input");

// for (let input of inputs) {
//   console.log(input.value);
// }

// const arr = [...inputs];

// console.log(arr);

// const header = document.getElementsByClassName("header");

// console.log(header);

// const special = document.querySelector(".special");

// console.log(special);

// const specialPeas = document.querySelector("section ul li.special");

// console.log(specialPeas);

// const password = document.querySelector('input[type="password"]');

// console.log(password);

// const allLi = document.querySelectorAll("li");

// console.log(allLi);

// const h1 = document.querySelector("h1");

// console.log(h1);
// console.log(h1.innerText);

// const ul = document.querySelector("ul");

// console.log(ul.innerText);

// ul.innerText = "I am Hungry";
// console.log(ul.innerText);

// const p = document.querySelector("p");

// console.log(p.innerText);
// console.log(p.textContent);

// const form = document.querySelector("form");

// console.log(form.innerHTML);

// form.innerHTML = "<h1><b>New Form</b><h1>";

// const h1 = document.querySelector("h1");
// h1.innerHTML += " is cool";

// const inputs = document.querySelectorAll("input");
// inputs[0].value += "the bear";

// const a = document.querySelector("a");
// a.href = "https://www.google.pl/";

// const img = document.querySelector("img");
// img.src =
//   "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

// const range = document.querySelector('input[type="range"');

// console.log(range.getAttribute("max"));
// console.log(range.getAttribute("min"));
// console.log(range.getAttribute("type"));

// range.setAttribute("min", "-500");
// console.log(range.getAttribute("min"));

// range.setAttribute("type", "radio");

// const firstLi = document.querySelector("li");

// console.log(firstLi.parentElement);
// console.log(firstLi.parentElement.parentElement);
// console.log(firstLi.parentElement.parentElement.parentElement);

// console.log(firstLi.nextElementSibling);
// console.log(firstLi.nextElementSibling.nextElementSibling);

// const thirdLi = firstLi.nextElementSibling.nextElementSibling;

// console.log(thirdLi.previousElementSibling);

// const ul = firstLi.parentElement;

// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[0].innerText);

// const allLi = document.querySelectorAll("li");

// for (let i = 0; i < allLi.length; i++) {
//   allLi[i].innerText = "We are the Champs";
// }

// for (let li of allLi) {
//   li.innerHTML = "We are the <b>champions</b>";
// }

// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");

// h1.style.color = "green";
// p.style.color = "white";
// p.style.backgroundColor = "black";
// p.style.fontSize = "50px";

// const allLi = document.querySelectorAll("li");
// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// allLi.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });

// const li = document.querySelector("li");
// const styles = getComputedStyle(li);

// console.log(styles.color);
// console.log(styles.fontSize);

// const todo = document.querySelector("#todos .todo");

// todo.classList.remove("todo");
// todo.classList.add("done");

// const newH1 = document.createElement("h1");
// const section = document.querySelector("section");

// newH1.innerText = "New H1 is here";
// newH1.classList.add("special");
// section.appendChild(newH1);

// const newImg = document.createElement("img");

// newImg.src =
//   "https://images.unsplash.com/photo-1586724220920-ab7eafeaf663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";

// newImg.style.width = "300px";

// document.body.append(newImg);

// const newLink = document.createElement("a");

// newLink.innerText = "Uwaga Naukowy Bełkot";
// newLink.href =
//   "https://www.youtube.com/watch?v=BNZrBZHuuJQ&ab_channel=Uwaga%21NaukowyBe%C5%82kot";

// const firstP = document.querySelector("p");

// firstP.append(newLink);

// const parentUl = document.querySelector("ul#todos");
// const firstLi = document.querySelector("li.todo");
// const newLi = document.createElement("li");

// newLi.innerText = "New Li";

// parentUl.insertBefore(newLi, firstLi);

// const i = document.createElement("i");
// i.innerText = "New iiii";

// const firstP = document.querySelector("p");

// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);
// firstP.insertAdjacentElement("afterbegin", i);

const ul = document.querySelector("section ul");
const thingToRemove = ul.querySelector(".special");

ul.removeChild(thingToRemove);

const ulTodos = document.querySelector("ul#todos");

ulTodos.remove();
