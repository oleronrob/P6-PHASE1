let nbRow = 10, nbCol=10;



class board {
    constructor (nbRow,nbCol){
        this.nbRow = nbRow
        this.nbCol = nbCol
        this.width = ""
        this.height = ""

    }

    draw(){
        let $row= $("<div class='row'></div>")
        let $cell= $("<div class='cell'></div>")
        for (let i = 0 ; i<=this.nbRow; i++){
            $row.attr("id",i);

            for(let j = 0 ; j<=this.nbCol; j++){

                $cell.row=i
                $cell.col=j
                $cell.attr("id", i+"-"+j)
                $cell.appendTo($row)


            }
        }$row.appendTo("#board")
    }

}
