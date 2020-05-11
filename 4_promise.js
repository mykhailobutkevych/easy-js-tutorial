const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparing data...");

    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };

    resolve(backendData);
  });
});

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
      //   reject({type: '500', info: 'bad request'})
    }, 2000);
  });
})
  .then((clientData) => {
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => {
    console.log("Modified", data);
  })
  .catch((err) => console.log("Error: ", err))
  .finally(() => console.log("Finally"));

//==================

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

Promise.race1([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
});
