// function to generate random color 

// start 

// stop

const randomColor = function (){
    const hex = '0123456789ABCDEF';

    let color = "#"
    for(let i =0; i< 6; i++){
        color += hex[Math.floor(Math.random() * 16)] 
        // hex[0] → '0'
        // hex[10] → 'A
        // hex[15] → 'F'
    }
    return color;

}

let intervalId;

const startChangingColor = function(){
    const bod = document.querySelector('body')
   // document.body.style.backgroundColor

    intervalId = setInterval(() => {
    bod.style.backgroundColor = randomColor();
}, 1000);

    // setInterval( changebgCOlor  , 1000)

    // function changebgCOlor(){
    //      bod.style.backgroundColor = randomColor()
    // }

}
const stopChangingColor = function(){

    clearInterval(intervalId);
    // flushing out of interval ID
    intervalId = null;

}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor, false)