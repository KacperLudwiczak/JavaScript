let time = 10;
let odliczanie = setInterval(function () {
  document.getElementById("timer").innerHTML = time + " seconds";
  time -= 1;

  if (time < 0) {
    clearInterval(odliczanie);
    document.getElementById("timer").innerHTML = "JEBUT!!!";
    document.getElementById("body").style.backgroundColor = "#ff0000";
  }
}, 1000);
