loginBtn = document.getElementById("loginClick");
console.log(isLogged)

if(isLogged){
  loginBtn.innerHTML = "Sair"
}

loginBtn.addEventListener('click', () => {
  if(isLogged){
    if(window.confirm("Tem certeza disso?")){
      localStorage.removeItem('TOKEN_KEY');
      HttpClient.api.defaults.headers.common.Authorization = undefined;
     window.location.reload()
    }
  }else{
    location.replace("./login.html");
  }
})

