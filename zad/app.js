let result = document.getElementById("result");
/*
function ok() {
  result.innerHTML = "abc";
}
setTimeout("ok();", 3000);
*/
/*
function ok() {
  result.innerHTML += 1 + "<br>";
}

 function ok1(){
for (ok() = 1; ok() <= 5; ok()++) {
result.innerHTML += ok() + "<br>";
 }
}
setTimeout("ok1();", 1000);
*/
function ok() {
  for (i = 0; i <= 4; i++) {
    function ok1() {
      let tab = new Array("a", "b", "c", "d", "e");
      result.innerHTML += tab[i] + "<br>";
    }
    ok1();
  }
}
setTimeout("ok();", 1000);
