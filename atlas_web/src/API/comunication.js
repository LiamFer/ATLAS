import axios from 'axios';
const API = "http://localhost:8090/api";

// Função pra inserir o usuário no Banco de dados chamando a API usando Promises
export function sendPOST(user) {
  // Retorno a Promise na função pra esperar do outro lado
  return axios
    .post(API+'/readers', user)
    .then((response) => {
      // console.log(`STATUS CODE IS ${response.status}`);
      return response.status
    })
    .catch((error) => {
      // console.log(`ERROR ${error.response.status} - ${error.response.data}`);
      return error.response.status
    });
}

// Função pra conferir se algum usuário já está cadastrado com este Email
export function checkEmail(email) {
  // Retorno a Promise na função pra esperar do outro lado
  return axios
    .get(`${API}/checkemail/${email}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error.response.status
    });
}

