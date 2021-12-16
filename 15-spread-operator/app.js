// Cas des tableaux
const fruits = ["pommes", "bananes", "mangues"];

const fruits2 = ["cc", ...fruits, "aa", "bb"];

const bresiliensRealMadrid = ["Ronaldo", "Roberto Carlos", "Flavio Concecao"];
const bresiliensFCBarcelone = ["Ronalinho", "Silvinho", "Belleti", "Edmilson"];
const bresiliensMilanAC = ["Rivaldo", "Kaka"];

// ES5
const equipeBresil = bresiliensRealMadrid.concat(
  bresiliensFCBarcelone.concat(bresiliensMilanAC)
);

// ES6
const equipeBresil2 = [
  ...bresiliensRealMadrid,
  ...bresiliensFCBarcelone,
  ...bresiliensMilanAC,
];

// Cas des objets
const maFamille = { nom: "Lisangola", pays: "France" };

const maFamilleCopieReference = maFamille;

const maFamilleCopieReference = {
  pays: "Italie",
  ...maFamille,
  ville: "Paris",
};
