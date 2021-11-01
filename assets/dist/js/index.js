function logar() {
    usr = document.getElementById("inputUserName").value;
    password = document.getElementById("inputPassword").value;
    if (findByKeyAndValue(usr,password)){
        // alert("Login com Sucesso")
        window.location.href = "./teste.html/";
        // window.location.replace("http://127.0.0.1:5555/sign-in/teste.html");
        // window.location.assign("http://127.0.0.1:5555/sign-in/teste.html");
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