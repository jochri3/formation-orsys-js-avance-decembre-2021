const moi = {
  nom: "lisangola",
  prenom: "christian",
  pays: "France",
  email: "christian.lisangola@gmail.com",
  adresse: {
    rue: "Abc",
    codePostal: "000",
  },
};

// Extraire à un seul niveau
// const { nom, prenom, pays, adresse } = moi;

// Extraire des objets imbriqués
const {
  nom: lastName,
  prenom: firstName,
  pays: country,
  adresse: { rue, codePostal },
} = moi;
