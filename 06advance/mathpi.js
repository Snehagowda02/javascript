const descipt = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descipt)
// Object.defineProperty(Math,"PI", {
//       writable: true
// })

const games = {
    name: 'cricket',
    players: 12,
    keeper: 1,
    play: function(){
        console.log("Player is unavailable")
    }
}
console.log(Object.getOwnPropertyDescriptor(games, "name"))
Object.defineProperty(games , "name",{
      writable: false,
      enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(games, "name"))

for (let [key, value] of Object.entries(games)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`)
    }

}
