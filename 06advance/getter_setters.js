class User{
    constructor(email, pass){
        this._email = email
        this.pass = pass
    }

    //these getter and setter overrides existing value
    //without these also we'll get value , like pass
    get email(){
        return this._email.toUpperCase()
    }
    set email(email){
        this._email = email
    }
}

const sne = new User("H@2002gmail", 123434)
console.log(sne.email)
console.log(sne._email)
console.log(sne.pass)