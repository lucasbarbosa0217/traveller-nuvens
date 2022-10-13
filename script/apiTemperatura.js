const lista = document.getElementById("listaTemp");
var htmlDaLista = "";
var diasTimeStamp;
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=-23.5489&lon=-46.638823&units=metric&appid=91f30f8662f486297057a6d051ce5ca8"
)
  .then((data) => data.json())
  .then((data) => {
	const diaDeHoje = new Date(Date.now()).toLocaleDateString();
	let ultimoDiaDoMap = diaDeHoje;
	let arrayTempsDoDia = [];
	
	const sanitizedResponse = data.list.map((obj)=> {
		const dia = new Date(obj.dt * 1000).toLocaleDateString();
		
		if(dia === ultimoDiaDoMap) {
			arrayTempsDoDia.push((obj.main.temp_min + obj.main.temp_max) / 2 )
			
			return {};
		} else {
			mapObj = {dia,tempMedia: Math.round(arrayTempsDoDia.reduce((soma, i) => soma + i) / arrayTempsDoDia.length)}
		
			ultimoDiaDoMap = dia;
			arrayTempsDoDia = [];
		
			return mapObj;
			
		}
		
	})
  
	sanitizedResponse.forEach((element) => {
		var cor=""
	    if(element.tempMedia > 30){
		cor = "#b85416"
		}
	 	else if(element.tempMedia > 25) {
		cor = "#e0b909"
		}
	  	else if (element.tempMedia > 20) {
		cor = "#86e009"
		}
	  	else if (element.tempMedia > 15) {
			cor = "#09d5e0"
		}
	  	else if(element.tempMedia > 5) {
			cor = "#6eccf5"
		}
	  	else if(element.tempMedia > -5) {
			cor = "#9ddefa"
		}
	  	else if(element.tempMedia > -15) {
			cor = "#dcf7f7"
		}
	  	else {
			cor = "#cecece"
		};
		
  		if(element?.dia) {
			htmlDaLista = htmlDaLista + "<div class=\"tempGeral\" style=\"border:0.5rem solid"+cor+"\">"+"<div class=\"classTemp\">"+element.tempMedia+
    		"º</div><br><div class=\"classDate\">"+element.dia+"</div></div>";
		};
  	});
  
  lista.innerHTML = htmlDaLista;

});