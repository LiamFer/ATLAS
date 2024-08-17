// Aqui é onde tenho as Funções que fazem as Queries no DB
let configuration = require("./sqlconfig");
const sql = require("mssql");

async function getUsers() {
  try {
    let db = await sql.connect(configuration);
    let readers = await db.request().query("SELECT * FROM readers");
    return readers.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUsers: getUsers,
};
