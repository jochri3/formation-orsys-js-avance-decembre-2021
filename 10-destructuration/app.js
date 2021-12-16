const moi = {
  nom: "lisangola",
  prenom: "christian",
  pays: "France",
  email: "christian.lisangola@gmail.com",
};

// Avant Destructuration
// console.log(moi.email);
// console.log(moi.nom);

// Avec Destructuration
// extraction du nom et de l'email
let { nom, email, prenom, pays } = moi; //let nom="lisangola"
console.log(nom);
console.log(email);

// fonction : sans Destructuration
function afficherPersonne(personne) {
  console.log(
    `Vous vous appelez ${personne.prenom} ${personne.nom}, votre pays est la ${personne.pays}`
  );
}

// fonction : avec Destructuration
function afficherPersonne2({ prenom, nom, pays }) {
  console.log(`Vous vous appelez ${prenom} ${nom}, votre pays est la ${pays}`);
}
