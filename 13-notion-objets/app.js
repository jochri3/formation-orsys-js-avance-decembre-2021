const obj = {
  equipe: ["C.Ronaldo", "Benzema", "Modric", "Ascensio", "Ramos"],
  getTeam() {
    return this.equipe;
  },
};

const data = {
  email: "christian@gmail.com",
  mdp: "1234",
  username: "chris",
};
const url = "https://api.monsite.com/users";


function creeUtilisateurES5() {
 $.ajax({
   data,
   url,
   method: 'POST',
   success:function(){},
   error():function(){}
 });
}
