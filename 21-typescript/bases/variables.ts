// Annotation de type
let nombre: number;
nombre = 1;

let names: string;
names = "Christian Lisangola";

let isMarried: boolean;
isMarried = true;
isMarried = false;
isMarried = 10 > 7;

// Inférence
let age = 25;
// age = "papa";
// age = true;

// arrays
const numbers: number[] = [1, 2, 3];
const colors: string[] = ["red", "yellow", "indigo"];
const truths: boolean[] = [true, false, 10 > 5];
const noms: Array<string> = ["Chrsitian", "Jean", "Alain"];

// plusieurs types possible
let annee: string | number = 45;
annee = "34";
annee = true;
