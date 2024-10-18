let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score)
console.log(typeof valueNumber)
console.log(valueNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let bool = 1 // Number
let boolcov = Boolean (bool)
console.log(boolcov);

let num = 33
let strNum = String(num)
console.log(strNum);
console.log(typeof strNum);

//************************************** Operations **************************************** */

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2/2)
// console.log(2*2)
// console.log(2**2)
// console.log(2%2)

// let str1 = "Gautam"
// let str2 = " Patil"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 1 + 2)
// console.log(1 + 2 + "2") // make operation of two at time (string has higher preference)

// console.log(+true)
// console.log(+false)

let count = 100
count++
console.log(count);