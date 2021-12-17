function makeGreeting(lang) {
  return function (fname, lname) {
    if (lang === "es") {
      console.log(`Hola ${fname} ${lname}`);
    }
    if (lang === "en") {
      console.log(`Hello ${fname} ${lname}`);
    }
  };
}

const greetInEnglish = makeGreeting("en");
const greetInSpanish = makeGreeting("es");


