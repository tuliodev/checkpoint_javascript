let loginName = "admin";
let loginPass = "admin123";

let name;
let password;

function handleName(event) {
  name = event.target.value;
}

function handlePassword(event) {
  password = event.target.value;
}

function redirectPage() {
  window.location.href = "redirect.html";
}

function handleLoginSubmit() {
  event.preventDefault();
  if (name == loginName && password == loginPass) {
    alert(
      `Você entrou com o usuário: ${name}, seja bem vindo a nossa plataforma`
    );

    return redirectPage();
  }
  nameInput = document.getElementById("name")
  passwordInput = document.getElementById("password")
  nameInput.value = "";
  passwordInput.value = "";
  return alert("Login e senha incorretos, por favor tente novamente");
}
