// ---------------- global declarations -----------------------
let gametitle = "OC WAR GAME"
let nbRows = 10,
    nbCols = 10
let nbWeapons = 4


// class game
class Game {
    constructor() {
        this.width = window.outerWidth
        this.height = window.outerHeight

    }
    init() {
        $("body").empty()
        let $header = $('<header><div id="title"><h1></h1></div></header>')
        let $main = $('<main></main>')
        let $game = $('<div id="game" class="container"></div>')
        let $board = $('<div id="board"></div>')
        let $infoplayer = $('<div id="infoplayer1" class="infoplayer"></div><div id="infoplayer2" class="infoplayer"></div>')
        let $footer = $('<footer><div id="instruction"><h1>------ INSTRUCTIONS -------</h1></div></footer>')
        $header.appendTo($("body"))
        $("header h1").text(gametitle)
        $infoplayer.appendTo($game)
        $board.appendTo($game)
        $game.appendTo($main)
        $main.appendTo($("body"))
        $footer.appendTo($("body"))
    }
}

let myGame = new Game()
