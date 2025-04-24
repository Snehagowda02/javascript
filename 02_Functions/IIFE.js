// IIFE Immedialtely invoked function expressions


// function Immedialtely executes
// global scope pollution happens sometimes
// remove that we use IIFE
// ()();

(function newf(){
    console.log(`connected`)
})();
//  here semicolon is mandate

// here it works with arrow functions also

(()=>{
    console.log(`connectedarrow`)
})()


// Wrapping it in parentheses: (function newf() { ... })

// This turns the function declaration into a function expression.

// The () at the end: (...)()

// This immediately invokes the function.
