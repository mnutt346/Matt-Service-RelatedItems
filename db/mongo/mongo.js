require("dotenv").config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://localhost:27017/projects",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(err => {
    console.log("ERROR CONNECTING TO DB: ", err);
  });
