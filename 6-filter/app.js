const fruits = ["pommes", "mangues", "ananas", "oranges"];

const fruitContenantM = [];

// Impérative
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].includes("m")) {
    fruitContenantM.push(fruits[i]);
  }
}

console.log("sans filter", fruitContenantM);

const fruitContenantM2 = fruits.filter(function (fruit) {
  return fruit.includes("m");
});

console.log("avec filter : ", fruitContenantM2);
