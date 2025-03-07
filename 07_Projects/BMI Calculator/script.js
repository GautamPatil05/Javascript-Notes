const form = document.querySelector('form')

// Below line will return 0 as the submit event not occur
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    results.innerHTML = `Hello`

    if(height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        // show result
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`
    }
})