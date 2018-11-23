class InfoPlayer {
    constructor(player) {
        this.player = player
    }

    init() {
        let $player = $('<h1 id=' + this.player.name + '>' + this.player.name + '</h1>')
        let $pictureplayer = $('<img src=' + this.player.picture + '>')
        let id = "weaponOf" + this.player.name
        let $pictureweapon = $('<div><h2>Weapon</h2><img id=' + id + ' src=' + this.player.weapon.picture + '></div>')
        id = "life" + this.player.name
        let $life = $('<div>Life<div><meter id=' + id + ' value="60" min="0" max="100" low="40">30</meter></div></div>')
        let $action = $('<div class="action"><button class="fight">Fight</button><button class="defend">Defend</button></div>')
        let thisinfoplayer = $('#' + ('info' + this.player.title))
        $player.appendTo(thisinfoplayer)
        $pictureplayer.appendTo(thisinfoplayer)
        $pictureweapon.appendTo(thisinfoplayer)
        $life.appendTo(thisinfoplayer)
        $action.appendTo(thisinfoplayer)
    }
}
let InfoPlayer1 = new InfoPlayer(Player1)
let InfoPlayer2 = new InfoPlayer(Player2)
