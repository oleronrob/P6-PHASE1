function randomCell() {
    let x = Math.floor((Math.random() * nbRows * nbCols))
    let id = [('#'+ x.toString()), Math.floor(x / nbRows), Math.floor(x % nbCols)]
    return id;
};

// test si une case est libre
function caselibre(unecase) {
    if ($("#" + unecase).hasClass("indisponible")) {
        return false;
    }
    let j = 0;
    for (let i = 0; i <= deplacement.length; i++) {

        if ($("#" + (parseInt(unecase) + deplacement[i]).toString()).hasClass("indisponible") || (parseInt(unecase) + deplacement[i] < 0) || (parseInt(unecase) + deplacement[i] > (nbColonnes * nbLignes - 1))) {
            j++;
        }
        if (i === 0 || i === 1) {
            if (parseInt(parseInt(unecase) / nbColonnes) !== parseInt((parseInt(unecase) + deplacement[i]) / nbColonnes)) { // si on change de lignes on arrête la boucle
                j++;
            }
        }
    }
    if (j > 3) {
        return false;
    }
    return true;
}

function cellFreeForWall(cell) {

    return $(cell).hasClass("wall");
}


function resizeCellsOnBoard () {
    let maxcellsize = ($(window).outerHeight() - $('header').outerHeight() - 200) / nbRows
    $('.cell').css({
        'max-height': maxcellsize + "px",
        'max-width': maxcellsize + "px"
    })
    let maxboardsize = maxcellsize * nbCols
    $('#board').css({
        'max-width': maxboardsize + "px"
    })
 $(".cell").css("width", $(".row").css("height"));
    $(".cell").css("height", $(".row").css("height"));

    $(".cell img, #player1, #player2").css({
        "width": $(".cell").css("width"),
        "height": $(".cell").css("height")

    })

}
