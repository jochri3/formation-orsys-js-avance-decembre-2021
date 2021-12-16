var equipe = ["Messi", "Eto'o", "Henry", "Iniesta", "Xavi", "Busquet"];

const obj = {
  equipe: ["C.Ronaldo", "Benzema", "Modric", "Ascensio", "Ramos"],
  getTeam: function () {
    return this.equipe;
  },
  getTeam2: () => {
    return this.equipe;
  },
  getTeam3: function () {
    return () => this.equipe;
  },
};
