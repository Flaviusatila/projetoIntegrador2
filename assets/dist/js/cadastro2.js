function salvar() {
    usr = document.getElementById("userName").value;
    password = document.getElementById("cadastroSenha").value;
    if (findByKey(usr)){
        alert("Usuario já Cadastrado")
    }else {
        localStorage.setItem(usr, password)
        alert("Cadastrado com sucesso!!")
    }
}

function findByKey(key) {
    for (i = 0; i < localStorage.length; i++) {
        usr1 = localStorage.key(i)
        pwd2 = localStorage.getItem(usr1)
        if (key === usr1) 
            return true 
    }
    return false
}