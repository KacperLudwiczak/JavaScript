const form = document.querySelector("#signup-form");
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

// form.addEventListener("submit", function (e) {
//   console.log("cc", creditCardInput.value);
//   console.log("terms", termsCheckbox.value);
//   console.log("veggie", veggieSelect.value);
//   e.preventDefault();
// });

const formData = {};

creditCardInput.addEventListener("input", (e) => {
  console.log("CC change", e);
  formData["cc"] = e.target.value;
});

veggieSelect.addEventListener("input", (e) => {
  console.log("Veggie change", e);
  formData["veggie"] = e.target.value;
});
