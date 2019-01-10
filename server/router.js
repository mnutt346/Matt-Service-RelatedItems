const express = require("express");
const router = express.Router();
const { getRelated } = require("../db/index.js");

router.get("/related", (req, res, next) => {
  getRelated(related => {
    res.send(related.rows);
  });
});

router.get("/related/:id", (req, res, next) => {
  getRelated(related => {
    res.send(related.rows);
  });
});
