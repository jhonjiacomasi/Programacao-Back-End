function handleLogin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");
  if (user === "admin" && pass === "1234") {
    message.textContent = "Login bem-sucedido!";
    message.style.color = "green";
    window.location.href = "eccomerce.html";
  } else {
    message.textContent = "Usuário ou senha incorretos.";
    message.style.color = "red";
  }
}