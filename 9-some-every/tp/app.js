const email = document.querySelector("#email");
const noms = document.querySelector("#noms");
const motDePasse = document.querySelector("#mdp");
const message = document.querySelector("#message");

const champsFormulaire = [email, noms, motDePasse];

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  message.innerText = "";
  const auMoinUnChampVide = champsFormulaire.some(function (champ) {
    return !champ.value;
  });

  if (auMoinUnChampVide) {
    message.innerText = "Certains champs sont vides,veuillez les remplir svp";
    message.setAttribute("class", "erreur");
  } else {
    message.innerText =
      "Félicitation,les données ont ont été soumis vers le serveur";
    message.removeAttribute("class");
    message.setAttribute("class", "succes");

    setTimeout(function () {
      message.innerText = "";
      message.removeAttribute("class");
    }, 4000);
  }
});
