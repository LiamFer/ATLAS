const dataoperations = require("./SQL/dataoperations");
let User = require("./src/user");

// Criando a API com express e configurando
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

// Routes ------------------------------

// Primeira Route a ser executada antes das outras
router.use((request, response, next) => {
  console.log("alalala");
  next();
});

// Request pra voltar todos os leitores no Banco de dados
router.route("/readers").get((request, response) => {
  dataoperations.getUsers().then((result) => {
    response.json(result[0]);
  });
});

// Request pra conseguir informações sobre um leitor especifico
router.route("/readers/:userID").get((request, response) => {
  dataoperations.getUser(request.params.userID).then((result) => {
    response.json(result[0]);
  });
});

// POST pra inserir info no banco
router.route("/readers").post((request, response) => {
  let user = { ...request.body };
  dataoperations.buildUser(user).then((result) => {
    // Resposta pro Client
    if (Array.isArray(result)) {
      response.status(201).json(result);
    } else {
      response.status(400).send("User wasnt able to be created by the system.");
    }
  });
});

let port = process.env.PORT || 8090;
app.listen(port);
console.log(`The API is running on port ${port}`);
