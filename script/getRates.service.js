var resposta;

class GetRatesService {
  static async create(id) {
    await HttpClient.api
      .get("/ratings/" + id)
      .then((response) => response.data)
      .then((response) => {
        resposta = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
