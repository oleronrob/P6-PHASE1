class cellOfBoard{
    constructor (row,col, freeForWall,freeForWeapon,freeForPlayer){
        this.row = row
        this.col = col
        this.freeForWall = freeForWall
        this.freeForWeapon = freeForWeapon
        this.freeForPlayer = freeForPlayer
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
    putWallOnCell(){
        this.freeForWall = false
        this.freeForPlayer = false
        this.freeForWeapon = false
        this.addClass('wall')
    }
}
