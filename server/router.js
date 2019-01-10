const express = require("express");
const router = express.Router();
const getRelated = require("../db/index.js");

router.get("/related", (req, res) => {
  console.log("in router GET /related");
  getRelated()
    .then(results => {
      console.log(results);
      res.send(results);
    })
    .catch(err => {
      console.log("ERROR IN GET /related FUCK! :", err);
    });
});

// router.get("/related/:id", (req, res, next) => {
//   getRelated(related => {
//     res.send(related.rows);
//   });
// });

module.exports = router;
