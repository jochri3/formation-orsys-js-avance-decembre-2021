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

const ageSupeA20 = contacts.filter(function (contact) {
  return contact.age > 20;
});

const ageSupeA20EtAdressYahoo = contacts.filter(function (contact) {
  return contact.age > 20 && contact.email.includes("yahoo");
});

console.log("Age supérieur à 20 : ", ageSupeA20);

console.log("Age supérieur à 20 et yahoo : ", ageSupeA20EtAdressYahoo);
