const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user:"sneha", email:"sdfghj"})
    }, 1000)

}).then(function(userobjl){
    console.log(userobjl);
    console.log(userobjl.user, userobjl.email);
    

    
})

const promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        error = false
        if(!error){
            resolve({user: "js", email: "ghjkl"})
        }else{
            reject('ERROR')
        }
    } ,1000)
})
const username = promise2.then(function(userobj){
    console.log(userobj);
    return userobj.user;
    
}).then(function(user){
    console.log(user)
}).catch(function(error){
    console.log(error)})


