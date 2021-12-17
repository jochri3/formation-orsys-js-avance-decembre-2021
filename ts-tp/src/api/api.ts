abstract class Api {
  constructor(private url: string) {}

  async get() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error("erreur survenue", err));
  }
}

export class UsersApi extends Api {
  constructor(url: string) {
    super(url);
  }

  async getUsers() {
    return await this.get();
  }
}
