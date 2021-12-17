import { User, IUser } from "./models/user.js";
import { UserTemplate } from "./templates/user.template.js";
import { UsersApi } from "./api/api.js";

class Main {
  private $usersWrapper;
  private users: User[];
  private usersAPI: UsersApi;
  constructor() {
    this.$usersWrapper = document.querySelector("#users") as HTMLElement;
    this.usersAPI = new UsersApi("https://jsonplaceholder.typicode.com/users");
    this.users = [];
  }

  async main() {
    // const usersData = await fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => data as IUser[]);

    const usersData = (await this.usersAPI.getUsers()) as IUser[];
    console.log(usersData);
    this.users = usersData.map(
      ({ id, name, address, company, email, phone, username, website }) =>
        new User(id, name, username, email, address, phone, website, company)
    );

    this.users.forEach((user) => {
      const Template = new UserTemplate(user);
      this.$usersWrapper.appendChild(Template.createUserRow());
    });
  }
}

const app = new Main();
app.main();
