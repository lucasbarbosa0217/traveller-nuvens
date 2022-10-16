class UsersService {
  static async create(name, email, password, photoUrl) {
    const { data } = await HttpClient.api.post("/users", {
      name,
      email,
      password,
      photoUrl,
    });

    return data;
  }
}
