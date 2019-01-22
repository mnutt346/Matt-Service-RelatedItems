require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    database: "projects",
    host: "127.0.0.1",
    user: process.env.DB_USER || "ubuntu"
  }
});

const getRelated = () => {
  console.log("in GET /related");
  const randomId = Math.floor(Math.random() * 10000000);
  const randomIdFiveLess = randomId - 6;
  return knex
    .where("id", "<", randomId)
    .andWhere("id", ">", randomIdFiveLess)
    .select()
    .from("projects")
    .limit(5);
};

module.exports = getRelated;
