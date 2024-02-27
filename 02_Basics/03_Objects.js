// singleton
// Object.create

// object literals

const JSuser = {

    name: "Gautam",
    "full name": "Gautam Madhukar Patil",
    age: 24,
    location: "Shirpur",
    email: "gautam@tata.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// ways to access the data of objects

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser["full name"]); // cannot access by 'JSuser.full name'
