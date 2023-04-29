const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("Clickedddd");
});

button.addEventListener("mouseover", function () {
  button.innerText = "Stop";
});

button.addEventListener("mouseout", function () {
  button.innerText = "Click";
});

window.addEventListener("scroll", function () {
  console.log("Stop scroll");
});
