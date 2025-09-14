String.prototype.truelength = function(){
    console.log(this)
    console.log(this.trim().length)
}

"sneha                ".truelength()

//Array
let myHeros = ["thor", "spiderman"]

//Object
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ObjLog = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.ArrayLog = function(){
    console.log(`Hitesh says hello`);
}

heroPower.ObjLog()
myHeros.ObjLog() // Array is an objrct, At the End everthing is obj
myHeros.ArrayLog()
// heroPower.ArrayLog()