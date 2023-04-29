// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetYouADog.then(() => {
//   console.log("Good");
// });
// willGetYouADog.catch(() => {
//   console.log("Nooo");
// });

// console.log(willGetYouADog);

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// };

// makeDogPromise()
//   .then(() => {
//     console.log("Good");
//   })
//   .catch(() => {
//     console.log("Nooo");
//   });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "Bilbo" },
//           { id: 5, username: "Esmeralda" },
//         ],
//         "/about": "About page",
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// fakeRequest("/users")
//   .then((response) => {
//     console.log(`Status Code ${response.status}`);
//     console.log(`Data ${response.data}`);
//     console.log("Good");
//   })
//   .catch((response) => {
//     console.log(response.status);
//     console.log("Fail");
//   });

// fakeRequest("/dogs")
//   .then((response) => {
//     console.log(`Status Code ${response.status}`);
//     console.log(`Data ${response.data}`);
//     console.log("Good");
//   })
//   .catch((response) => {
//     console.log(response.status);
//     console.log("Fail");
//   });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "Bilbo" },
//           { id: 5, username: "Esmeralda" },
//         ],
//         "/users/1": {
//           id: 1,
//           username: "Bilbo",
//           upvotes: 360,
//           city: "Lisbon",
//           topPostId: 454321,
//         },
//         "/users/5": {
//           id: 5,
//           username: "Esmeralda",
//           upvotes: 571,
//           city: "Honololu",
//         },
//         "/posts/454321": {
//           id: 454321,
//           title: "Ladies & Gentleman, Hamlet",
//         },
//         "/about": "About page",
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// fakeRequest("/uses")
//   .then((response) => {
//     const id = response.data[0].id;
//     fakeRequest(`/users/${id}`).then((response) => {
//       const postId = response.data.topPostId;
//       fakeRequest(`/posts/${postId}`).then((response) => {
//         console.log(response);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log("Nooo", err);
//   });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "Bilbo" },
//           { id: 5, username: "Esmeralda" },
//         ],
//         "/users/1": {
//           id: 1,
//           username: "Bilbo",
//           upvotes: 360,
//           city: "Lisbon",
//           topPostId: 454321,
//         },
//         "/users/5": {
//           id: 5,
//           username: "Esmeralda",
//           upvotes: 571,
//           city: "Honololu",
//         },
//         "/posts/454321": {
//           id: 454321,
//           title: "Ladies & Gentleman, Hamlet",
//         },
//         "/about": "About page",
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// fakeRequest("/users")
//   .then((response) => {
//     console.log(response);
//     const id = response.data[0].id;
//     return fakeRequest(`/users/${id}`);
//   })
//   .then((response) => {
//     console.log(response);
//     const postId = response.data.topPostId;
//     return fakeRequest(`/posts/${postId}`);
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log("Nooo", err);
//   });

const button = document.querySelector("button");

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(button, 100, 1000)
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .then(() => moveX(button, 100, 1000))
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large`);
  });
