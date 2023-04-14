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
  