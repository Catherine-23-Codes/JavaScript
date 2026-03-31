// Promise 1

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async tasks are completed!");
    resolve(); //call the method to get the function called
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed!");
});

// Promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 completed!");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved!");
});

// Promise 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "cattt", email: "cat123@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//Promise 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "catherine", password: "123" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

//const userName =  !! throws error
//using then, catch, finally
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected!"));

// console.log(userName);

//Promise 5 using async await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "mnopq" });
    } else {
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//async function getAllUsers() {
// try {
//  const response1 = await fetch("https://jsonplaceholder.typicode.com/users");
//  console.log(response1); to get full op as response
//  const data = response1.json();
// console.log(data);
//} catch (error) {
///  console.log("E:", error);
//}
//}
//getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
