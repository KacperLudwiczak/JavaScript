function sprawdz() {
  let wiek = document.getElementById("wiek").value;

  if (wiek >= 18 && wiek >= 35)
    document.getElementById("wynik").innerHTML =
      "Jesteś pełnoletni. Możesz kandydować na prezydenta.";
  else if (wiek >= 18)
    document.getElementById("wynik").innerHTML =
      "Jesteś pełnoletni. Nie możesz kandydować na prezydenta.";
  else document.getElementById("wynik").innerHTML = "Jesteś niepełnoletni.";
}
