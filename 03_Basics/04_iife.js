//? Immediately Invoked Function Expressions (IIFE)

// 1. Used when we want to immediately execute the function
// 2. Used to avoid the noise created in global variable

// syntax - ()()

//! Named IIFE
(function chai() {
    console.log(`DB Connected`);
})(); // semi column must to start second iife function 

//! Un-Named IIFe
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("gautam")

// consider brackets same as functions