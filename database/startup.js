const faker = require('faker');
const db = require('./index.js');

const connection = db.connection;

// var name = faker.name.firstName();
// console.log(name);

const loadData = () => {

};

const createArtistData = () => {
    for(var i = 0; i < 99; i++) {
        connection.query(
            `INSERT INTO artists (userName, followers, followStatus, numTracks) VALUES("${faker.name.firstName()}","${Math.random}")`)
    }
};

const createUserData = () => {

};

const createSongData = () => {

};

const createCommentData = () => {

};

const createReplyData = () => {

};