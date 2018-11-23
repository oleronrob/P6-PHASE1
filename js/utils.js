function caseAleatoire() {

    return (Math.floor((Math.random() * nbLignes * nbColonnes))).toString();
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
    let maxcellsize = ($(window).outerHeight() - $('header').outerHeight() - 50) / nbRows
    $('.cell').css({
        'max-height': maxcellsize + "px",
        'max-width': maxcellsize + "px"
    })
    let maxboardsize = maxcellsize * nbCols
    $('#board').css({
        'max-width': maxboardsize + "px"
    })

    $(".cell").css("height", $(".cell").css("width"));
    $(".cell img, #player1, #player2").css({
        "width": $(".cell").css("width"),
        "height": $(".cell").css("height")

    })

}
