const express = require('express');
const cors = require('cors');
const db = require('../db');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/related', (req, res, next) => {
  db.query('SELECT name, blurb, fullImg FROM projects', (err, result) => {
    if (err) {
      return next(err)
    } else {
      console.log('success')
      res.send(result.rows)
    }
  })
})

// app.post('/search', (req, res, next) => {
//   console.log(req.body)
//   //db.query('SELECT blurb FROM projects')
// })

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


//app.use(express.static('public'))

