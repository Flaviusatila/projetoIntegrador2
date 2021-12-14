var db = openDatabase("MeuBanco", "2.0", "Mybase", 2 * 1024 * 1024);
var cont = parseInt(Math.random() * 4);
respostas = [
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
["PAO", "MACARRAO", "ARROZ", "FEIJAO", "TOMATE", "PIZZA", "PEIXE"],
];
perguntas = [
    ["Meios de Transporte Terrestre",
        "É um meio de transporte sob quatro rodas.",
        "É um meio de transporte sob duas rodas.",
        "É um meio de transporte com vários vagões ligados entre si e pode transportar pessoas ou cargas.",
        "É um meio de transporte terrestre que passa por túneis subterrâneos ou por viadutos e realiza a parada em estações designadas.",
        "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
        "É um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
        "Meio de transporte aquático que tem vela, começa com a letra B e tem cinco letras."],
    [["Meios de Transporte1", "É um meio de transporte sob quatro rodas.",
        "É um meio de transporte sob duas rodas.",
        "É um meio de transporte com vários vagões ligados entre si e pode transportar pessoas ou cargas.",
        "É um meio de transporte terrestre que passa por túneis subterrâneos ou por viadutos e realiza a parada em estações designadas.",
        "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
        "É um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
        "Meio de transporte aquático que tem vela, começa com a letra B e tem cinco letras."]],
    [["Meios de Transporte2", "É um meio de transporte sob quatro rodas.",
        "É um meio de transporte sob duas rodas.",
        "É um meio de transporte com vários vagões ligados entre si e pode transportar pessoas ou cargas.",
        "É um meio de transporte terrestre que passa por túneis subterrâneos ou por viadutos e realiza a parada em estações designadas.",
        "Meio de transporte usado para pedalar em pistas, ciclovias ou parques.",
        "É um meio de transporte terrestre grande, com eixos dianteiros e traseiros, geralmente tem entre quatro e dezesseis rodas e, tem uma carreta.",
        "Meio de transporte aquático que tem vela, começa com a letra B e tem cinco letras."]],
    [["Paises0", "É um país da América do sul que não possui saída para o mar. Possui a bandeira com cores verde, vermelha e amarela.",
        "É um país localizado no Extremo Oriente da ásia. Sua capital começa com T",
        "É um país da América do Sul. É um dos poucos países a não fazer fronteira com o Brasil, além de ser o maior produtor de cobre do mundo e ter uma estrela na sua bandeira.",
        "É o país mais populoso do mundo",
        "Moscou é sua capital",
        "País que a maconha é totalmente legalizada",
        "Maior país da Oceania."]],
    [["Paises1", "É um país da América do sul que não possui saída para o mar. Possui a bandeira com cores verde, vermelha e amarela.",
        "É um país localizado no Extremo Oriente da ásia. Sua capital começa com T",
        "É um país da América do Sul. É um dos poucos países a não fazer fronteira com o Brasil, além de ser o maior produtor de cobre do mundo e ter uma estrela na sua bandeira.",
        "É o país mais populoso do mundo",
        "Moscou é sua capital",
        "País que a maconha é totalmente legalizada",
        "Maior país da Oceania."]],
    [["Paises2", "É um país da América do sul que não possui saída para o mar. Possui a bandeira com cores verde, vermelha e amarela.",
        "É um país localizado no Extremo Oriente da ásia. Sua capital começa com T",
        "É um país da América do Sul. É um dos poucos países a não fazer fronteira com o Brasil, além de ser o maior produtor de cobre do mundo e ter uma estrela na sua bandeira.",
        "É o país mais populoso do mundo",
        "Moscou é sua capital",
        "País que a maconha é totalmente legalizada",
        "Maior país da Oceania."]],
    [["Esportes0", "Esporte praticado em campo com dois gols.Mais praticado no Brasil.",
        "Esporte que o objetivo é acertar a cesta.",
        "Esporte praticado em piscinas.",
        "Praticado em quadras tanto de areia quanto de cimento.",
        "Esporte com varias modalidades, como mais rapido quanto a grandes distâncias.",
        "Praticado com vara, afim de atingir uma certa altura.",
        "Praticado em uma quadra de gelo."]],
    [["Esportes1", "Esporte praticado em campo com dois gols.Mais praticado no Brasil.",
        "Esporte que o objetivo é acertar a cesta.",
        "Esporte praticado em piscinas.",
        "Praticado em quadras tanto de areia quanto de cimento.",
        "Esporte com varias modalidades, como mais rapido quanto a grandes distâncias.",
        "Praticado com vara, afim de atingir uma certa altura.",
        "Praticado em uma quadra de gelo."]],
    [["Esportes2", "Esporte praticado em campo com dois gols.Mais praticado no Brasil.",
        "Esporte que o objetivo é acertar a cesta.",
        "Esporte praticado em piscinas.",
        "Praticado em quadras tanto de areia quanto de cimento.",
        "Esporte com varias modalidades, como mais rapido quanto a grandes distâncias.",
        "Praticado com vara, afim de atingir uma certa altura.",
        "Praticado em uma quadra de gelo."]],
    [["Comidas0", "Feito de trigo geralmente consumido no café da manhan.",
        "Uma massa muito tradicional na cozinha italiana.",
        "Pricipal fonte de alimentação do países orientais.",
        "Uma semente comestível da família das leguminosas. É uma das sementes mais consumidas no Brasil.",
        "Utilizada em saladas e molhos.Embora muitos considerem o tomate como sendo um legume, ele é um fruto.",
        "Os sábados são os dias preferidos no mundo inteiro das pessoas pedirem esse prato.Tudo acaba em ?",
        "Faz parte da base alimentar de cidades costeiras e ribeirinhas."]],
    [["Comidas1", "Feito de trigo geralmente consumido no café da manhan.",
        "Uma massa muito tradicional na cozinha italiana.",
        "Pricipal fonte de alimentação do países orientais.",
        "Uma semente comestível da família das leguminosas. É uma das sementes mais consumidas no Brasil.",
        "Utilizada em saladas e molhos.Embora muitos considerem o tomate como sendo um legume, ele é um fruto.",
        "Os sábados são os dias preferidos no mundo inteiro das pessoas pedirem esse prato.Tudo acaba em ?",
        "Faz parte da base alimentar de cidades costeiras e ribeirinhas."]],
    [["Comidas2", "Feito de trigo geralmente consumido no café da manhan.",
        "Uma massa muito tradicional na cozinha italiana.",
        "Pricipal fonte de alimentação do países orientais.",
        "Uma semente comestível da família das leguminosas. É uma das sementes mais consumidas no Brasil.",
        "Utilizada em saladas e molhos.Embora muitos considerem o tomate como sendo um legume, ele é um fruto.",
        "Os sábados são os dias preferidos no mundo inteiro das pessoas pedirem esse prato.Tudo acaba em ?",
        "Faz parte da base alimentar de cidades costeiras e ribeirinhas."]]
]
criar = async () => {
    await db.transaction(function (levantarBanco) {
        levantarBanco.executeSql("CREATE TABLE IF NOT EXISTS cacaPalavras (ID PRIMARY KEY, perguntas TEXT, respostas TEXT)");
        salvardb()
    });
}
salvardb = async () => {
    await db.transaction(async (salvarUser) => {
       

        for (let index = 0; index < perguntas.length; index++) {
            salvarUser.executeSql("INSERT INTO cacaPalavras (ID, perguntas, respostas) VALUES (?,?,?)", [index, perguntas[index], respostas[index]]);
        }
        findByPerguntas()
        findByRespostas()
    });
}



function findByPerguntas() {
    db.transaction(function (transaction) {
        transaction.executeSql(
            "SELECT * FROM cacaPalavras WHERE ID = ?",
            [cont],
            function (transaction, result) {
                console.log('deu certo!');
                console.log(result);

                for (var i = 0; i < result.rows.length; i++) {
                    console.log(result.rows.item(i)[['perguntas']]);
                    localStorage.setItem('perguntas', [result.rows.item(i)[['perguntas']]])
                }
            },
            function (transaction, error) {
                console.log('deu pau!');
                console.log(error);
            }
        );
    });
}

function findByRespostas() {
    db.transaction(function (transaction) {
        transaction.executeSql(
            "SELECT * FROM cacaPalavras WHERE ID = ?",
            [cont],
            function (transaction, result) {
                console.log('deu certo!');
                console.log(result);

                for (var i = 0; i < result.rows.length; i++) {
                    console.log(result.rows.item(i)[['respostas']]);
                    localStorage.setItem('respostas', [result.rows.item(i)[['respostas']]])
                }
            },
            function (transaction, error) {
                console.log('deu pau!');
                console.log(error);
            }
        );
    });
}
