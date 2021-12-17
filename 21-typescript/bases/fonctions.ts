// ==
function somme(nombre1: number, nombre2: number): number {
  return nombre1 + nombre2;
}
somme(23, 56);

// ===
function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

const sayGoodBye = (name: string): void => {
  console.log("Good bye");
};

// default param

function f(a: string, b: string = "papy") {
  console.log(a, b);
}

f("Zozor");


