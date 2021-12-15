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

function creerLigne(contact) {
  return (
    "<tr><td>" +
    contact.id +
    "</td><td>" +
    contact.nom +
    "</td><td>" +
    contact.prenom +
    "</td><td>" +
    contact.email +
    "</td><td>" +
    contact.age +
    "</td></tr>"
  );
}

const corpDuTableau = document.querySelector("tbody");

contacts.forEach((contact) => {
  const ligneContact = creerLigne(contact);
  corpDuTableau.innerHTML += ligneContact;
  //   corpDuTableau.insertAdjacentHTML("beforeend", ligneContact);
});
