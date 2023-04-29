const colors = ["red", "orange", "yellow", "green", "blue", "purple", "indigo"];

const container = document.querySelector("#boxes");

const changeColor = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};

for (let color of colors) {
  const box = document.createElement("div");

  box.style.backgroundColor = color;

  box.classList.add("box");

  box.addEventListener("click", changeColor);

  container.append(box);
}
