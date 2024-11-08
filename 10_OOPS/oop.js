const user = {
    username: "Gautam",
    password: "abcd",
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, password, signedIn) {
    this.username = username
    this.password = password
    this.signedIn =signedIn

    this.greetings=  function() {
        console.log(`welcome ${this.username}`);
        
    }
    return this
} 

const userOne = new User("Gotham", "city8", true);
const userTwo = new User("UserNO", "city9", false); 
//? overwrites the userOne data if 'new' keyword is not used
//? new keyword call the constructor
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor) // reference about the function it self




