// //! promise 1 --------------
// const promiseOne = new Promise(function(resolve, reject) {
//     // Do as async task
//     // DB calls, cryptography, networks

//     setTimeout(function() {
//         console.log('Async task is complete')
//         resolve() // resolve connects with .then
//     }, 1000)
// })

// promiseOne.then(function() {
//     console.log("Promise Consumed")
// });

// //! promise 2 ----------------
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2")
//         resolve()
//     }, 1000)

// }).then(function() {
//     console.log("task 2 resolve")
// })

// //! promise 3 ----------------
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username: "Gautam", email: "gp@example.com"})
//         // resolve also pass the parameters most of time as object
//     }, 1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })

// //! promise 4 ---------------
// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let error = false
//         if(!error) {
//             resolve({username: "Gautam", password: "12345"})
//         } else {
//             reject("ERROR: Something went wrong")
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username)
// })
// .catch((error) => {
//     console.log(error);
    
// })
// .finally( () => {
//     console.log("The promise is resolve or reject")
// })

// //! promise 5 -----------------
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error) {
//             resolve({username: "javascript", password: "12345"})
//         } else {
//             reject("ERROR: JS went wrong")
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive
//         console.log(response);
//     } catch(error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive();

// //! async await function ---------------
// // await keyword is crucial need to use wherever data take time to fetch

// async function getAllUsers() {
//     try{
//         const response = await fetch("https://api.github.com/users/gautampatil05")
//         const data = await response.json() // string to json take times to convert so we await for it also to get values in console log
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }

// getAllUsers()

//! Doing above task using then catch finally
// This will not required await cause each then work after the last one execute completely 

fetch("https://api.github.com/users/gautampatil05")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
