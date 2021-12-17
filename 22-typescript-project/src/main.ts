import { User } from "./models/user.js";

class Main {
  private $usersBody: HTMLElement;
  constructor() {
    this.$usersBody = document.querySelector("#tbody") as HTMLElement;
  }

  public main() {
    //   fetch("sdfdfsdsf")
    const users: User[] = [];
  }
}
