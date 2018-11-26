class Player {
    constructor(name, title, row, col, picture, weapon, move) {
        this.name = name
        this.title = title
        this.row = row
        this.col = col
        this.picture = picture
        this.weapon = weapon
        this.action = move



    }
    draw(cellnb) {
        let playerid = cellnb
        console.log(playerid)
        $(playerid[0]).addClass('anavailable player')
        $(playerid[0]).append("<img></img>");
        $(playerid[0]).children().attr("src", this.picture);
        $(playerid[0]).children().addClass(this.title)
        //$(id).arme = this;
        //tabboard[id[1]][id[2]].anaivalableCell()

    }
}


let Player1 = new Player("", "player1", "", "", "./pictures/player1.png", Weapon0, "move")
let Player2 = new Player("", "player2", "", "", "./pictures/player2.png", Weapon0, "move")
let tabplayers = [Player1, Player2]
