/*var timer;
var ele = document.getElementById("timer");

(function () {
  var sec = 0;
  timer = setInterval(() => {
    document.getElementById("timer").innerHTML = "00:" + sec;
    sec++;
  }, 1000); // each 1 second
})();

function pause() {
  clearInterval(timer);
}

/*let timer;
let ele = document.getElementById("timer");
function timer() {
  let sec = 0;
  timer = setInterval(() => {
    ele.innerHTML = "00:" + sec;
    sec++;
  }, 1000);
}

/*function spr() {
  let liczba = document.getElementById("liczba").value;

  for (liczba = 15; liczba >= 0; liczba--) {
    document.write(liczba);
    document.write("<br>");
  }
}

/*for (i = 15; i >= 0; i--) {
  document.write(i + "<br>");
}
*/
/*
alert("hi");

for (var start = 1; start < 10; start++) {
  setTimeout(function () {
    alert("hello");
  }, 3000);
}
*/
/*
function time() {
  for (i = 15; i >= 0; i--) {
    setTimeout(function time() {
      document.write(i + "<br>");
    }, 2000);
  }
}
*/
/*
let i = 15;
while (i >= 0) {
  document.write(i + "<br>");
  i--;
  setTimeout("while", 1000);
}
*/
/*var array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    document.write(array[i]);
  }, 1000);
}
*/
/*
for (i = 15; i >= 0; i--) {
  setTimeout(function () {
    document.write("count", i);
  }, 2000);
}


{
  setTimeout(function () {
    for (i = 15; i >= 0; i--) {
      document.write(i);
    }
  }, 2000);
}
*/
/*
function f() {
  for (i = 15; i >= 0; i--) {
    document.write(i + setTimeout("f()", 2000));
  }
}
*/ /*
setInterval("timer()", 1000);
function timer() {
  for (i = 15; i >= 0; i--) {
    document.write(i);
    document.write("<br>");
  }
}
*/

(function () {
  let timer;
  let sec = 15;
  timer = setInterval(() => {
    document.getElementById("timer").innerHTML = sec;
    sec--;
  }, 1000);
})();
