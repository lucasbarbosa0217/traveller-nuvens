var htmlList = "";
var starquantity = "";
var star = `<span id="rateMe"> ${starquantity}`;

const city2 = document.getElementById("city2");
const city3 = document.getElementById("city3");

const nomehotel = document.getElementById("nomelugar");
const adpequeno = document.getElementById("adpequeno");
const adgrande = document.getElementById("adgrande");
const urlsite = document.getElementById("url");
const phone = document.getElementById("phone");
var url = document.URL.split("?");
url[1] = url[1].replace(/\D/g, "");

if(url[1] == "" || url[1] == undefined){
  window.alert("Erro ao buscar dados. A função de avaliação não funcionará")
}

var ratePlaceholder = 5;
const chamarApi = () => {
  fetch(
    `https://api.tomtom.com/search/2/place.json?entityId=${url[1]}&key=pqz88PV1QgzBDAi8nGy8oaYhKga3vUMG`
  )
    .then((poir) => poir.json())
    .then((poir) => {
      nomehotel.innerHTML = poir.results[0].poi.name;
      city2.innerHTML = poir.results[0].address.municipality;
      city3.innerHTML = poir.results[0].address.municipality;
      var stringad = `${poir.results[0].address.countrySubdivision}, ${poir.results[0].address.country}`;
      var strangadg = `${poir.results[0].address.streetName}, ${poir.results[0].address.streetNumber}, ${poir.results[0].address.municipality}, ${poir.results[0].address.countrySubdivision}, ${poir.results[0].address.country}`;
      adpequeno.innerHTML = stringad;

      if (
        poir.results[0].poi.url == "undefined" ||
        poir.results[0].poi.url == undefined
      ) {
      } else {
        urlsite.innerHTML = poir.results[0].poi.url;
      }
      if (
        poir.results[0].poi.phone == "undefined" ||
        poir.results[0].poi.phone == undefined
      ) {
      } else {
        phone.innerHTML = poir.results[0].poi.phone;
      }

      adgrande.innerHTML = strangadg;
    });
};

chamarApi();
