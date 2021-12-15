const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let somme = 0;
for (let nombre of nombres) {
  somme += nombre;
}
console.log("somme : ", somme);

let somme2 = 0;
nombres.forEach(function (nombre) {
  somme2 += nombre;
});
console.log("somme2 : ", somme2);

// Utilisation de reduce
const sommeReduce = nombres.reduce(function (accum, nombre) {
  return accum + nombre;
}, 0);

console.log("Somme reduce : ", sommeReduce);
