// Date

const date = new Date()

// console.log(date); // 2024-02-24T17:06:29.512Z
// console.log(date.toString()); // Sat Feb 24 2024 17:06:29 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString()); // Sat Feb 24 2024
// console.log(date.toLocaleString()); // 2/24/2024, 5:06:29 PM

// let myCreatedDate = new Date(2024, 0, 20)
// let myCreatedDate = new Date(2024, 0, 20, 3, 4)
// let myCreatedDate = new Date("2024-01-22")
let myCreatedDate = new Date("01-22-2024")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)); // seconds

let newDate = new Date()
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDate())
// console.log(newDate.getDay()) 

console.log(`${newDate.getDate()} date`);

newDate.toLocaleString('default', { // toLocaleString is an object
    weekday: "long"
})

