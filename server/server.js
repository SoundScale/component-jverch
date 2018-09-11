const express = require('express');
const model = require('../database/models.js');

const app = express();

app.get('/songs/:songid', (req, res) => {
  model(res, req.params.songid);
});


app.listen(3001, () => console.log('Listening on port 3001'));
