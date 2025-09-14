class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    greet(){
        console.log(`the user details are ${this.name} and email ${this.email}`)
    }
}

const u = new User("sneha", "mb@gmail.com")
u.greet()

//BTS of fnew keyword

/*

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/