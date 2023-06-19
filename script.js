var Valortotal = document.getElementById("ValorTotal")

var Qagua = 0
var Agua = document.getElementById("quantidadeAgua")

var QRefri = 0
var Coca = document.getElementById("quantidadeRefri")

var Qcerveja = 0
var Cerveja = document.getElementById("quantidadeCerveja")

var Qvinho = 0
var Vinho = document.getElementById("quantidadeVinho")

var Qquentao = 0
var Quentao = document.getElementById("quantidadeQuentao")

var Qbatata = 0
var Batata = document.getElementById("quantidadeBatata")

var Qhotdog = 0
var Hotdog = document.getElementById("quantidadeHotdog")

var Qpastel = 0
var Pastel = document.getElementById("quantidadePastel")

function Maagua() {
    Qagua++
    Agua.innerText = Qagua
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 5
}
function Meagua() {
    if (Qagua <= 0) {
        Qagua = 0
    }
    else {
        Qagua--
        Agua.innerText = Qagua
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 5
    }
}

function Marefri() {
    QRefri++
    Coca.innerText = QRefri
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 8
}
function Merefri() {
    if (QRefri <= 0) {
        QRefri = 0
    }
    else {
        QRefri--
        Coca.innerText = QRefri
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 8
    }
}

function Macerveja() {
    Qcerveja++
    Cerveja.innerText = Qcerveja
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 8
}
function Mecerveja() {
    if (Qcerveja <= 0) {
        Qcerveja = 0
    }
    else {
        Qcerveja--
        Cerveja.innerText = Qcerveja
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 8
    }
}

function Mavinho() {
    Qvinho++
    Vinho.innerText = Qvinho
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 4
}
function Mevinho() {
    if (Qvinho <= 0) {
        Qvinho = 0
    }
    else {
        Qvinho--
        Vinho.innerText = Qvinho
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 4
    }
}

function Maquentao() {
    Qquentao++
    Quentao.innerText = Qquentao
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 4
}
function Mequentao() {
    if (Qquentao <= 0) {
        Qquentao = 0
    }
    else {
        Qquentao--
        Quentao.innerText = Qquentao
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 4
    }
}

function Mabatata() {
    Qbatata++
    Batata.innerText = Qbatata
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 5
}
function Mebatata() {
    if (Qbatata <= 0) {
        Qbatata = 0
    }
    else {
        Qbatata--
        Batata.innerText = Qbatata
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 5
    }
}

function Mahotdog() {
    Qhotdog++
    Hotdog.innerText = Qhotdog
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 7
}
function Mehotdog() {
    if (Qhotdog <= 0) {
        Qhotdog = 0
    }
    else {
        Qhotdog--
        Hotdog.innerText = Qhotdog
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 7
    }
}

function Mapastel() {
    Qpastel++
    Pastel.innerText = Qpastel
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 7
}
function Mepastel() {
    if (Qpastel <= 0) {
        Qpastel = 0
    }
    else {
        Qpastel--
        Pastel.innerText = Qpastel
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 7
    }
}


function DelAll() {
    Valortotal.innerText = 0
    Qagua = 0
    Agua.innerText = 0

    QRefri = 0
    Coca.innerText = 0

    Qcerveja = 0
    Cerveja.innerText = 0

    Qvinho = 0
    Vinho.innerText = 0

    Qquentao = 0
    Quentao.innerText = 0

    Qbatata = 0
    Batata.innerText = 0

    Qhotdog = 0
    Hotdog.innerText = 0

    Qpastel = 0
    Pastel.innerText = 0

}


