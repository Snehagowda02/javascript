// // const user ={
// //     names: "sneha",
// //     id: 868374,
// // msg: function(){
// //     console.log(`user is ${this.names} and id is ${this.id}`)
// //     console.log()

// // }
// // }



// // user.msg()
// // user.names= "jhgf"
// // user.msg()
// //  in browser the global object is window object
// console.log(this) // this gives empty object

// console.log(this) // gives window in browser


// // function newf(){
// //     console.log(this)
// //     // in functio0n we wonm't use this
// // }
// // newf()

// const newf2 = function(){
//     console.log(this)
//     // it won;t work here also
// }
// newf2()

// //arrow function => like anonymouse function in spring boot

// const fun = () => {
//     console.log(this);
// }
// fun()


// const fun2 = (num1, num2) => {
//     return num1+ num2;

// }
// console.log(fun2(2,5))
// //  OR
// const fun3 = (num1 , num2 ) => num1+num2
// console.log(fun3(2,8))

// if we use curly braces , we need to use retunr statement
//  in () here no need to use retun statememnt

const fun4 = (num1, num2) => ({username: "sneha"})
console.log(fun4(4, 5))