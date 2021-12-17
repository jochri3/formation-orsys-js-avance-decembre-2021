import { User } from "../models/user.js";
export class UserTemplate {
  constructor(private user: User) {}

  createUserRow() {
    const $wrapper = document.createElement("tr");
    const userRow = `<td>${this.user.getId()}</td><td>${this.user.getUsername()}</td>
          <td>${this.user.getName()}</td>
          <td>${this.user.getEmail()}</td>
          <td>${this.user.getPhone()}</td>
          <td>${this.user.getWebsite()}</td>`;

    $wrapper.innerHTML = userRow;
    return $wrapper;
  }
}
