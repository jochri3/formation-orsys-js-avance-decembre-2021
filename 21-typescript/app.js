function caculerSomme(a, b) {
  return a + b;
}

const nb1 = document.querySelector("#nombre1");
const nb2 = document.querySelector("#nombre2");
const Somme = document.querySelector("#somme");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Somme.innerText = caculerSomme(parseInt(nb1.value), parseInt(nb2.value));
});
