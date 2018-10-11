const faker = require('faker');
const fs = require('fs');
const casual = require('casual');

let nameString = 'id,userName,followers,followStatus,numTracks,dp,premium\n';
faker.seed(13579);

const getRandBool = () => Math.random() >= 0.5;

const getRandIntBetween = (min, max) => {
  return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min)) + min);
};


const addHundredThousand = (i) => {
  if (i > 9) {
    return;
  }
  nameString = '';
  for (let j = 1; j <= 100000; j += 1) {
    nameString += `${j + (100000 * i)},${casual.first_name},${`${getRandIntBetween(1, 6)}.${getRandIntBetween(12, 72)}M`},${getRandBool()},${getRandIntBetween(5, 100)},${faker.image.avatar()},${getRandBool()}${'\n'}`;
  }
  fs.appendFile('../data/artists.csv', nameString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved! Iteration: ', i);
    addHundredThousand(i + 1);
    return undefined;
  });
};

fs.writeFile('../data/artists.csv', nameString, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('The header was written!');
  addHundredThousand(0);
  return undefined;
});
