import { User } from "./models/user.js";

const titre = document.querySelector("#main_title") as HTMLElement;
titre.innerText = "Zozor";

const googleLink = document.querySelector("#google") as HTMLAnchorElement;
googleLink.href = "http://google.fr";

const searchField = document.querySelector("#recherche") as HTMLInputElement;
const searchValue = searchField.value;

const form = document.querySelector("#form") as HTMLFormElement;

form.addEventListener("submit", (e: Event): void => {
  e.preventDefault();
  alert("Oyeeeeee");
});

const user = new User("Christian", "Lisangola");
// console.log(user);
console.log("Papyyy");
