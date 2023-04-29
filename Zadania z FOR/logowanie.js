function sprawdz() {
  let login = document.getElementById("login").value;
  let haslo = document.getElementById("haslo").value;

  if (login === "Kacper Ludwiczak" && haslo === "1234") {
    document.getElementById("wynik").innerHTML = "Udało się zalogować.";
  } else
    document.getElementById("wynik").innerHTML = "Nie udało się zalogować.";
}
