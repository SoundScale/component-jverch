const faker = require('faker');
const fs = require('fs');

let nameString = 'id,userName,followers,followStatus,home,dp\n';
faker.seed(13579);

const getRandBool = () => Math.random() >= 0.5;

const getRandIntBetween = (min, max) => {
  return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min)) + min);
};

const addOneMillion = (i) => {
  if (i > 19) {
    return;
  }
  nameString = '';
  for (let j = 1; j <= 1000000; j += 1) {
    nameString += `${j + (1000000 * i)},${faker.internet.userName()},${getRandIntBetween(0, 300)},${getRandBool()},${faker.address.state()},${faker.image.avatar()}${'\n'}`;
  }
  fs.appendFile('../data/users.csv', nameString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved! Iteration: ', i);
    addOneMillion(i + 1);
    return undefined;
  });
};

fs.writeFile('../data/users.csv', nameString, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('The header was written!');
  addOneMillion(0);
  return undefined;
});
