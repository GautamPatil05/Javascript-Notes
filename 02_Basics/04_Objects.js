// const tinder = new Object() // singleton

const tinderUser = {}  // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Gitesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "user13@tinder.com",
    // nested object
    userName : {
        userFullName: {
            firstName: "Gitesh",
            lastName: "Patil"
        }
    }
}

// console.log(regularUser.userName)
// console.log(regularUser.userName.userFullName.lastName) 

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = Object.assign({}, obj1, obj2) // {} - target , other are source
const obj3 = {...obj1, ...obj2} // spread
// console.log(obj3);

const users = [
    {
        username: "Gautam",
        pass: "",
    },
    {
        username: "",
        pass: "",
    },
    {
        username: "",
        pass: "",
    },
    {
        username: "",
        pass: "",
    }
]

// console.log(users[0].username);

// console.log(Object.keys(tinderUser)) // returns in form of array
// console.log(Object.values(tinderUser)) 
// console.log(Object.entries(tinderUser)) 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// singleton - classes which can be instantiated once, and can be accessed globally

//! De-Structuring Object

const course = {
    coursename : "os",
    price: 894,
    courseInstructor: "nithin"
}

// course.courseInstructor
const {courseInstructor: teacher} = course // extracted courseInstructor from course
console.log(teacher);

// syntax 
// const {feature: new name if want} = from where to extract

// we most getting data in form of json through api's

/* {
    coursename : "os",
    price: 894,
    courseInstructor: "nithin"
} */