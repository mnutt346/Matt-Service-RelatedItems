require("dotenv").config();
const express = require("express");
const router = express.Router();
const getRelated = require("../db/index.js");
// const model = require("../db/mongo/models.js");

//--------- mongodb route ----------

// router.get("/related", (req, res) => {
//   model.getRelated(async projects => {
//     await res.send(projects);
//   });
// });

//--------- postgres route ---------

router.get("/related", (req, res) => {
  console.log("In router GET /related");
  getRelated().then(results => {
    console.log("RESULTS IN ROUTER GET /related: ", results);
    res.status(200).send(results);
  });
  // .catch(err => {
  //   console.log("ERROR IN GET /related: ", err);
  //   res.status(500).send("GET related projects FAILED", err);
  // });
});

module.exports = router;
