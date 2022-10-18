let htmlList = "";
let starquantity = "";
let star = `<span id="rateMe"> ${starquantity}`;

const listahotel = document.getElementById("destaque");
const city = document.getElementById("city");
city.innerHTML = "São Paulo";

let ratePlaceholder = 5;

const chamarApi = () => {
  fetch(
    `https://api.tomtom.com/search/2/categorySearch/${category}.json?key=pqz88PV1QgzBDAi8nGy8oaYhKga3vUMG&lat=-23.5489&lon=-46.638823`
  )
    .then((data) => data.json())
    .then((data) => {
      data.results.map((obj) => {
        for (let i = 0; i < Math.round(ratePlaceholder); i += 1) {
          starquantity += `<i class="fas fa-star py-2 px-1 yellowClr" title="star icon"
            data-placement="top" ></i>`;
        }
        if (Math.round(ratePlaceholder) < 5) {
          for (let i = 0; i < 5 - Math.round(ratePlaceholder); i += 1) {
            starquantity += `<i class="fas fa-star py-2 px-1 grayClr" title="star icon"
              data-placement="top" ></i>`;
          }
        }
        star = `  <span id="rateMe"> ${starquantity}`;
        starquantity = "";
        const nomehotel = obj.poi.name;
        if(category=="hotel"){
          htmlList += `
          <li class="list-unstyled">
          <div class=\"card hotel\">
          <img class="card-img-top rounded" src=\"${path}\" alt=\"Foto de quarto de hotel\"/>
          <div class=\"textcard\">
          <h3>${nomehotel}</h3>${star}(${ratePlaceholder}) </span>
          <p>${obj.address.municipality}, ${obj.address.countrySubdivision}</p>
              <p></p>
                 <p class="price"><b>R$ ${Math.floor(
                   Math.random() * 600
                 )}</b>/noite<p></p>
              <a href="${page}.html?${
                obj.id
              }" class="btn btn-primary ${color}">ACESSAR</a>
              </div>
          </div>
          </li>
          `;
        } else{

          htmlList += `
          <li class="list-unstyled">
          <div class=\"card hotel\">
          <img class="card-img-top rounded"src=\"${path}\" alt=\"Foto de quarto de hotel\"/>
          <div class=\"textcard\">
          <h3>${nomehotel}</h3>${star}(${ratePlaceholder}) </span>
          <p>${obj.address.municipality}, ${obj.address.countrySubdivision}</p>
              <p></p>
              
              <a href="${page}.html?${
                obj.id
              }" class="btn btn-primary ${color}">ACESSAR</a>
              </div>
          </div>
          </li>
          `;
        }
       
        listahotel.innerHTML = htmlList;
        ratePlaceholder -= 0.2;
        ratePlaceholder = Math.round(ratePlaceholder * 10) / 10;
      });
    });
};

chamarApi();
