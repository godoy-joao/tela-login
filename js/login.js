document.addEventListener("DOMContentLoaded", function () {
    const default_password = "admin";
    const default_user = "admin";
    let user = document.getElementById("userInput");
    let password = document.getElementById("passwordInput");
    let login_button = document.getElementById("loginButton");
    login_button.addEventListener("click", function () {
        if (user.value.trim() != "" && password.value.trim() != "") {
            console.log(user.value, password.value);
            console.log(default_password, default_user);
            if (default_user == user.value && default_password == password.value) {
                window.location.href = "./html/home_page.html"
            } else {
                alert("Usuário ou senha incorretos!");
            }
        } else {
            alert("Favor preencher todos os campos.");
        }
    })
})