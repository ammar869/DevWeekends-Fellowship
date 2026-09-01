// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     resolve(123);
// });

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);

      if (getNextData) {
        getNextData();
      }

      resolve("Success");
    }, 5000);
  });
}