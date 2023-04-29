let activeslidenumber = 1;

let arrowleft = document.querySelector(".arrow-left");
let arrowright = document.querySelector(".arrow-right");

// Po użyciu Pętli FOR ta część jest nie potrzebna
/*
let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");

let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
*/

/* Wersja pierwsza. Gorsza. Nie czysty kod.
let showslide1 = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
  slide1.classList.add("active");
};
let showslide2 = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
  slide2.classList.add("active");
};
let showslide3 = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
  slide3.classList.add("active");
};

dot1.addEventListener("click", showslide1);
dot2.addEventListener("click", showslide2);
dot3.addEventListener("click", showslide3);
*/

//Czysty kod.
let hideactiveslide = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
};
let showslide = (slidenumber) => {
  hideactiveslide();
  document.querySelector("#slide" + slidenumber).classList.add("active");
};

// Po użyciu Pętli FOR ta część jest nie potrzebna
/*
let showslide1 = () => {
  activeslidenumber = 1;
  showslide(1);
};
let showslide2 = () => {
  activeslidenumber = 2;
  showslide(2);
};
let showslide3 = () => {
  activeslidenumber = 3;
  showslide(3);
};
*/

// Zamiast tego użyjemy Pętli FOR
/*
dot1.addEventListener("click", showslide1);
dot2.addEventListener("click", showslide2);
dot3.addEventListener("click", showslide3);
*/
for (let i = 1; i <= 3; i++) {
  let showslidei = () => {
    activeslidenumber = i;
    showslide(i);
  };
  document.querySelector("#dot" + i).addEventListener("click", showslidei);
}

// .
let shownextslide = () => {
  if (activeslidenumber === 3) {
    activeslidenumber = 1;
  } else {
    activeslidenumber = activeslidenumber + 1;
  }
  showslide(activeslidenumber);
};
arrowright.addEventListener("click", shownextslide);

//.
let showpreslide = () => {
  if (activeslidenumber === 1) {
    activeslidenumber = 3;
  } else {
    activeslidenumber = activeslidenumber - 1;
  }
  showslide(activeslidenumber);
};
arrowleft.addEventListener("click", showpreslide);
