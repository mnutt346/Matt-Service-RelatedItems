const express = require("express");
const router = express.Router();
const getRelated = require("../db/index.js");

router.get("/related", (req, res) => {
  getRelated()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      console.log("ERROR IN GET /related FUCK! :", err);
      res.status(500).send("GET related projects FAILED");
    });
});

// router.get("/related/:id", (req, res, next) => {
//   getRelated(related => {
//     res.send(related.rows);
//   });
// });

module.exports = router;
