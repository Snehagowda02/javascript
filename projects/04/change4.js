let genval = parseInt(Math.random()*100 + 1)

//values to get 
const submit = document.querySelector('#subt')
const guess = document.querySelector('#guessField')
// const form = document.querySelector('form')   addEventListener('submit) only for form

// values to push to UI
const previousGuesses = document.querySelector('.guesses')
const remainAttempts = document.querySelector('.lastResult')
const displaymsg= document.querySelector('.lowOrHigh')

// to start over all pushed values should be null take taking its whole div class
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = [] // to store used entered vlaues
let attempts = 10;
let playgame = true;

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const userval = parseInt(guess.value);
       validUserVal(userval)
    })
}

function validUserVal(userval){
    // validating like if the val is NaN or < 1, or > 100
    if(isNaN(userval)){
        alert('enter a valid number ${userval}')
    }else if(userval< 0){
        alert('enter value more than 0')
    }else if(userval > 100){
        alert('enter value greter than 100')
    }else{
        prevGuess.push(userval)
        if(attempts === 1){
            displayguess(userval)
            displaymesg(`Game Over, Random number was ${genval}`)
            endgame()
        }
        else{
            displayguess(userval)
            compareUserGenVal(userval)
        }
    }
}

function compareUserGenVal(userval){
    // this to compare with generated num and send msg acc like low, high, correct
    if(userval === genval){
        displaymesg(`Hurry number was correct ${userval}`)
        endgame()
    }else if(userval< genval){
        displaymesg('entered number is low')
      
    }else{
        displaymesg('entered number is high')
      
    }
}

function displayguess(userval){
    // make input box as empty
    // displays user previous array
    guess.value = ''
    previousGuesses.innerHTML += `${userval}, ` //push 
    attempts--;
    remainAttempts.innerHTML = `${attempts}`

}

function displaymesg(msg){
    // interact with DOM 
    displaymsg.innerHTML = `<h2> ${msg} </span>`
}

function endgame(){
    // clear all the fields
    guess.value=''
    guess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id ="newGame"> Start Over </h2>'
    startOver.appendChild(p)
    playgame = false;
    newGame()

}
function newGame()
{
    const newgame = document.querySelector('#newGame')
    newgame.addEventListener('click', function(e){
    genval = parseInt(Math.random() *100+1)
    prevGuess = []
    attempts = 10
    previousGuesses.innerHTML = ''
    remainAttempts.innerHTML =` ${attempts}`
    displaymsg.innerHTML = ''
   
    guess.removeAttribute('disabled')
    startOver.removeChild(p)
     playgame = true;

    })

}



















// // guessing number game
// // what need yo keep track

// // user submitted value compare with random number generated

// // attempts keep track 10

// // low Or high to actual value
// // after 10 failed attempts -- game start over

// // generate a vlue
// const genval = parseInt(Math.random()*100)
// const userSumittedVal = pareseInt(document.getElementById('guessNum').value)
// const sub = document.getElementById('submit')

// sub.addEventListener('submit', function(e){
//     attempts()
// })


// function a(genval, userval){
//     if(genval === userval){
//         console.log('guess correct')
//         // need to the value back in result
//     }
// }
// a(genval,userSumittedVal)

// let playgame = true;
// let count = 1;

// function attempts(count){
//     if(count < 11){

//         count--;
//     }
//     else playgame = false;
// }

