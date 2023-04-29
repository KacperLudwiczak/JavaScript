function roll() {
  let liczba = Math.floor(Math.random() * 10) + 1;
  let wpis = document.getElementById("wpis").value;

  if (liczba == wpis)
    document.getElementById("label").innerHTML =
      "Dobrze! Liczba wynosi " + liczba;
  else
    document.getElementById("label").innerHTML =
      "Zła liczba. Prawidłowa liczba " + liczba;
}
/*
function roll() {
  let liczba = Math.floor(Math.random() * 3) + 1;
  let wpis = document.getElementById("wpis").value;
  let ile_prob = 1;
  while (ile_prob <= 3) {
    if (liczba == wpis)
      document.getElementById("label").innerHTML =
        "Dobrze! Liczba wynosi " + liczba;
    else
      document.getElementById("label").innerHTML =
        "Zła liczba. Która próba " + ile_prob;

    ile_prob++;
  }
}
*/
