const form = document.getElementById("loginform");
const emailUser = document.getElementById("email");
const passwordUser = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  UsersLoginService.create(emailUser.value, passwordUser.value)
    .then((data) => {
      localStorage.setItem("TOKEN_KEY", data.token);
      HttpClient.api.defaults.headers.common.Authorization = getTokenStorage();
      window.alert("Login com sucesso");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      if (error.response.data.message == "INVALID_CREDENTIALS") {
        window.alert("Email ou senha incorretos");
      } else {
        window.alert(
          "Erro" + error.response.status + ": " + error.response.data[0]
        );
      }
      console.log(error);
    });
});
