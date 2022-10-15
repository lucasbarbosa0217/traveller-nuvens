var box = document.getElementById("ratebox");

 GetRatesService.create(url[1]).then(() => {
  console.log(resposta)
  configurarTela(resposta);
})
;


function configurarTela(listaRate){
 
  listaRate.forEach(element => {
      console.log(element)
      conteudo = element.comment;
      nota = element.grade;
      nome = element.user.name;
      img= element.user.photoUrl; 
      htmlRate = box.innerHTML;
      box.innerHTML = htmlRate + `<div class=" card-rating m-0 p-1">
      <div class="card Card-rate shadow-sm rounded bg-white p-4">
        <div class="rating-desc">
          <img src="${img}" class="rounded-circle img-rating"
            alt="Foto da pessoa que está fazendo a avaliação">
          <div class="text-rating">
            <p class="rating-text name-rating mb-0">${nome}</p>
            <span id="rateMe d-inline" style="font-size: 1rem;">
      
              <p>Deu nota (${nota})</p>
            </span>
          </div>
        </div>
        <hr>
        <p>${conteudo}</p>
      </div>
      </div>
      `
    

  });
  if (listaRate == null || listaRate == undefined || listaRate == ""){
    box.innerHTML = "<h3>Nenhuma avaliação até agora! faça a sua!";
  }
 }





 function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};