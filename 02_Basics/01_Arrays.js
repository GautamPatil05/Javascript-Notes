// array

const myArr = [1, 4, 3, 7 ,2]
const heros = ["Thor", "IronMan", "Hulk"]
const myArr2 = new Array(2, 4, 6)

// console.log(myArr[1]);

// Array Methods

// myArr.push(5)
// myArr.pop()

// myArr.unshift(9) // not optimized
// myArr.shift()

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(7))

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice splice
// slice
console.log("A: ", myArr)
const myn1 = myArr.slice(1, 3) // not includes 3rd index
console.log(myn1);
console.log("B: ", myArr);

// splice
console.log("C: ", myArr)
const myn2 = myArr.splice(1, 3) /* includes 3rd index also manupulate original array(i.e remove 
the indexed element from original array) */
console.log(myn2);
console.log("D: ", myArr);
