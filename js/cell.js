class cellOfBoard{
    constructor (row,col, freeForWall,freeForWeapon,freeForPlayer){
        this.row = row
        this.col = col
        this.freeForWall = freeForWall
        this.freeForWeapon = freeForWeapon
        this.freeForPlayer = freeForPlayer
        this.weapon = 0
        this.player = 0
    }
    hasWall(){
        return this.hasClass('wall')
    }
    hasWeapon(){
        return this.hasClass('weapon')
        }
    hasPlayer(){
        return this.hasClass('player')
    }
    anaivalableCell(){
        this.freeForWall = false
        this.freeForPlayer = false
        this.freeForWeapon = false
        //this.addClass('wall')
    }
}
