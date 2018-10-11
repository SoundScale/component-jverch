const faker = require('faker');
const fs = require('fs');
const casual = require('casual');

let nameString = 'id,comText,timeSincePost,userId,commentId\n';
faker.seed(13579);

const getRandBool = () => Math.random() >= 0.5;

const getRandIntBetween = (min, max) => {
  return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min)) + min);
};

const addOneMillion = (i) => {
  if (i > 24) {
    return;
  }
  nameString = '';
  for (let j = 1; j <= 1000000; j += 1) {
    nameString += `${j + (1000000 * i)},${casual.sentence},${getRandIntBetween(1, 60)},${getRandIntBetween(1, 20000000)},${getRandIntBetween(1, 50000000)}${'\n'}`;
  }
  fs.appendFile('../data/replies.csv', nameString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved! Iteration: ', i);
    addOneMillion(i + 1);
    return undefined;
  });
};

fs.writeFile('../data/replies.csv', nameString, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('The header was written!');
  addOneMillion(0);
  return undefined;
});
