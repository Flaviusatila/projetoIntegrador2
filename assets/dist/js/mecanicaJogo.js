function horizontal(fn) {
    console.log("seleção horizontal");
    for (var i = data.colunainicial; i < data.colunafinal + 1; i++) {
        var td = t.rows[data.linhainicial].cells[i];
        if (td.dataset.encontrada == "true") {
            td.classList.replace("encontrada", "selecionada");
        } else {
            td.classList.add("selecionada");
        }
        fn(td);
    }
}
function vertical(fn) {
    console.log("seleção vertical");
    for (var i = data.linhainicial; i < data.linhafinal + 1; i++) {
        var td = t.rows[i].cells[data.colunainicial];
        if (td.dataset.encontrada == "true") {
            td.classList.replace("encontrada", "selecionada");
        } else {
            td.classList.add("selecionada");
        }
        fn(td);
    }
}
function comparar(data) {
    var selecionados = {
        palavra: "",
        elementos: []
    };
    if (data.colunainicial != data.colunafinal && data.linhainicial == data.linhafinal) {
        horizontal(function (td) {
            selecionados.palavra += td.innerText;
            selecionados.elementos.push(td);
        });
    } else if (data.colunainicial == data.colunafinal && data.linhainicial != data.linhafinal) {
        vertical(function (td) {
            selecionados.palavra += td.innerText;
            selecionados.elementos.push(td);
        });
    }
    //essa linha aqui usei um operador condicional ternário que vai retorna a palavra selecionada, se ela estiver na lista,
    //caso a palavra esteja invertida, a primeira condição vai dar falso e vai cair na segunda condicional
    //que vai inverte a palavra e verificar de novo se tem na lista, caso sim vai retorna ela, caso, não achar mesmo invertendo, vai retorna falso
    //isso é importante para palavras de cabeça para baixo no quebra cabeça
    var palavraselecionada = transportes.includes(selecionados.palavra) ? selecionados.palavra : transportes.includes(selecionados.palavra.split("").reverse().join("")) ? selecionados.palavra.split("").reverse().join('') : false;
    if (palavraselecionada) {
        transportes = transportes.filter(function (p) {
            if (palavraselecionada != p) {
                return p;
            }
        });
        setTimeout(function () {
            for (var i = 0; i < selecionados.elementos.length; i++) {
                var elemento = selecionados.elementos[i];
                elemento.classList.replace("selecionada", "encontrada");
                elemento.dataset.encontrada = "true";
            }
        }, 1000);
        encontradas += 1;
        document.getElementById("encontradas").innerText = "Encontradas: " + encontradas + "\n Restantes: " + transportes.length;
        if (transportes.length == 0) {
            setTimeout(function () {
                document.getElementById("parabens").hidden = false;
                document.getElementById("btnVoltar").hidden = false;
            }, 2000);
        }
        data = {};
    } else {
        data = {};
        setTimeout(function () {
            for (var i = 0; i < selecionados.elementos.length; i++) {
                var elemento = selecionados.elementos[i];
                elemento.classList.replace("selecionada", "errado");
            }
            setTimeout(function () {
                for (var i = 0; i < selecionados.elementos.length; i++) {
                    var elemento = selecionados.elementos[i];
                    if (elemento.dataset.encontrada == "true") {
                        elemento.classList.replace("errado", "encontrada");
                    } else {
                        elemento.classList.remove("errado");
                    }
                }
            }, 1000);
        }, 1000);
    }
}



var btnVoltar = document.getElementById("btnVoltar");
btnVoltar.onclick = function () {
    btnVoltar.hidden = true;
    document.getElementById("iniciar").hidden = false;
    document.getElementById("parabens").hidden = true;
    document.getElementById("jogo").hidden = true;
}