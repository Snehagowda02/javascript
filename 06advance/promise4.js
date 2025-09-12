//https://jsonplaceholder.typicode.com/users/

async function getAllUsers() {
    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/users/")
  //  console.log(res)// this returns status: 200, statusText : 'OK
    // we need to check the type of response
    // console.log(res.json())  // this is giving promise pending
    const data = await res.json()
    console.log(data)
    }catch(error){
        console.log("something went wrong :", error)
    }
}
// getAllUsers()


// example 2

fetch('https://jsonplaceholder.typicode.com/users/')
.then((response) =>  response.json())  // {} need to mention return
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)})