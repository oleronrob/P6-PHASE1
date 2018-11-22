class myBoard {
    constructor(nbRow, nbCol) {
        this.nbRow = nbRow
        this.nbCol = nbCol
        this.width = ""
        this.height = ""

    }

    draw() {
        let $row, $cell

        for (let i = 0; i <= this.nbRow - 1; i++) {
            $row = $("<div class='row'></div>")
            $row.attr("id", i);
            for (let j = 0; j <= this.nbCol - 1; j++) {
                $cell = $('<div class="cell"></div>')
                $cell.row = i
                $cell.col = j
                $cell.attr("id", i + "-" + j)
                $cell.appendTo($row)
            }
            $row.appendTo("#board")
        }

        let resizecellsonboard = function () {
            $(".cell").css("height", $(".cell").css("width"));
            $(".cell img, #player1, #player2").css({
                "width": $(".cell").css("width"),
                "height": $(".cell").css("height")
            })
        }
        resizecellsonboard()
    }
}

let Board = new myBoard(nbRows, nbCols)

