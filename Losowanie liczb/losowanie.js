/*function roll() {
  let liczba1 = Math.floor(Math.random() * 100) + 1;
  let liczba2 = Math.floor(Math.random() * 100) + 1;
  let liczba3 = Math.floor(Math.random() * 100) + 1;

  document.getElementById("label1").innerHTML = liczba1;
  document.getElementById("label2").innerHTML = liczba2;
  document.getElementById("label3").innerHTML = liczba3;
}
*/

let liczba1;
let liczba2;
let liczba3;

function roll() {
  liczba1 = Math.floor(Math.random() * 100) + 1;
  liczba2 = Math.floor(Math.random() * 100) + 1;
  liczba3 = Math.floor(Math.random() * 100) + 1;

  document.getElementById("label1").innerHTML = liczba1;
  document.getElementById("label2").innerHTML = liczba2;
  document.getElementById("label3").innerHTML = liczba3;
}
