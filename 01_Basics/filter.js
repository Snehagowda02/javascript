const num = [ 1, 2, 3, 4, 5, 6 , 7];

// const newnums = num.filter( (n) => n > 4)
// console.log(newnums)

const newnumber = [];

num.forEach((n) => {
    if (n>4){
        newnumber.push(n)
    }
})
console.log(newnumber);

const books = [
    {title: 'Book One ', genre: 'Fiction', publish: 26226
    },
    
]

