function User(
  nom,
  prenom,
  age,
  pays = "France",
  id = Math.floor(Math.random() * new Date())
) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.pays = pays;
  this.id = id;
}

const moi = new User("Lisangola", "Christian", 29);
console.log(moi);

const lui = new User("Rival", "Sébastien", 34, "Italie", 7);
