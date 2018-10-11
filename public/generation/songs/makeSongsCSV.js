const faker = require('faker');
const fs = require('fs');
const casual = require('casual');

let nameString = 'id,title,artistId,description\n';
faker.seed(13579);

const getRandBool = () => Math.random() >= 0.5;

const getRandIntBetween = (min, max) => {
  return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min)) + min);
};

const addOneMillion = (i) => {
  if (i > 9) {
    return;
  }
  nameString = '';
  for (let j = 1; j <= 1000000; j += 1) {
    nameString += `${j + (1000000 * i)},${faker.commerce.color()} ${faker.hacker.noun()} ${j + (1000000 * i)},${getRandIntBetween(1, 1000000)},${casual.sentence}${'\n'}`;
  }
  fs.appendFile('../data/songs.csv', nameString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved! Iteration: ', i);
    addOneMillion(i + 1);
    return undefined;
  });
};

fs.writeFile('../data/songs.csv', nameString, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('The header was written!');
  addOneMillion(0);
  return undefined;
});
