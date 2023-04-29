function spr() {
  let imie = document.getElementById("imie").value;
  let liczba = document.getElementById("liczba").value;

  for (i = 1; i <= liczba; i++) {
    document.write(i + "." + imie);
    document.write("<br>");
  }
}
