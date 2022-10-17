const form = document.getElementById("cadastro");
const nameUser = document.getElementById("name");
const emailUser = document.getElementById("email");
const passwordUser = document.getElementById("password");
const photoUrlUser = document.getElementById("photoUrl");

form.addEventListener("submit", () => {
  event.preventDefault();

  UsersService.create(
    nameUser.value,
    emailUser.value,
    passwordUser.value,
    photoUrlUser.value
  )
    .then(() => {
      window.alert("Usuário criado!");
      window.location.href = "./login.html";
    })
    .catch((error) => {
      window.alert("Erro! " + error?.response?.data?.message);
    });
});
