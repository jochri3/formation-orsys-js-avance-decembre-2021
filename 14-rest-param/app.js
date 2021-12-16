function maFonction(a, b, ...rest) {
  console.log(a, b);
  console.log("rest : ", rest);
}

function somme(...nombres) {
  return nombres.reduce((acc, element) => acc + element, 0);
}
