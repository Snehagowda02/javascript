const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault() //preventing the sending to server , default way of sub,itting form
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        res.innerHTML = `please give a valid height ${height}`;

    }else if( weight ==='' || weight <0 || isNaN(weight)){
        res.innerHTML = `please give valid weight ${weight}`;
    }else{
        const bmi = (weight /((height*height)/10000).toFixed(2))
        // toFixed helps in reducing decimal values to 2 
        let msg = "Normal weight"
        if(bmi < 18.6){
            msg= "Under weight";

        }
        else if( bmi > 24.8){
            msg = "over weight"
        }
        res.innerHTML = `bmi is ${bmi} ${msg}`;
        // res.innerHTML = `<span>${bmi}</span>`;
    }
})