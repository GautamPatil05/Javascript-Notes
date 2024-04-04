const programming = ['js', 'rb', 'python', 'java', 'html']

// const language = programming.forEach( (item) => {
//     // console.log(item)
//     return item;
// } )
// console.log(language); // will print undefined

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// MTD 1
// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);

// MTD 2
// const newNums = myNums.filter((num) => { // while using currly brackets we need use return

//     return num > 4;
// })
// console.log(newNums)

// Using ForEach
const newNum2 = []

myNums.forEach( (item) => {
    if(item > 4) {
        newNum2.push(item)
    } 
})
console.log(newNum2);