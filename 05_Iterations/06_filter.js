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
// const newNums = myNums.filter((num) => { // while using curly brackets we need use return

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
// console.log(newNum2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => bk.genre === "Fiction")
  console.log(userBooks);

const userBooks2 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks2);