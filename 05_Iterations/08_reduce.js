const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function(acc, currVal) {

//     console.log(`acc : ${acc} & currVal : ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 6599
    }
]

const price = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(`Total price of Cart : ${price}`);