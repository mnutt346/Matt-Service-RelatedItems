const express = require('express');
const db = require('../db');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3004;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/related', (req, res, next) => {
  db.query('SELECT * FROM projects', (err, result) => { //name, blurb, fullImg
    if (err) {
      console.log('error', err)
      return next(err)
    } else {
      console.log('success')
      res.send(result.rows)
    }
  })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

