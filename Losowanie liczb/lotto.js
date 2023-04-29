function roll() {
  let liczba1 = Math.floor(Math.random() * 50) + 1;
  let liczba2 = Math.floor(Math.random() * 50) + 1;
  let liczba3 = Math.floor(Math.random() * 50) + 1;
  let liczba4 = Math.floor(Math.random() * 50) + 1;
  let liczba5 = Math.floor(Math.random() * 50) + 1;
  let liczba6 = Math.floor(Math.random() * 50) + 1;

  document.getElementById("label1").innerHTML = liczba1;
  document.getElementById("label2").innerHTML = liczba2;
  document.getElementById("label3").innerHTML = liczba3;
  document.getElementById("label4").innerHTML = liczba4;
  document.getElementById("label5").innerHTML = liczba5;
  document.getElementById("label6").innerHTML = liczba6;
}
