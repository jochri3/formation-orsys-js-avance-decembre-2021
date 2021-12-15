const fruits = ["pomme", "mangue", "anana", "orange"];

// Avec map
// const fruitsPluriel = fruits.map(function (fruit) {
//   return fruit + "s";
// });

const fruitsPluriel = fruits.reduce(function (liste, fruit) {
  liste.push(fruit + "s");
  return liste;
}, []);

console.log("fruitsPluriel : ", fruitsPluriel);

const fruitsAvecM = fruits.reduce(function (liste, fruit) {
  if (fruit.includes("m")) {
    liste.push(fruit);
  }
  return liste;
}, []);

console.log("Fruits avec M : ", fruitsAvecM);
