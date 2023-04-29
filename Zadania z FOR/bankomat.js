function sprawdz() {
  let PIN = document.getElementById("PIN").value;

  if (PIN === "1234") document.getElementById("wynik").innerHTML = "Dobry PIN";
  else document.getElementById("wynik").innerHTML = "Zły PIN";
}
