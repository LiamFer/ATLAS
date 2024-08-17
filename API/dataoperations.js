// Aqui é onde tenho as Funções que fazem as Queries no DB
let configuration = require("./sqlconfig");
const sql = require("mssql");


// Função que retorna todos os Leitores registrados
async function getUsers() {
  try {
    let db = await sql.connect(configuration);
    let readers = await db.request().query("SELECT * FROM readers");
    return readers.recordsets;
  } catch (error) {
    console.log(error);
  }
}

// Função pra retornar um usuário em específico pelo seu ID
async function getUser(userID) {
  try {
    let db = await sql.connect(configuration);
    let reader = await db.request().input("userID",userID).query("SELECT * FROM readers WHERE id = @userID");
    return reader.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
};
