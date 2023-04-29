let result = document.getElementById("result");
let color = "pink";
switch (color) {
  case "red":
    result.style.backgroundColor = "red";
    result.style.color = "white";
    break;
  case "blue":
    result.style.backgroundColor = "blue";
    result.style.color = "white";
    break;
  case "green":
    result.style.backgroundColor = "green";
    result.style.color = "white";
    break;

  default:
    result.style.backgroundColor = "grey";
    result.style.color = "white";
    result.innerHTML = "Brak koloru";
    break;
}
