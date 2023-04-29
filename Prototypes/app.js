// String.prototype.yell = function () {
//   return `AAA ${this.toUpperCase()} !!! AAAA`;
// };
// console.log("i love you".yell());

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r},${g},${b})`;
// }

// console.log(hex(255, 100, 25));
// console.log(rgb(255, 100, 25));

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function () {
//  const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());
// firstColor.r = 255;
// console.log(firstColor.rgb());

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);

// console.log(Color(255, 0, 0));
// console.log(new Color(255, 0, 0));
// console.log(color1.rgb());
// console.log(color2.rgb());
// console.log(color2.hex());

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet() {
    return `Hello from ${this.name} !!!`;
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
}

const color1 = new Color(255, 67, 89, "red");
console.log(color1);
console.log(color1.greet());
console.log(color1.rgb());
