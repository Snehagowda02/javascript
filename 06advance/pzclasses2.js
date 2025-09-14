//object
const user = {
    username: "sneha",
    email: "dfghjk",

    getUserdetail : function(){
        console.log("got details of user")
        return this.email
    }
}

console.log(user.username)
console.log(user.getUserdetail())
console.log(this) // gives global context . here it is empty

//----------------------------------------------------------
class p {
    constructor(name){
        this.name = name
    }

    nameofUser = function(){
        console.log(this.name)
    }
}

const p1 = new  p("js")
const p2 = new p("ai")
p1.nameofUser()
p2.nameofUser()
//---------------------------------------------------
// why class needed to reuse code -- helps in creating new object instance
// function example

function User(username, email, isloggedIn){
    this.username = username
    this.email = email
    this.isloggedIn = isloggedIn;
    //return this;
}
const userone = User("coffe", "ckm", true)
console.log(userone)
const usertwo = User("pepper", "hsn", false)
console.log(userone) // two is being printed here- overridding happened

const useron = new User("coffe", "ckm", true)
console.log(useron)
const usertw= new User("pepper", "hsn", false)
console.log(useron) // new keyword helps in creating new instance so no overrinding
console.log(usertw) // in new keyword -- no need to write return this , works like that only