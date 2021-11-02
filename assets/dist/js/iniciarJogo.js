function iniciaJogo() {
    transportes = ["CARRO", "MOTO", "TREM", "METRÔ", "BICICLETA", "CAMINHÃO", "BARCO", "NAVIO", "SUBMARINO", "AVIÃO", "HELICÓPTERO", "BALÃO"];
    primeiroclique = false;
    encontradas = 0;
    data = {};
    document.getElementById("encontradas").innerText = "Encontradas: " + encontradas + "\n Restantes: " + transportes.length;
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
    document.getElementById("parabens").hidden = true;
    document.getElementById("jogo").hidden = false;
    document.getElementById("btnVoltar").hidden = true;
}