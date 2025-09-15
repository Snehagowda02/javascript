function outer(){
    let name = "SNeha"
    function inner(){
        console.log("name is", name)
    }
    inner()
}
outer()

// inner function have access to outer function / parent function variables ---- 
// this is lexical scopes


//example 1 -- closure with lexical scope 
function outer2(){
    const name = "NIVISHA"
    function inner2(){
        console.log("outer2 name is ", name)
    }
    return inner2 // returning whole function
    // along with whole lexical scope of function
    //  return inner2(); // invoke inner2 immediately
}


// example 2
function outer3(){
    let count =0;
    return function inner(){
        count ++;
        console.log(count)
    }
}

const c = outer() // this will not work , because outer() is not returning anything
const counter = outer3()
counter()
counter()

const n = outer2()