import { User } from "../models/user.js";

export class UserTemplate {
  constructor(private user: User) {}

  public createUserRow() {
    const userRow = document.createElement("tr");
    const htmlString = `<td>${this.user.getFirstName()}</td><td>${this.user.getLastName()}</td>`;
    userRow.innerHTML = htmlString;
    return userRow;
  }
}
