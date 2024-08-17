const dataoperations = require("./dataoperations");
let User = require("./user");

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

// Primeira Route a ser executada antes das outras
router.use((request, response, next) => {
  console.log("alalala");
  next();
});


router.route("/readers").get((request, response) => {
  dataoperations.getUsers().then((result) => {
    response.json(result[0])
  });
});

// Quando o cara for
router.route("/readers/:userID").get((request, response) => {
  dataoperations.getUser(request.params.userID).then((result) => {
    response.json(result[0])
  });
});



let port = process.env.PORT || 8090;
app.listen(port);
console.log(`The API is running on port ${port}`);
