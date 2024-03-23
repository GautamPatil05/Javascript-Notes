const programming = ['js', 'rb', 'python', 'java', 'html']

// programming.forEach(function (item) {
//     console.log(item);
// })

// programming.forEach( (item) => { console.log(item); })

function print(item) {
    console.log(item);
}
// programming.forEach(print)


programming.forEach( (item, index, arr)=> { // has more parameters ie. index, arr
    // console.log(item, index, arr); 
})

const myProg = [

    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }, 
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myProg.forEach( (item)=> {
    console.log(item.languageName);
})