const input = document.querySelector("#username");

input.addEventListener("keydown", function (event) {
  console.log("keydown");
});

input.addEventListener("keyup", function (event) {
  console.log("keyup");
});

input.addEventListener("keypress", function (event) {
  console.log("keypress");
});

const adddItemInput = document.querySelector("#addItem");

const itemUl = document.querySelector("#items");

adddItemInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const newItemText = this.value;

    const newItem = document.createElement("li");

    newItem.innerText = newItemText;

    itemUl.append(newItem);

    this.value = "";
  }
});
