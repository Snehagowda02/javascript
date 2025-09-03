const cart = [
    {
        name: "gksg",
        price: 12345,
        publish: 1888
    }, {
        name: "jfnisuhg",
        price: 5678,
        publish:2021
    }
]

const reducetotalbill = cart.reduce( (acc, cart) => acc+ cart.price, 0)
console.log(reducetotalbill)

const nums = [1,2,3,4,5]
let newnums = nums.map((nums) => nums * 10 )
                    .map( nums => nums+1)
                    .filter ( nums => nums>35)

console.groupCollapsed(newnums)