const mariadb = require("mariadb");

mariadb
  .createConnection({
    user: "betterJumpUser",
    host: "127.0.0.1",
    port: 3306
  })
  .then(conn => {
    console.log("Conectado a la base de datos");
  })
  .catch(err => {
    console.log("ERROR CONNECTING TO DATABASE: ", err);
  });
