const fruits = ["pommes", "mangues", "ananas", "oranges"];

const fruitAvecM = fruits.find(function (fruit) {
  return fruit.includes("m");
});

console.log(fruitAvecM);
