const startingminutes = 10; //mamy 10 min
let time = startingminutes * 60; //10 min razy 60 sekund

let counter = document.getElementById("countdown");

setInterval(update_countdown, 1000);

function update_countdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  counter.innerHTML = `${minutes}:${seconds}`; //Kurwa użyj kreseczki z dupy po lewej
  time--;
}
/*
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdownEl.innerHTLM = `${minutes}:${seconds};`;
  time--;
}

const startingMinutes = 10;
let time = startingMinutes * 60;

let counter = document.getElementById("countdown");
// countdownEl = console.log();
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  counter.innerHTML = `${minutes}:${seconds}`;
  time--;
}
*/
