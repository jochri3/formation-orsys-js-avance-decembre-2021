const fruits = ["pommes", "mangues", "ananas", "oranges"];

// Approche classique
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Array.forEach
fruits.forEach(function (fruit /*, index, arr*/) {
  console.log(fruit);
});
