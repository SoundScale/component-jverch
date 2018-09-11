const express = require('express');
const model = require('../database/models.js');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'../client/dist/index.html')));

app.get('/songs/:songid', (req, res) => {
  model(res, req.params.songid);
});


app.listen(3001, () => console.log('Listening on port 3001'));
