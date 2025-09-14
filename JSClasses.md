# JavaScript and classes

js have classes 

They are essentially syntactic sugar over the existing prototype-based inheritance system

That means under the hood, a class in JavaScript is still just a function with a prototype.

```javascript
class person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`HI welcome ${this.name}`)
    }
}
const p = new person("snrha")
p.greet()
```