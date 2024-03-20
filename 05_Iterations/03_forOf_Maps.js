const array = ["iroman", "hulk", "thor"]

for (const num of array) {
    // console.log(num)
}

const greatings = "Hello to all good morning"

for(const greet of greatings) {
    // console.log(greet);
}

// Maps ------------------------------------------------------------------

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kindom")
map.set("IN", "India") // Map stores only unique values

// console.log(map);

// for (const key of map) {
//     console.log(key)
// } // gives arrays for each key:value pair

for (const [key, value] of map) {
    // console.log(key, ":", value);
} // get separte key and value

const myObj = {

    game1 : 'Assisian Creed',
    game2 : 'Contra IV'
}

// for (const [key, value] of myObj) {
//     console.log(myObj);
// } // Not iterable using this method