function Personne(id, nom, prenom, pays) {
  this.id = id;
  this.nom = nom;
  this.prenom = prenom;
  this.pays = pays;
}

Personne.prototype.nomComplet = function () {
  return this.prenom + "" + this.nom;
};

const moi = new Personne(2, "lisangola", "christian", "france");

function Professeur(id, nom, prenom, pays, matiereEnseignees, universites) {
  Personne.call(this, id, nom, prenom, pays);
  this.matiereEnseignees = matiereEnseignees;
  this.universites = universites;
}

Professeur.prototype = Object.create(Personne.prototype);
Professeur.prototype.constructor = Professeur;

const tournesol = new Professeur(
  1,
  "Tournesol",
  "Tryphon",
  "Belgique",
  ["Physique", "Chimie"],
  ["Paris 7", "Louvain"]
);

// Professeur.prototype.nomComplet = function () {
//   return this.prenom + " " + this.nom;
// };
