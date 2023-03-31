function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === "guru" && password === "marthinspan") {
    window.location.href = "./GuruHome.html";
  } else if (username === "murid" && password === "marthingans") {
    window.location.href = "./level.html";
  } else {
    errorMessage.innerHTML = "Username atau password salah!";
    errorMessage.style.display = "block";
  }
}
