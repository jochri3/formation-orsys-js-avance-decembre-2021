interface IPerson {
  id: number;
  nom: string;
  prenom: string;
  fullName: (a: string) => void;
}

const personne: IPerson = {
  id: 12,
  nom: "Le Grand",
  prenom: "Alexandre",
  fullName: () => {
    console.log("papy");
  },
};

function printPerson(person: IPerson): void {
  console.log(
    `Vous vous appelez ${person.prenom + " " + person.nom} et votre id est ${
      person.id
    }`
  );
}

function printPerson2({ id, nom, prenom }: IPerson): void {
  console.log(`Vous vous appelez ${prenom + " " + nom} et votre id est ${id}`);
}

printPerson(personne);
printPerson2(personne);

// Tableaux d'objets
const personnes: IPerson[] = [];

// personnes.push({ id: 4, nom: "sdfhkdsfh", prenom: "ddhdj" }); error parce que pas de méthode fullName()
