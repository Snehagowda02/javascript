class Games{
    constructor(game){
        this.game= game
    }
    logGame(){
        console.log(`GAME IS ${this.game}`)
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
console.log(info instanceof Player)