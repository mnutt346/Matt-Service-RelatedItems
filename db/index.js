require("dotenv").config();
const mysql = require("mariadb");
const knex = require("knex")({
  client: "mysql",
  connection: {
    database: "projects",
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: ""
  }
});

// mariadb
//   .createConnection({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
//   })
//   .then(conn => {
//     console.log("Conectado a la base de datos");
//     // conn.destroy();
//   })
//   .catch(err => {
//     console.log("ERROR CONNECTING TO DATABASE: ", err);
//   });

const getRelated = () => {
  console.log("in GET /related");
  return knex.select().from("projects");
};

module.exports = getRelated;
