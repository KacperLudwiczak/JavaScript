function wypisz() {
  let liczba1 = parseFloat(document.getElementById("pole1").value);
  let liczba2 = parseFloat(document.getElementById("pole2").value);
  let napis = "";

  if (liczba1 < liczba2) {
    for (i = liczba1; i <= liczba2; i++) {
      napis = napis + i + " ";
      document.getElementById("wynik").innerHTML = napis;
    }
  } else if (liczba1 > liczba2)
    document.getElementById("wynik").innerHTML =
      "Nie prawidłowo. Pierwsza liczba jest większa od drugiej.";
  else if (liczba1 === liczba2)
    document.getElementById("wynik").innerHTML =
      "Nie prawidłowo. Pierwsza liczba jest równa drugiej.";
  else document.getElementById("wynik").innerHTML = "Nie prawidłowo.";
}
