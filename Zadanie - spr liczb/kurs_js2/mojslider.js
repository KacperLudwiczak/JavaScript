let numer = Math.floor(Math.random() * 5) + 1;
let timer1 = 0;
let timer2 = 0;

function ustawslide(nrslide) {
  clearTimeout(timer1);
  clearTimeout(timer2);
  numer = nrslide - 1;

  schowaj();
  setTimeout("zmienslide()", 500);
}

function schowaj() {
  $("#slider").fadeOut(500);
}

function zmienslide() {
  numer++;
  if (numer > 5) numer = 1;

  let plik = '<img src="slajdy/slajd' + numer + '.png"/>';

  document.getElementById("slider").innerHTML = plik;
  $("#slider").fadeIn(500);

  timer1 = setTimeout("zmienslide()", 5000);
  timer2 = setTimeout("schowaj()", 4500);
}
