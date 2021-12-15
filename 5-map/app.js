const fruits = ["pommes", "mangues", "ananas", "oranges"];

const fruitsMaj = [];

// Sans map
for (let i = 0; i < fruits.length; i++) {
  fruitsMaj.push(fruits[i].toUpperCase());
}

// Avec map
const fruitsMaj2 = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log(fruitsMaj2);


