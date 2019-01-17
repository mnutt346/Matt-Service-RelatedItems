require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const router = require("./router.js");
const port = process.env.PORT || 3004;
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(router);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
