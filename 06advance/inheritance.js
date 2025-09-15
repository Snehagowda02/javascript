class Games{
    constructor(game){
        this.game= game
    }
    logGame(){
        console.log(`GAME IS ${this.game}`)
    }

    static JerseyNo(){
        return 18
    }
   
}

class Player extends Games{
    constructor(game, PAge, Pnmae){
        super(game)
        this.PAge= PAge
        this.Pnmae = Pnmae

    }
    Tournament(){
        console.log(`Player ${this.Pnmae} is playing the game ${this.game}`)
    }
}

const info = new Player("Cricket", "40", "Virat")
console.log(info)
info.Tournament()
info.logGame()
console.log(info instanceof Player) // true
console.log(info instanceof Games) // true

//console.log(info.JerseyNo())
// If we define the function as static in Class,
//  then that function will not be accessable to its Objects as well