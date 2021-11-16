function logar() {
    usr = document.getElementById("inputUserName").value;
    password = document.getElementById("inputPassword").value;
    if (findByKeyAndValue(usr,password)){
        window.location.href = "./cacaPalavras.html/";
    }else {
        alert("Não tem conta cadastrada ou User Name ou Senha incorretos!!")
    }
}

function findByKeyAndValue(key,value) {
        dados = localStorage.getItem("usuario").split(",")
        if (key === dados[0] && value === dados[1]) 
            return true 
    return false
}