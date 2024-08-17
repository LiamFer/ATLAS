const axios = require("axios");
const API = "http://localhost:8090/api/readers";

let user = {
  name: "catchexception",
  email: "except"
};

// Função pra inserir o usuário no Banco de dados chamando a API usando Promises
axios
  .post(API, user)
  .then((response) => {
    console.log(`STATUS CODE IS ${response.status}`);
  })
  .catch((error) => {
    console.log(`ERROR ${error.response.status} - ${error.response.data}`);
  });
