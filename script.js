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

var Qdoce1 = 0
var Doce1 = document.getElementById("quantidadeDoce1")

var Qdoce2 = 0
var Doce2 = document.getElementById("quantidadeDoce2")

var Qmilho = 0
var Milho = document.getElementById("quantidadeMilho")

var Qbrinquedo = 0
var Brinquedo = document.getElementById("quantidadeBrinquedo")


function Maagua() {
    Qagua++
    Agua.innerText = Qagua
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 3
}
function Meagua() {
    if (Qagua <= 0) {
        Qagua = 0
    }
    else {
        Qagua--
        Agua.innerText = Qagua
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 3
    }
}

function Marefri() {
    QRefri++
    Coca.innerText = QRefri
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 5
}
function Merefri() {
    if (QRefri <= 0) {
        QRefri = 0
    }
    else {
        QRefri--
        Coca.innerText = QRefri
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 5
    }
}

function Macerveja() {
    Qcerveja++
    Cerveja.innerText = Qcerveja
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 5
}
function Mecerveja() {
    if (Qcerveja <= 0) {
        Qcerveja = 0
    }
    else {
        Qcerveja--
        Cerveja.innerText = Qcerveja
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 5
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
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 8
}
function Mepastel() {
    if (Qpastel <= 0) {
        Qpastel = 0
    }
    else {
        Qpastel--
        Pastel.innerText = Qpastel
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 8
    }
}

function Madoce1() {
    Qdoce1++
    Doce1.innerText = Qdoce1
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 8
}
function Medoce1() {
    if (Qdoce1 <= 0) {
        Qdoce1 = 0
    }
    else {
        Qdoce1--
        Doce1.innerText = Qdoce1
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 8
    }
}

function Madoce2() {
    Qdoce2++
    Doce2.innerText = Qdoce2
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 12
}
function Medoce2() {
    if (Qdoce2 <= 0) {
        Qdoce2 = 0
    }
    else {
        Qdoce2--
        Doce2.innerText = Qdoce2
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 12
    }
}

function Mamilho() {
    Qmilho++
    Milho.innerText = Qmilho
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 10
}
function Memilho() {
    if (Qmilho <= 0) {
        Qmilho = 0
    }
    else {
        Qmilho--
        Milho.innerText = Qmilho
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 10
    }
}

function Mabrinquedo() {
    Qbrinquedo++
    Brinquedo.innerText = Qbrinquedo
    Valortotal.innerText = parseFloat(Valortotal.innerText) + 20
}
function Mebrinquedo() {
    if (Qbrinquedo <= 0) {
        Qbrinquedo = 0
    }
    else {
        Qbrinquedo--
        Brinquedo.innerText = Qbrinquedo
        Valortotal.innerText = parseFloat(Valortotal.innerText) - 20
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

    Qdoce1 = 0
    Doce1.innerText = 0

    Qdoce2 = 0
    Doce2.innerText = 0

    Qmilho = 0
    Milho.innerText = 0

    Qbrinquedo = 0
    Brinquedo.innerText = 0


}

