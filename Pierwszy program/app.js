function sprawdz() {
  let uczniowie = document.getElementById("pytanie1").value;

  let cukierki = document.getElementById("pytanie2").value;

  let cukierki_do_oddania = Math.floor(cukierki / (uczniowie - 1));
  document.getElementById("wynik1").innerHTML = cukierki_do_oddania;

  let cukierki_dla_Jasia = Math.floor(
    cukierki - cukierki_do_oddania * (uczniowie - 1)
  );
  document.getElementById("wynik2").innerHTML = cukierki_dla_Jasia;
}
