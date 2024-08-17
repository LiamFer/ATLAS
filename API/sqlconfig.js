// Arquivo de Configuração pra conectar com o Banco SQL SERVER
const config = {
  user: "atlas",
  password: "atlasapi",
  server: "DESKTOP-REPU2M4\\SQLEXPRESS",
  database: "Atlas",
  options: {
    trustServerCertificate: true,
    enableArithPort: true,
    instancename: "SQLEXPRESS",
  },
  // Pensa em um trabalho pra configurar essa Porta no PC kkkkk
  port: 1433
};
module.exports = config;
