function SetUserName(username){
    this.username = username
    console.log("calles")
}

// class SetUserName {
//     constructor(username) {
//         this.username = username;
//     }
// }

function User(username, email, phone){
    SetUserName.call(this, username)
    this.email = email
    this.phone = phone
}

// class User extends SetUserName {
//     constructor(username, email, phone) {
//         super( username)
//         this.email = email
//         this.phone = phone
//     }
// }

const u = new User("sn", "nghgft@google.com", 1234567888888889)

console.log(u)