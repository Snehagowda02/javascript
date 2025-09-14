class person{
    constructor(name){
        this.name = name
    }

    greet(){
        console.log(`HI welcome ${this.name}`)

    }
}
const p = new person("snrha")


// behind the scene

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const p2 = new Person("Srush");
p2.greet();


