var t = document.getElementById("tabuleiro");
function iniciaJogo() {
    transportes = ["C@RRO", "M$TO", "TR%M", "METR&", "BIC#CLETA", "CAMINH*O", "BAR¨O"];
    perguntas = ["É um meio de transporte sob quatro rodas.",
                 "É um meio de transporte sob duas rodas.",
                 "É um meio de transporte com vários vagões ligados entre si e pode transportar pessoas ou cargas.",
                 "É um meio de transporte terrestre que passa por túneis subterrâneos ou por viadutos e realiza a parada em estações designadas.",
                 "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
                 "É um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
                 "Meio de transporte aquático que tem vela, começa com a letra B e tem cinco letras."
                ]
    primeiroclique = false;
    data = {};
    for (var i = 0; i < t.rows.length; i++) {
        t.rows[i].id = "linha " + i;
        t.rows[i].dataset.index = i;
        for (var j = 0; j < t.rows[i].cells.length; j++) {
            let charcode = Math.round(65 + Math.random() * 25)
            t.rows[i].cells[j].classList = [];
            t.rows[i].cells[j].dataset.encontrada = "false";
            t.rows[i].cells[j].id = "coluna " + j;
            t.rows[i].cells[j].dataset.index = j;
            t.rows[i].cells[j].textContent = String.fromCharCode(charcode)
            t.rows[i].cells[j].addEventListener("click", clique);
        }
    }
    adicionarPalavras(t, transportes)
    adiconarPerguntas(perguntas)
}

function adicionarPalavras(tabuleiro, array) {
    for (var p = 0; p < array.length; p++) {
        let letra = array[p].split("")
        var k = parseInt((p + 1) + Math.random() * 1);
        var m = parseInt((p + 2) + Math.random() * 12);
        if ((letra.length + m) < 22) {
            letra.map((a) => {
                tabuleiro.rows[k].cells[m++].textContent = a
            })
        } else {
            letra.map((a, i) => {
                tabuleiro.rows[i].cells[k].textContent = a
            })
        }

    }

}

function adiconarPerguntas(perguntas) {
    for (var index = 0; index <=7;index++){
        var pergunta = "pergunta"+(index+1)
        document.getElementById(pergunta).innerHTML = perguntas[index]
    }
}