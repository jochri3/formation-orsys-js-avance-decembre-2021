function Article(reference, designation, prixHT) {
  this.designation = designation;
  this.reference = reference;
  this.prixHT = prixHT;
}

Article.prototype.calculerPrixTTC = function () {
  return this.prixHT * (this.prixHT * 0.2);
};

Article.prototype.afficher = function () {
  return `${this.designation} - ${this.prixHT}`;
};

const article = new Article(1, "T-shirt", 30);
