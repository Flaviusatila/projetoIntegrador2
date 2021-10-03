function logar() {
    usr = document.getElementById("inputUserName").value;
    password = document.getElementById("inputPassword").value;
    if (findByKeyAndValue(usr,password)){
        alert("Login com Sucesso")
        setTimeout(function() {
            window.location.href = "http://127.0.0.1:5555/sign-in/teste.html/";
        }, 1000);
        // window.location.replace("http://127.0.0.1:5555/sign-in/teste.html");
        // window.location.assign("http://127.0.0.1:5555/sign-in/teste.html");
    }else {
        alert("Não tem conta cadastrada ou User Name ou Senha incorretos!!")
    }
}




function findByKeyAndValue(key,value) {
    for (i = 0; i < localStorage.length; i++) {
        usr1 = localStorage.key(i)
        pwd2 = localStorage.getItem(usr1)
        if (key === usr1 && value === pwd2) 
            return true 
    }
    return false
}