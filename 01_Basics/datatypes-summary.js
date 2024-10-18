// Premitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);

const num = 123
const num2 = 124.3

const isLogIn = false

const temp = null

const bigNum = 2345657658688n

// References (Non Primitive)

// Arrays, Objects, Functions

const heros = ["Iron Man", "Thor", "Hulk"]

myObject = {
    name: "Gautam",
    age: 24,
    gender: "male",
    
}

const myFunction = function() {
    
    console.log("This is an function");
}

// console.log(typeof anotherId);


// *******************************************************************************

// Stack(primitive), Heap(non primitive)

let myname = "Gautam";
let anothername = myname
anothername = "Patil"

console.log(myname);
console.log(anothername);

let obj = {
    email: "abc@gmail.com",
    pass: "abcx",
}

let anotherObj = obj

anotherObj.email = "xyz@gmail.com"

console.log(obj.email);
console.log(anotherObj.email);

