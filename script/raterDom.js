const  rateForm = document.getElementById("rater");
const textarea = document.getElementById("ratearea")


rateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var grade = 10;
    var grade = document.querySelector('input[name="grade"]:checked').value;
   console.log(grade, url[1])
  RatesService.create(textarea.value, grade, url[1])
  .then((response) => response.data)
  .then((response) => {
    window.alert("Avaliação criada com sucesso!")
    window.location.reload();
  })
  .catch((error) => {
    if(error.response.status == 401){
        window.location.href="./login.html";

    }
  })
  });




