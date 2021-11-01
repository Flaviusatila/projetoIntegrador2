var listaUsuarios = []
function salvar() {
    var usr = {}

    usr.nome = document.getElementById("nomeCompleto").value;
    usr.userName = document.getElementById("userName").value;
    password = document.getElementById("cadastroSenha").value;
    senhaConfirm = document.getElementById("confimarSenha").value;

    if (validarSenha(password, senhaConfirm)) {
        if (findByKey(usr)) {
            alert("Usuario já Cadastrado")
        } else {
            usr.senha = password
            // listaUsuarios.join(usr.nome,usr.userName,usr.senha)
            localStorage.setItem("usuario", [usr.userName, usr.senha, usr.nome])
            alert("Cadastrado com sucesso!!")
            window.location.href = "./index.html";
            // limparCampos()
        }
    }
}



function findByKey(key) {
    teste = localStorage.getItem("usuario").split(",")
    if (teste[0] == key.userName)
        return true

    return false

}

function limparCampos() {
    document.getElementById("userName").value = "";
    document.getElementById("cadastroSenha").value = "";
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("confimarSenha").value = "";
}

function validarSenha(a, e) {
    return a == e ? true : alert("As senhas estao diferentes")
}

