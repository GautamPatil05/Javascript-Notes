const marvel_heros = ["IronMan", "Thor", "Hulk"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // passes array as a single element in array
// console.log(marvel_heros[3][1]) // accessing 'Flash'

const all_heros = marvel_heros.concat(dc_heros);

// console.log(marvel_heros); 
// console.log(all_heros); // creates new array

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operation
// console.log(all_new_heros);

const another_array = [1, 2, 4, [3, 6, 5], 7, [8], 9, [10, 15], 11, 12] 
const real_another_array = another_array.flat(Infinity) // depth should be mention
// console.log(real_another_array);

// console.log(Array.isArray("IronMan"));
// console.log(Array.from("IronMan"));
// console.log(Array.from({name : "Gautam"})) // gives empty array unable to convert, keys or values need to be given for conversion

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

