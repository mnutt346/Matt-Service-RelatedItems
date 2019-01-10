require("dotenv").config();
const mariadb = require("mariadb");
// const knex = require("kenx")({
//   client: "mysql",
//   connection: {
//     database: "projects",
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER
//   }
// });

mariadb
  .createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  })
  .then(conn => {
    console.log("Conectado a la base de datos");
    // conn.destroy();
  })
  .catch(err => {
    console.log("ERROR CONNECTING TO DATABASE: ", err);
  });

const getRelated = cb => {
  mariadb.query("SELECT * FROM projects", (err, results) => {
    if (err) {
      console.log("ERROR IN GET RELATED: ", err);
      cb(err);
    } else {
      cb(results);
    }
  });
};

module.exports = {
  getRelated
};
