require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "projects",
      host: process.env.DB_HOST,
      user: process.env.DB_USER
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }
};
