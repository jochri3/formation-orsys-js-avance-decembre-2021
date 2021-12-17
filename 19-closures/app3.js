function Personne() {
  let nom = "";
  let prenom = "";
  return {
    getNom() {
      return nom;
    },
    setNom(valeur) {
      nom = valeur;
    },
    getPrenom() {
      return prenom;
    },
    setPrenom(valeur) {
      prenom = valeur;
    },
    init(nouveauNom, NouveauPrenom) {
      nom = nouveauNom;
      prenom = NouveauPrenom;
    },
  };
}
