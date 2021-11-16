var acertos = 0
function horizontal(fn) {
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
    var palavraselecionada = respostas.includes(selecionados.palavra) 
                            ? selecionados.palavra 
                            : respostas.includes(selecionados.palavra.split("").reverse().join("")) 
                            ? selecionados.palavra.split("").reverse().join('') 
                            : false;
    if (palavraselecionada) {
        numeroPergunta = "pergunta" + (respostas.findIndex((e) => e == palavraselecionada) + 1 )
        document.getElementById(numeroPergunta).style = "text-decoration:line-through;"        
       
        setTimeout(function () {
            for (var i = 0; i < selecionados.elementos.length; i++) {
                var elemento = selecionados.elementos[i];
                elemento.classList.replace("selecionada", "encontrada");
                elemento.dataset.encontrada = "true";
            }
        }, 1000);
        data = {};
        acertos++;
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
    if(acertos == 7){
        setTimeout( window.location.replace("./parabens.html"),10000);
    }
}
