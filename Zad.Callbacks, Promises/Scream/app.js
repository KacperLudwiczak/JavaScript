const repeat = (string, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
};

const scream = (string) => {
  return string.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement("h1");
  h1.innerText = getRantText(phrase);
  el.append(h1);
};

makeRant("go away", document.body);
