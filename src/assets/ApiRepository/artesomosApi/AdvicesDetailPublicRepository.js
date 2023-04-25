export default class AdvicesPublicRepository {
  url = "http://localhost:8080/api/advices";

  constructor() {}

  async getAll() {
    const response = await fetch(this.url);
    const json = await response.json();

    let advicesDetailList = [];

    advicesDetailList.push(json);

    return json;
  }
}
