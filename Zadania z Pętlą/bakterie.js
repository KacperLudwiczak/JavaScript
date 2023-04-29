let populacja = 1;
let godzin = 0;
while (populacja <= 1000000000) {
  godzin++;
  populacja = populacja * 2;

  document.write("godziny: ", godzin);
  document.write("populacja: ", populacja);
  document.write("<br>");
}
