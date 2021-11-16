var t = document.getElementById("tabuleiro");
var aleatorio = parseInt(Math.random() * 4)

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
    [5,12], [9, 12], [0, 8], [2, 1], [0, 21], [2, 8], [6, 3],
    [9, 5], [12, 21], [6, 13], [7, 17], [20, 21], [8, 2], [4, 2],
    [4, 5], [8, 21], [3, 12], [0, 1], [21, 21], [7, 11], [6, 2]
    ]
    const escolha = [0, 7, 14,21]

    return templates.slice(escolha[u],escolha[u]+7)
}

respostasRandom = [
    ["CARRO", "MOTO", "TREM", "METRO", "BICICLETA", "CAMINHAO", "BARCO"],
["BOLIVIA", "JAPAO", "CHILE", "CHINA", "RUSSIA", "HOLANDA", "AUSTRALIA"],
["FUTEBOL", "BASQUETE", "NATACAO", "VOLEI", "CORRIDA", "SALTO", "HOQUEI"],
["PAO", "MACARRAO", "ARROZ", "FEIJAO", "TOMATE", "PIZZA", "PEIXE"],
["ROCK", "SAMBA", "PAGODE", "SERTANEJO", "RAP", "POP", "MPB"]
];
perguntasRandom = [
    ["Meios de Transporte", "É um meio de transporte sob quatro rodas.",
        "É um meio de transporte sob duas rodas.",
        "É um meio de transporte com vários vagões ligados entre si e pode transportar pessoas ou cargas.",
        "É um meio de transporte terrestre que passa por túneis subterrâneos ou por viadutos e realiza a parada em estações designadas.",
        "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
        "É um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
        "Meio de transporte aquático que tem vela, começa com a letra B e tem cinco letras."],
    ["Paises", "É um país da América do sul que não possui saída para o mar. Possui a bandeira com cores verde, vermelha e amarela.",
        "É um país localizado no Extremo Oriente da ásia. Sua capital começa com T",
        "É um país da América do Sul. É um dos poucos países a não fazer fronteira com o Brasil, além de ser o maior produtor de cobre do mundo e ter uma estrela na sua bandeira.",
        "É o país mais populoso do mundo",
        "Moscou é sua capital",
        "País que a maconha é totalmente legalizada",
        "Maior país da Oceania."],
    ["Esportes", "Esporte praticado em campo com dois gols.Mais praticado no Brasil.",
        "Esporte que o objetivo é acertar a cesta.",
        "Esporte praticado em piscinas.",
        "Praticado em quadras tanto de areia quanto de cimento.",
        "Esporte com varias modalidades, como mais rapido quanto a grandes distâncias.",
        "Praticado com vara, afim de atingir uma certa altura.",
        "Praticado em uma quadra de gelo."],
    ["Comidas", "Feito de trigo geralmente consumido no café da manhan.",
        "Uma massa muito tradicional na cozinha italiana.",
        "Pricipal fonte de alimentação do países orientais.",
        "Uma semente comestível da família das leguminosas. É uma das sementes mais consumidas no Brasil.",
        "Utilizada em saladas e molhos.Embora muitos considerem o tomate como sendo um legume, ele é um fruto.",
        "Os sábados são os dias preferidos no mundo inteiro das pessoas pedirem esse prato.Tudo acaba em ?",
        "Faz parte da base alimentar de cidades costeiras e ribeirinhas."],
    ["Generos Musicais", "Associado à rebeldia e ao ímpeto juvenil.",
        "Um dos primeiros estilos nascidos no Rio, foi criado no final dos anos 20 em botecos da cidade.",
        "Caratecterizado pelas rodas de instrumentos, violão, cavaquinho, banjo, contrabaixo e até guitarra, teclado, bateria.",
        "Baseado originalmente em fragmentos de cantos tradicionais rurais do interior paulista, sul e triângulo mineiros, sudeste goiano e mato grossense.",
        "Vem da junção entre palavras rhythm e poetry (ritmo e poesia), tradicional nas periferias de São Paulo.",
        "Estilo musical que relaciona seus intérpretes a 'Super Stars'",
        "Musica Popular Brasileira."]
]