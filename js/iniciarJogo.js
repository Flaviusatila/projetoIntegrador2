var t = document.getElementById("tabuleiro");
var aleatorio = localStorage.getItem('numero')
function iniciaJogo() {
    respostas = respostasRandom[aleatorio]
    perguntas = perguntasRandom[aleatorio]
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
    adicionarPalavras(t, respostas)
    adiconarPerguntas(perguntas)
}

function adicionarPalavras(tabuleiro, array) {
    var tpl = numeroAleatorio(parseInt(Math.random() * 3))
    for (var p = 0; p < array.length; p++) {
        let letra = array[p].split("")
        var k = tpl[p][0]
        var m = tpl[p][1]
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
    for (var index = 0; index <= 7; index++) {
        var pergunta = "pergunta" + (index)
        document.getElementById(pergunta).innerHTML = perguntas[index]
    }
}




function numeroAleatorio(u) {
    const templates = [
        [8, 11], [7, 10], [4, 15], [3, 17], [2, 21], [0, 11], [4, 15],
        [5, 12], [9, 12], [0, 8], [2, 1], [0, 21], [2, 8], [6, 3],
        [9, 5], [12, 21], [6, 13], [7, 17], [20, 21], [8, 2], [4, 2],
        [4, 5], [8, 21], [3, 12], [0, 1], [21, 21], [7, 11], [6, 2]
    ]
    const escolha = [0, 7, 14, 21]

    return templates.slice(escolha[u], escolha[u] + 7)
}

respostasRandom = [
    ["CARRO", "MOTO", "TREM", "METRO", "BICICLETA", "CAMINHAO", "BARCO"],
    ["CARRO", "MOTO", "TREM", "METRO", "BICICLETA", "CAMINHAO", "BARCO"],
    ["CARRO", "MOTO", "TREM", "METRO", "BICICLETA", "CAMINHAO", "BARCO"],
    ["BOLIVIA", "JAPAO", "CHILE", "CHINA", "RUSSIA", "HOLANDA", "AUSTRALIA"],
    ["BOLIVIA", "JAPAO", "CHILE", "CHINA", "RUSSIA", "HOLANDA", "AUSTRALIA"],
    ["BOLIVIA", "JAPAO", "CHILE", "CHINA", "RUSSIA", "HOLANDA", "AUSTRALIA"],
    ["FUTEBOL", "BASQUETE", "NATACAO", "VOLEI", "CORRIDA", "SALTO", "HOQUEI"],
    ["FUTEBOL", "BASQUETE", "NATACAO", "VOLEI", "CORRIDA", "SALTO", "HOQUEI"],
    ["FUTEBOL", "BASQUETE", "NATACAO", "VOLEI", "CORRIDA", "SALTO", "HOQUEI"],
    ["PAO", "MACARRAO", "ARROZ", "FEIJAO", "TOMATE", "PIZZA", "PEIXE"],
    ["PAO", "MACARRAO", "ARROZ", "FEIJAO", "TOMATE", "PIZZA", "PEIXE"],
    ["PAO", "MACARRAO", "ARROZ", "FEIJAO", "TOMATE", "PIZZA", "PEIXE"]
];
perguntasRandom = [
    ["Meios de Transporte0", "?? um meio de transporte sob quatro rodas.",
        "?? um meio de transporte sob duas rodas.",
        "?? um meio de transporte com v??rios vag??es ligados entre si e pode transportar pessoas ou cargas.",
        "?? um meio de transporte terrestre que passa por t??neis subterr??neos ou por viadutos e realiza a parada em esta????es designadas.",
        "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
        "?? um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
        "Meio de transporte aqu??tico que tem vela, come??a com a letra B e tem cinco letras."],
    ["Meios de Transporte1", "?? um meio de transporte sob quatro rodas.",
        "?? um meio de transporte sob duas rodas.",
        "?? um meio de transporte com v??rios vag??es ligados entre si e pode transportar pessoas ou cargas.",
        "?? um meio de transporte terrestre que passa por t??neis subterr??neos ou por viadutos e realiza a parada em esta????es designadas.",
        "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
        "?? um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
        "Meio de transporte aqu??tico que tem vela, come??a com a letra B e tem cinco letras."],
    ["Meios de Transporte2", "?? um meio de transporte sob quatro rodas.",
        "?? um meio de transporte sob duas rodas.",
        "?? um meio de transporte com v??rios vag??es ligados entre si e pode transportar pessoas ou cargas.",
        "?? um meio de transporte terrestre que passa por t??neis subterr??neos ou por viadutos e realiza a parada em esta????es designadas.",
        "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
        "?? um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
        "Meio de transporte aqu??tico que tem vela, come??a com a letra B e tem cinco letras."],
    ["Paises0", "?? um pa??s da Am??rica do sul que n??o possui sa??da para o mar. Possui a bandeira com cores verde, vermelha e amarela.",
        "?? um pa??s localizado no Extremo Oriente da ??sia. Sua capital come??a com T",
        "?? um pa??s da Am??rica do Sul. ?? um dos poucos pa??ses a n??o fazer fronteira com o Brasil, al??m de ser o maior produtor de cobre do mundo e ter uma estrela na sua bandeira.",
        "?? o pa??s mais populoso do mundo",
        "Moscou ?? sua capital",
        "Pa??s que a maconha ?? totalmente legalizada",
        "Maior pa??s da Oceania."],
    ["Paises1", "?? um pa??s da Am??rica do sul que n??o possui sa??da para o mar. Possui a bandeira com cores verde, vermelha e amarela.",
        "?? um pa??s localizado no Extremo Oriente da ??sia. Sua capital come??a com T",
        "?? um pa??s da Am??rica do Sul. ?? um dos poucos pa??ses a n??o fazer fronteira com o Brasil, al??m de ser o maior produtor de cobre do mundo e ter uma estrela na sua bandeira.",
        "?? o pa??s mais populoso do mundo",
        "Moscou ?? sua capital",
        "Pa??s que a maconha ?? totalmente legalizada",
        "Maior pa??s da Oceania."],
    ["Paises2", "?? um pa??s da Am??rica do sul que n??o possui sa??da para o mar. Possui a bandeira com cores verde, vermelha e amarela.",
        "?? um pa??s localizado no Extremo Oriente da ??sia. Sua capital come??a com T",
        "?? um pa??s da Am??rica do Sul. ?? um dos poucos pa??ses a n??o fazer fronteira com o Brasil, al??m de ser o maior produtor de cobre do mundo e ter uma estrela na sua bandeira.",
        "?? o pa??s mais populoso do mundo",
        "Moscou ?? sua capital",
        "Pa??s que a maconha ?? totalmente legalizada",
        "Maior pa??s da Oceania."],
    ["Esportes0", "Esporte praticado em campo com dois gols.Mais praticado no Brasil.",
        "Esporte que o objetivo ?? acertar a cesta.",
        "Esporte praticado em piscinas.",
        "Praticado em quadras tanto de areia quanto de cimento.",
        "Esporte com varias modalidades, como mais rapido quanto a grandes dist??ncias.",
        "Praticado com vara, afim de atingir uma certa altura.",
        "Praticado em uma quadra de gelo."],
    ["Esportes1", "Esporte praticado em campo com dois gols.Mais praticado no Brasil.",
        "Esporte que o objetivo ?? acertar a cesta.",
        "Esporte praticado em piscinas.",
        "Praticado em quadras tanto de areia quanto de cimento.",
        "Esporte com varias modalidades, como mais rapido quanto a grandes dist??ncias.",
        "Praticado com vara, afim de atingir uma certa altura.",
        "Praticado em uma quadra de gelo."],
    ["Esportes2", "Esporte praticado em campo com dois gols.Mais praticado no Brasil.",
        "Esporte que o objetivo ?? acertar a cesta.",
        "Esporte praticado em piscinas.",
        "Praticado em quadras tanto de areia quanto de cimento.",
        "Esporte com varias modalidades, como mais rapido quanto a grandes dist??ncias.",
        "Praticado com vara, afim de atingir uma certa altura.",
        "Praticado em uma quadra de gelo."],
    ["Comidas0", "Feito de trigo geralmente consumido no caf?? da manhan.",
        "Uma massa muito tradicional na cozinha italiana.",
        "Pricipal fonte de alimenta????o do pa??ses orientais.",
        "Uma semente comest??vel da fam??lia das leguminosas. ?? uma das sementes mais consumidas no Brasil.",
        "Utilizada em saladas e molhos.Embora muitos considerem o tomate como sendo um legume, ele ?? um fruto.",
        "Os s??bados s??o os dias preferidos no mundo inteiro das pessoas pedirem esse prato.Tudo acaba em ?",
        "Faz parte da base alimentar de cidades costeiras e ribeirinhas."],
    ["Comidas1", "Feito de trigo geralmente consumido no caf?? da manhan.",
        "Uma massa muito tradicional na cozinha italiana.",
        "Pricipal fonte de alimenta????o do pa??ses orientais.",
        "Uma semente comest??vel da fam??lia das leguminosas. ?? uma das sementes mais consumidas no Brasil.",
        "Utilizada em saladas e molhos.Embora muitos considerem o tomate como sendo um legume, ele ?? um fruto.",
        "Os s??bados s??o os dias preferidos no mundo inteiro das pessoas pedirem esse prato.Tudo acaba em ?",
        "Faz parte da base alimentar de cidades costeiras e ribeirinhas."],
    ["Comidas2", "Feito de trigo geralmente consumido no caf?? da manhan.",
        "Uma massa muito tradicional na cozinha italiana.",
        "Pricipal fonte de alimenta????o do pa??ses orientais.",
        "Uma semente comest??vel da fam??lia das leguminosas. ?? uma das sementes mais consumidas no Brasil.",
        "Utilizada em saladas e molhos.Embora muitos considerem o tomate como sendo um legume, ele ?? um fruto.",
        "Os s??bados s??o os dias preferidos no mundo inteiro das pessoas pedirem esse prato.Tudo acaba em ?",
        "Faz parte da base alimentar de cidades costeiras e ribeirinhas."]
]