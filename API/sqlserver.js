const sql = require("mssql/msnodesqlv8");
let config = {
  server: "DESKTOP-REPU2M4\\SQLEXPRESS",
  database: "Atlas",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

sql.connect(config, function (err) {
  if (err) console.log(err);
  let request = new sql.Request();
  request.query("INSERT INTO readers (name,email) values ('Thiago','teste@gmail.com')", function (err, records) {
    if (err) console.log(err);
    else console.log(records);
  });

  request.query("select * from readers", function (err, records) {
    if (err) console.log(err);
    else console.log(records);
  });

});
