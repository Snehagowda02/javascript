// function newf(){
//     console.log("function")

// }

// newf()

// function loginUserMessage(username){
//     if(!username){
//         console.log("please enter username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Sneha"))

// function calculatesum(...num){
//     return num
// }

const user ={
    username:"sneha",
    "id": 43325    // if ids given here in log it gives undefined
}
function handleuser(objuser){
    console.log(`user ${objuser.username} ID ${objuser.id}`)
}
handleuser(user)



// truthhy values

//  "0", 'false', [] , function(){}, {} , " "

// false values
//  0 , 0e , false, null, undefined , Nan 
//  Nullish coaleasind operator (??)

val = null ?? 10;
val1 = 5 ?? 10;
console.log("kdhds", val , "hjdguy", val1);

// === not just checks CSSMathValue, but its type also