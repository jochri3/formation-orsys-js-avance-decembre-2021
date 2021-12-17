var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "./models/user.js";
import { UserTemplate } from "./templates/user.template.js";
import { UsersApi } from "./api/api.js";
class Main {
    constructor() {
        this.$usersWrapper = document.querySelector("#users");
        this.usersAPI = new UsersApi("https://jsonplaceholder.typicode.com/users");
        this.users = [];
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            // const usersData = await fetch("https://jsonplaceholder.typicode.com/users")
            //   .then((res) => res.json())
            //   .then((data) => data as IUser[]);
            const usersData = (yield this.usersAPI.getUsers());
            console.log(usersData);
            this.users = usersData.map(({ id, name, address, company, email, phone, username, website }) => new User(id, name, username, email, address, phone, website, company));
            this.users.forEach((user) => {
                const Template = new UserTemplate(user);
                this.$usersWrapper.appendChild(Template.createUserRow());
            });
        });
    }
}
const app = new Main();
app.main();
