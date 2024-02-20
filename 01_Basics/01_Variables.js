const accountID = 1234 
let accountEmail = "gautam@gmail.com"
var accountPass = "gautam123" // Not used now days
accountCity = "Shirpur" // Not declare this type
let accountState; // undefined

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

// accountID = 12 // Cannot change constant value
console.log(accountID);

accountEmail = "patil@gmail.com"
accountPass = "patil123"
accountCity = "Dhule"

console.table([accountID, accountEmail, accountPass, accountCity, accountState])