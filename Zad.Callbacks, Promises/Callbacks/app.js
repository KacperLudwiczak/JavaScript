// const button = document.querySelector("button");

// setTimeout(() => {
//   button.style.transform = "translateX(100px)";
//   setTimeout(() => {
//     button.style.transform = "translateX(200px)";
//     setTimeout(() => {
//       button.style.transform = "translateX(300px)";
//       setTimeout(() => {
//         button.style.transform = "translateX(400px)";
//         setTimeout(() => {
//           button.style.transform = "translateX(500px)";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const button = document.querySelector("button");

// const moveX = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`;
//     if (callback) callback();
//   }, delay);
// };

// moveX(button, 100, 1000, () => {
//   moveX(button, 200, 1000, () => {
//     moveX(button, 300, 1000, () => {
//       moveX(button, 400, 1000, () => {
//         moveX(button, 500, 1000);
//       });
//     });
//   });
// });

// const button = document.querySelector("button");

// const moveX = (element, amount, delay, callback) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;

//   if (elRight + amount > bodyBoundary) {
//     console.log("done");
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       if (callback) callback();
//     }, delay);
//   }
// };

// moveX(button, 100, 1000, () => {
//   moveX(button, 100, 1000, () => {
//     moveX(button, 100, 1000, () => {
//       moveX(button, 100, 1000, () => {
//         moveX(button, 1000, 1000);
//       });
//     });
//   });
// });

const button = document.querySelector("button");

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;

    if (elRight + amount > bodyBoundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

moveX(
  button,
  100,
  1000,
  () => {
    moveX(
      button,
      300,
      1000,
      () => {
        moveX(
          button,
          600,
          1000,
          () => {
            console.log("good");
          },
          () => {
            alert("cannot move 1");
          }
        );
      },
      () => {
        alert("cannot move 2");
      }
    );
  },
  () => {
    alert("cannot move 3");
  }
);
