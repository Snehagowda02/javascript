// promise   object represents the eventual completion of an asynchronous operation 
// promise create and consume 

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('ASsync task is complete');
        resolve()
    }, 1000)
})

// .then() connects with resolve
// .then() contains a call back
promiseOne.then(function(){
    console.log("Promise consumed");
    
}) 

new Promise(function(resolve, reject){
   setTimeout(function(){
     console.log("async tak 2 ");
      resolve()
   }, 2000)   
}).then(function(){
    console.log("promise 2 complete");
    
})

