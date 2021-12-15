const nombres = [1, 2, 3, 4, 12, 25, 19, 59];

const greaterThan12 = nombres.some(function (nombre) {
  return nombre > 12;
});

console.log(greaterThan12);

const lowerThan4 = nombres.every(function (nombre) {
  return nombre < 4;
});

console.log(lowerThan4);
