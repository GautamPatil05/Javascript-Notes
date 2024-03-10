// singleton
// Object.create

//object literals 

const mySym = Symbol("key1")

const JSuser = {

    name: "Gautam",
    "full name": "Gautam Madhukar Patil",
    age: 24,
    [mySym]: "mykey1", // syntax of declaring symbol
    location: "Shirpur",
    email: "gautam@tata.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// ways to access the data of objects

// console.log(JSuser.email); // way 1 to access object
// console.log(JSuser["email"]); way 2 to access object (no dot here)
// console.log(JSuser["full name"]); // cannot access by 'JSuser.full name'

// console.log(JSuser[mySym]); // printing symbol value (no double quote here)
// console.log(typeof JSuser[mySym]); // printing symbol value

JSuser.email = "gautam@mahendra.com"
// console.log(JSuser["email"]);

// Object.freeze(JSuser); // freezes the value of object, not changed if try to change
JSuser.email = "patil@tata.com"
// console.log(JSuser);

// function
JSuser.greeting = function() {
    console.log("Hello JS Users");
}

JSuser.greetingTwo = function() {
    console.log(`Hello JS Users, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());