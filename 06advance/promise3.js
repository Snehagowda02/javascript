const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        error = true
        if(!error){
            resolve({user: "sneha", email: "snrlnkj"})
        }else{
            reject("ERROR Something went WRONG")
        }
    }, 1000)
})
// .then , .catch consumes the promise
// so instead of that we are using async await

// async await , wait till it completes fetching the data  from that api 

// async function consumePromiseFive(){
//    const response = await promise1
//    console.log(response)
// }
// async await can't handle error directly
// So we need to wrap with try catch block

async function consumePromiseFive(){
   try{
    const response = await promise1
    console.log(response)
   }catch(error){
    console.log(error)
   }
}

consumePromiseFive()