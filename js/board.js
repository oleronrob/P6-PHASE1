class myBoard {
    constructor(nbRow, nbCol) {
        this.nbRow = nbRow
        this.nbCol = nbCol
        this.width = ""
        this.height = ""

    }

    draw() {
        let $row, $cell

        for (let i = 0; i <= this.nbRow; i++) {
            $row = $("<div class='row'></div>")
            $row.attr("id", i);
            for (let j = 0; j <= this.nbCol; j++) {
                $cell = $('<div class="cell"></div>')
                $cell.row = i
                $cell.col = j
                $cell.attr("id", i + "-" + j)
                $cell.appendTo($row)
            }
            $row.appendTo("#board")
        }
    }
}
let Board = new myBoard(nbRows, nbCols)
