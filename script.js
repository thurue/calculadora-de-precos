var Valortotal = document.getElementById("ValorTotal")

var QRefri = 0
var Coca = document.getElementById("quantidadeRefri")

var Qquentao

function Marefri() {
    QRefri++
    Coca.innerText = QRefri
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 6
}
function Merefri() {
    if (QRefri <= 0) {
        QRefri = 0
    }
    else {
        QRefri--
        Coca.innerText = QRefri
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 6
    }
}

function DelAll(){
    Valortotal.innerText = 0
    Coca.innerText = 0
    QRefri = 0 

    
}


