let items = [];
const itemsdiv = document.getElementById('items')

function listTodo() {
    itemsdiv.innerHTML = null // making initially null
    for (const [idx, item] of Object.entries(items)) {
        const containerdiv = document.createElement('div')
        const text = document.createElement("p")
        text.style.display = 'inline'
        text.textContent = item
        const deletbut = document.createElement("button")
        deletbut.textContent ="X"
        deletbut.onclick = () => removeTodo(idx) // onclick is a function calling another function
        containerdiv.appendChild(text)
        containerdiv.appendChild(deletbut)
        itemsdiv.appendChild(containerdiv)
        
    }
}


function addTodo() {
    const inputTodo = document.getElementById('inputTodo')
   const value =  inputTodo.value 
    if(!value){
        alert("You cannot add empty item")
        return
    }
    items.push(value)
    listTodo()
    inputTodo.value = ""
}

function removeTodo(idx) {
    // since we are rendering using arrayList , to remove need to remove index from aaray
    items.splice(idx, 1) // 1 is how many elements want to remove
    listTodo()
}


// onload also need to display data
// store in localStorage
// localStorage.setItem(key, value)


