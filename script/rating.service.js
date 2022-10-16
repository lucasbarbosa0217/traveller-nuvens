class RatingService {
  static async create(comment, grade, placeId) {
    const { data } = await HttpClient.api.post("/ratings", {
      comment,
      grade,
      placeId,
    });

    return data;
  }
}
