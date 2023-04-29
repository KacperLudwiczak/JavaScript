let pln = 1000;
document.write("Wpłata: " + pln + " PLN <br><br>");

// Przewalutowanie
let usd = pln / 4.00835701;
document.write("Saldo: " + usd + " USD <br>");

usd = Math.floor(usd * 100) / 100;
document.write("Saldo: " + usd + " USD <br><br>");

//Zakupy
let zakupy = 23.99;
document.write("Zakupy: " + zakupy + " USD <br>");

let prowizja = 0.02 * zakupy; // 0.2 ponieważ prowizja wynosi = 2%
document.write("Prowizja: " + prowizja + " USD <br>");

prowizja = Math.ceil(prowizja * 100) / 100;
document.write("Prowizja: " + prowizja + " USD <br><br>");

// Po zakupach
usd = usd - zakupy - prowizja;
document.write("Saldo końcowe: " + usd + " USD <br><br>");

// Dodatkowo funkcja przycinająca
usd = 225.99;
usd = Math.trunc(usd);
document.write(
  "Saldo końcowe (z funkcją przycinania): " + usd + " USD <br><br>"
);
