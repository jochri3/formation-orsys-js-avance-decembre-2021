const contacts = [
  {
    id: 1,
    nom: "Lisangola",
    prenom: "Christian",
    email: "christian.lisangola@gmail.com",
    age: 12,
  },
  {
    id: 2,
    nom: "Madesu",
    prenom: "Jean-Paul",
    email: "jp.madesu@gmail.com",
    age: 22,
  },
  {
    id: 3,
    nom: "Rashidi",
    prenom: "Lydie",
    email: "lydie.rashidi@yahoo.fr",
    age: 43,
  },
  {
    id: 4,
    nom: "Matondo",
    prenom: "Jules",
    email: "jules@yahoo.com",
    age: 10,
  },
];

// Combiner le nom et le prenom
const contactsV2 = contacts.map(function (contact) {
  return {
    nomComplet: contact.prenom + " " + contact.nom,
    email: contact.email,
  };
});

console.log(contactsV2);

const noms = contacts.map(function (contact) {
  return contact.nom;
});

console.log(noms);

const test = contacts.map(function (contact) {
  console.log(contact);
});


