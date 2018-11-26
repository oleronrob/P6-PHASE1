class myBoard {
    constructor(nbRow, nbCol) {
        this.nbRow = nbRow
        this.nbCol = nbCol
        this.width = ""
        this.height = ""

    }

    drawCells() {
        let $row, $cell
        for (let i = 0; i <= this.nbRow - 1; i++) {
            $row = $("<div class='row'></div>")
            $row.attr("id", "row" + i);
            let itab = []
            for (let j = 0; j <= this.nbCol - 1; j++) {
                $cell = $('<div class="cell"></div>')
                $cell.row = i
                $cell.col = j
                $cell.attr("id", (i * nbCols + j).toString())
                $cell.appendTo($row)
                itab.push(new cellOfBoard(i, j, true, true, true))
            }
            tabboard[i] = itab
            $row.appendTo("#board")
        }
        resizeCellsOnBoard()
    }
    drawWalls() {
        for (let i = 1; i <= nbWalls; i++) {
            let id = randomCell()
            if ($(id[0]).hasClass('anavailable')) {
                i--
            } else {
                $(id[0]).addClass('anavailable wall')
                //tabboard[id[1]][id[2]].freeForPlayer = false
                //tabboard[id[1]][id[2]].freeForWall = false
                //tabboard[id[1]][id[2]].freeForWeapon = false
                //(tabboard[id[1]][id[2]]).putWallOnCell()
            }
        }
    }
    drawWeapons() {
        for (let i = 1; i <= nbWeapons; i++) {
            let id = randomCell()
            if ($(id[0]).hasClass("anavailable")) {
                i--
            } else {
                tabweapon[i].draw(id[0])
            }
        }
    }
    drawPlayers() {
        for (let i = 0; i <= tabplayers.length-1; i++) {
            let id = randomCell()
            if ($(id[0]).hasClass('anavailable')) {
                console.log(id[0])
                i--
            } else {
                tabplayers[i].draw(id)
            }
        }
       resizeCellsOnBoard()
    }

}

let Board = new myBoard(nbRows, nbCols)
