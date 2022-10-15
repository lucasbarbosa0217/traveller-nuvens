

class UsersService {
  static async create(
    name,
    email,
    password,
    photoUrl
  ) {
    const { user } = await HttpClient.api.post('/users', { name, email, password, photoUrl})
    .then((response) => response.data)
    .then((response) => {
      window.alert(console.log(response.user))
    })
    .catch((error) => {
      window.alert("Erro! "+error);
    })
  }
}

