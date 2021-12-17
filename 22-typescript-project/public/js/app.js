import { User } from "./models/user.js";
const titre = document.querySelector("#main_title");
titre.innerText = "Zozor";
const googleLink = document.querySelector("#google");
googleLink.href = "http://google.fr";
const searchField = document.querySelector("#recherche");
const searchValue = searchField.value;
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Oyeeeeee");
});
const user = new User("Christian", "Lisangola");
// console.log(user);
console.log("Papyyy");
