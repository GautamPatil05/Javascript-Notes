const myObj = {
    js: "javascript",
    html: "hyper text markup language",
    cpp: "C++",
    rb: "rubby"
}
// forin loop
for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
} //js is shortcut for javascript

const programming = ['js', 'rb', 'python', 'java']

for(const key in programming) {
    // console.log(`${key}. ${programming[key]}`);
} // keys in array is by default numbers from 0, for in will access that as key

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kindom")
map.set("IN", "India")

for (const key in map) {
//    console.log(key); // map cannot access by using forin
}