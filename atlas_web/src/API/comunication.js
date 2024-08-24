import axios from 'axios';
const API = "http://localhost:8090/api/readers";
// Função pra inserir o usuário no Banco de dados chamando a API usando Promises
export default function sendPOST(user) {
  // Retorno a Promise na função pra esperar do outro lado
  return axios
    .post(API, user)
    .then((response) => {
      // console.log(`STATUS CODE IS ${response.status}`);
      return response.status
    })
    .catch((error) => {
      // console.log(`ERROR ${error.response.status} - ${error.response.data}`);
      return error.response.status
    });
}

