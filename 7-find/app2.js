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

const christian = contacts.find(function (contact) {
  return contact.id === 1;
});
console.log(christian);
