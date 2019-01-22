require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "projects",
      host: process.env.DB_HOST,
      user: process.env.DB_USER || "ubuntu"
    },
    migrations: {
      directory: __dirname + "/migrations"
    }
  }
};
