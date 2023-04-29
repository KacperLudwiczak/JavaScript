console.log(2 + 2);

//.
let pi = 3.14;
console.log(2 * 50 * pi);
console.log(2 * 7 * pi);
console.log(2 * 1 * pi);

//.
let nam = "Kamil";
let nazwisko = "Kowalski";
console.log(nam + " " + nazwisko);

//.
nam = "Jan";
nazwisko = "Nowak";
console.log(nam + " " + nazwisko);

//.
let person1 = {
  name: "Karol",
  lastname: "Nowaczkiewicz",
};
let person2 = {
  name: "Tomek",
  lastname: "Hook",
};
console.log(person1.lastname);
console.log(person2.name);
console.log(person1.name + " " + person2.lastname);

//.
/* Korzystając z wiedzy zdobytej w sekcji Obiekty stwórz dwa obiekty reprezentujące dwa samochody. Obiekty powinny składać się z trzech właściwości:
 marki pojazdu (nazwa właściwości mark),
 modelu pojazdu (nazwa właściwości model),
 roku produkcji (nazwa właściwości productionYear)
 Obiekty te przypisz do zmiennych car1 i car2.
 Na sam koniec , dla każdego z obiektów na konsole wypisz markę, model i rok produkcji pojazdu. Przykładowy format wiadomości: Fiat Punto, rok produkcji: 2021.*/
let car1 = {
  mark: "Mercedes",
  model: "C",
  productionYear: 2020,
};
let car2 = {
  mark: "Tesla",
  model: "X",
  productionYear: 2019,
};
console.log(car2);
console.log(car1.mark + " " + car2.productionYear);

//.
/* Korzystając z wiedzy zdobytej w sekcji Zmienne rozwiąz następujce zadania:
Zmienną C, która będzie reprezentować prędkość światła. Przyjmij, ze prędkość światła to 299792458,
Wypisz wartość zmiennej C na konsolę,
Najsłynniejszy wzór fizyczny to E=MC^2. Pozwala on obliczyć energię ciała o masie M. Stwórz zmienną M, która będzie przechowywać masę obiektu, która wynosi 10. Uzywając zmiennych, oblicz całkowitą energię ciała. Przypisz ją do zmiennej E i wypisz ją na konsolę.*/
let C = 299792458;
console.log(C);
let M = 10;
let E = M * C * C;
console.log(E);

//. FUNKCJE
let myfirstfunction = () => {
  console.log("Hej. Mam na imię Kacper");
};
myfirstfunction();

//.
let mysecondfunction = (name) => {
  console.log("Hej. Mam na imię " + name);
};
mysecondfunction("Jan");

//.
let my3function = (greeting, name) => {
  console.log(greeting + ". Mam na imię " + name);
};
my3function("Dzień dobry", "Jan");

//.
/*Napisz funkcję, która przemnoży liczbę przekazaną w parametrze przez dwa i wypisze wynik na konsolę.*/
let multiplyBy2 = (num) => {
  console.log(num * 2);
};
multiplyBy2(5);

/*Napisz funkcję, która przemnoży liczbę przekazaną w parametrze przez dowolną liczbę, przekazaną w kolejnym parametrze.*/
let multiply = (a, b) => {
  console.log(a * b);
};
multiply(5, 3);

/*Napisz funkcję, która podniesie liczbę przekazaną w parametrze do potęgi drugiej.*/
let square = (num) => {
  console.log(num * num);
};
square(5);

//. BOO LEAN
let bool1 = 5 < 10;
console.log(bool1);

let bool2 = 5 > 10;
console.log(bool2);

//.
let bool3 = 1 === 1;
console.log(bool3);

let bool4 = 1 === 2;
console.log(bool4);

//.
let bool5 = 1 !== 2;
console.log(bool5);

let bool6 = 1 !== 1;
console.log(bool6);

//.
let bool7 = "JS" === "JS";
console.log(bool7);

let bool8 = "JS" === "JSL";
console.log(bool8);

//. IF...ELSE
let isbiggerthan10 = (number) => {
  if (number > 10) {
    console.log("Liczba jest wieksza od 10.");
  } else {
    console.log("Liczba nie jest wieksza od 10.");
  }
};
isbiggerthan10(8);
isbiggerthan10(20);

//.
/*
Korzystając z wiedzy z segmentu Operatory i instrukcje warunkowe stwórz następującą funkcję:
Napisz funkcję o nazwie divide, która przyjmie w parametrach dwie liczby i podzieli pierwszą przez drugą a następnie wypisze wynik dzielenia na konsolę. W przypadku próby dzielenia przez 0, funkcja powinna wyświetlić na konsoli komunikat - “Operacja niedozwolona”. Dzielenie w JavaScripcie robi się analogicznie do mnożenia, zamiast znaku gwiazdki używamy /.
 */
let divide = (liczba1, liczba2) => {
  if (liczba2 === 0) {
    console.log("Operacja niedozwolona");
  } else {
    console.log(liczba1 / liczba2);
  }
};
divide(10, 2);
divide(10, 0);

//. PETLA
let circlelenght = (radius) => {
  console.log(2 * radius * 3.14);
};
for (let i = 1; i <= 10; i++) {
  circlelenght(i);
}

//.
/* Korzystając z wiedzy z segmentu Pętla FOR stwórz następującą funkcję:
Napisz funkcję nOddNumbers, która przyjmuje parametr n. Parametr n będzie mówił naszej funkcji ile kolejnych liczb nieparzystych powinna wypisać. Przykładowo wywołanie nOddNumbers(5) wypisze na konsoli kolejno 1, 3, 5, 7, 9. Wzór na kolejną liczbę nieparzystą to 2*i - 1. */
let nOddNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(2 * i - 1);
  }
};
nOddNumbers(5);

//. TABLICA + PETLA
let tablica = [1, 4, 20, 11, 13, 9];
for (i = 0; i < tablica.length; i++) {
  console.log(tablica[i]);
}
