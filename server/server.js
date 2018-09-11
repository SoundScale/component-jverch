const express = require('express');

const app = express();

app.get('/songs/:songid', (req, res) => {
  console.log(req.params);
  res.send('hi');
});


app.listen(3001, () => console.log('Listening on port 3001'));