const express = require('express');
const path = require('path');
const cors = require('cors');
const model = require('../database/models.js');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('/api/:songid', (req, res) => {
  console.log(__dirname);
  model(res, req.params.songid);
});


app.listen(3001, () => console.log('Listening on port 3001'));
