const nom = "jean";
const prenom = "Toto";
const age = 45;
const paysNaissance = "France";
// Sans template string
console.log(
  "Vous vous appelez " +
    prenom +
    " " +
    nom +
    ",vous êtes nés en " +
    paysNaissance +
    ".Et vous avez " +
    age +
    " ans"
);

// Avec template string
console.log(
  `Vous vous appelez ${prenom} ${nom},vous êtes nés en ${paysNaissance} .Et vous avez ${age} ans`
);
