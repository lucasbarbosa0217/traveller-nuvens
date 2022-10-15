
const form = document.getElementById("enviar");
const nameUser = document.getElementById("name");
const emailUser = document.getElementById("email");
const passwordUser = document.getElementById("password");
const photoUrlUser = document.getElementById("photoUrl");


form.addEventListener('click', (event) => {
  
   UsersService.create(nameUser.value, emailUser.value, passwordUser.value, photoUrlUser.value);
});

