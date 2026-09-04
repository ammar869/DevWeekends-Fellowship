// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     resolve(123);
// });


// -------------------promise chaining-------------------
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);

//       if (getNextData) {
//         getNextData();
//       }

//       resolve("Success");
//     }, 5000);
//   });
// }

//                  chatgpt example check

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Data received");
//       resolve();
//     }, 3000);
//   });
// }

// async function myFunction() {
//   console.log("1. Start");

//   await getData();

//   console.log("3. Finished");
// }

// myFunction();

// console.log("2. Other code");



//  ----------------------DIDI ----------------------------


function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getWeatherData() {
  await api();

  await getData(1);
  await getData(2);
  await getData(3);
}

getWeatherData();