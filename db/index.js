require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    database: "projects",
    host: process.env.DB_HOST,
    user: process.env.DB_USER
  }
});

const getRelated = () => {
  console.log("in GET /related");
  return knex.select().from("projects");
};

module.exports = getRelated;
