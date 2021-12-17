const express = require("express");
const { read } = require("fs");

const app = express();

const contacts = [
  {
    id: 1,
    fname: "Christian",
    lname: "Lisangola",
    email: "christian.lisangola@gmail.com",
    phoneNumber: "+33792669410",
    address: "3 rue de la gare",
  },
  {
    id: 2,
    fname: "Sarah",
    lname: "Blbabla",
    email: "blablasarah@gmail.com",
    phoneNumber: "+33792669410",
    address: "12 rue de la gare",
  },
  {
    id: 3,
    fname: "Jackson",
    lname: "Tototo",
    email: "jackson.lisangola@gmail.com",
    phoneNumber: "+33777777777",
    address: "Somewhere",
  },
  {
    id: 4,
    fname: "Anika",
    lname: "Skinner",
    email: "qyrohig@training.com",
    phoneNumber: "+3379932856",
    address: "Sit in eos voluptat",
  },
  {
    id: 5,
    fname: "Charlotte",
    lname: "William",
    email: "xumu@training.com",
    phoneNumber: "+3378100895",
    address: "Qui libero sint mag",
  },
  {
    id: 6,
    fname: "Linus",
    lname: "Stafford",
    email: "kuwuqyhico@training.com",
    phoneNumber: "+3378141562",
    address: "Voluptatem Laborum",
  },
  {
    id: 7,
    fname: "Suki",
    lname: "Coffey",
    email: "wukodu@training.com",
    phoneNumber: "+3373620701",
    address: "Tempore hic soluta ",
  },
  {
    id: 8,
    fname: "Hector",
    lname: "Holt",
    email: "piranupug@training.com",
    phoneNumber: "+3379215050",
    address: "Qui quis dolor in vo",
  },
];

app.use(express.json());

function auth(req, res, next) {
  if (req.headers.authorization && req.headers.authorization === "abcdef") {
    next();
  } else {
    res
      .status(401)
      .json("Vous n'êtes pas autorisés à accéder à cette ressource");
  }
}

function direBonjour(req, res, next) {
  console.log("Je suis le middleware Bonjour!!!");
  req.messageBonjour = "Bonjour";
  next();
}

function direBonsoir(req, res, next) {
  console.log("Je suis le middleware Bonsoir!!!");
  req.messageBonsoir = "Bonsoir";
  next();
}

app.get("/api/contacts", [direBonjour, direBonsoir], (req, res) => {
  res.json(contacts);
});

app.get("/api/contacts/:id", (req, res) => {
  const id = req.params.id;
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  res.json(contact);
});

app.post("/api/contacts", (req, res) => {
  const body = req.body;
  body.id = Math.floor(Math.random() * 1000) + 1;
  contacts.push(body);
  res.sendStatus(201);
});

app.put("/api/contacts/:id", auth, (req, res) => {
  const id = req.params.id;
  const index = contacts.findIndex((contact) => contact.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json("not found");
  }
  contacts[index] = req.body;
  res.status(200).json("Contact modifié avec succès");
});

app.delete("/api/contacts/:id", auth, (req, res) => {
  const id = req.params.id;
  const index = contacts.findIndex((contact) => contact.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json("not found");
  }
  contacts.splice(index, 1);
  res.status(200).json("Contact supprimé avec succès");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
