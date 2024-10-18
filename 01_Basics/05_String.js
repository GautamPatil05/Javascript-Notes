const myName = "Gautam"
const repoCount = 8

// console.log(myName + repoCount + " value");

//! mostly used
// console.log(`my name is ${myName} and repo count is ${repoCount}`); 

const newName = new String("Gautam-madhukar-patil");

// console.log(newName[1]);
// console.log(newName.__proto__);

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(3))
// console.log(newName.indexOf('m'))

// const subString = newName.substring(0,4)
// console.log(subString);

// const anotherString = newName.slice(-5, 3) // can be used negative values
// console.log(anotherString);

// const newStringOne = "   patil   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove empty spaces

const url = "https//:gautam.com/gautam%20patil"
console.log(url.replace('%20', '_'));

console.log(url.includes("gg"))

console.log(newName.split('-'));

// refer console and mdn to read the function of string 