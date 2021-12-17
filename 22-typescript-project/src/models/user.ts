export class User {
  constructor(private firstName: string, private lastName: string) {}

  public getFirstName() {
    return this.firstName;
  }

  public getLastName() {
    return this.lastName;
  }
}
