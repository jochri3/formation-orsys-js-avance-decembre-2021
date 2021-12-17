function makeBetween(min, max) {
  return function (val) {
    return val >= min && val <= max;
  };
}

const inRange = makeBetween(18, 100);
console.log(inRange(22));

const isNineties = makeBetween(1900, 2000);
console.log("Is nineties : ", isNineties(1998));

const isNiceWeather = makeBetween(18, 23);
console.log("Nice weather : ", isNiceWeather(30));

const isChildInFrance = makeBetween(0, 17);

console.log("Is child in France : ", isChildInFrance(23));
