var t = document.getElementById("tabuleiro");
function iniciaJogo() {
    transportes = ["CARRO", "MOTO", "TREM", "METRÔ", "BICICLETA", "CAMINHÃO", "BARCO"];
    primeiroclique = false;
    data = {};
    for (var i = 0; i < t.rows.length; i++) {
        t.rows[i].id = "linha " + i;
        t.rows[i].dataset.index = i;
        for (var j = 0; j < t.rows[i].cells.length; j++) {
            t.rows[i].cells[j].classList = [];
            t.rows[i].cells[j].dataset.encontrada = "false";
            t.rows[i].cells[j].id = "coluna " + j;
            t.rows[i].cells[j].dataset.index = j;
            t.rows[i].cells[j].addEventListener("click", clique);
        }
    }
}