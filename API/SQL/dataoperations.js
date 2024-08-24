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
    let reader = await db
      .request()
      .input("userID", userID)
      .query("SELECT * FROM readers WHERE id = @userID");
    return reader.recordsets;
  } catch (error) {
    console.log(error);
  }
}

// Função pra conferir se o usuário já existe e está cadastrado
async function checkEmail(user) {
  try {
    if (user.email == undefined) {throw new Error('Email is undefined')}
    let db = await sql.connect(configuration);
    let findUser = await db
      .request()
      .input("email", user.email)
      .query("SELECT COUNT(*) FROM readers WHERE email = @email");
    return findUser.recordsets;
  } catch (error) {
    return error;
  }
}

// Função pra adicionar um novo usuário no Banco usando uma Stored Procedure
async function buildUser(user) {
  try {
    let db = await sql.connect(configuration);
    let insertReader = await db
      .request()
      .input("name", user.name)
      .input("email", user.email)
      .input("password", user.password)
      .execute("insertNewReader");
    return insertReader.recordsets;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  buildUser: buildUser,
  checkEmail: checkEmail,
};
