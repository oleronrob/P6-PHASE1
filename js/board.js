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
            $row.attr("id", i);
            let itab = []
            for (let j = 0; j <= this.nbCol - 1; j++) {
                $cell = $('<div class="cell"></div>')
                $cell.row = i
                $cell.col = j
                $cell.attr("id", (i*nbCols + j).toString())
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
            if ($(randomCell()).hasClass('anavailable')) {
                i--
            } else {
                $(randomCell()).addClass('anavailable wall')
            }
        }
    }

}

let Board = new myBoard(nbRows, nbCols)
