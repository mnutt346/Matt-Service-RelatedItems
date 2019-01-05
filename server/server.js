const express = require('express');
const db = require('../db');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3004;
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors())
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

app.get('/related/:id', (req, res, next) => {
  console.log('\nthis should be an id', req.params.id, '\n')
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

