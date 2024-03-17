// This keyword
const user = {
    name: "Tony",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.name} , Welcome to the dashboard`)
        console.log(this) // gives all current object context
    }
}

// user.welcomeMessage()
// user.name = "Captain"
// user.welcomeMessage()

// console.log(this)

// in browser it refer to the window object

//! function 1
// function chai() {
    // username: "Gautam",
    // console.log(this);
    // console.log(this.username); // cannot refer function 
// }
// chai()

//! Function 2
// const chai = function() {
//     username: "Gautam",
//     console.log(this);
//     console.log(this.username); // cannot refer function
// }
// chai()

//! Arrow function
// const chai = () => {
//     username: "Gautam",
//     console.log(this); // empty
//     console.log(this.username); // cannot refer function
// }
// chai()

// const addTwo = (num1, num2) => { // in curly bracket return used
//     return num1 + num2
// } 

//! Implicit return 
// const addTwo = (num1, num2) => num1 + num2 // return will not used

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Loki"}) // brackets used to use object

console.log(addTwo(5, 7))

