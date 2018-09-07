const faker = require('faker');
const db = require('./index.js');

const connection = db.connection;


const loadData = () => {

};

const createArtistData () => {
    for(var i = 0; i < 99; i++){
        connection.query(
            `INSERT INTO artists (userName, followers, followStatus, numTracks) VALUES("${faker}")`)
    }
};

const createUserData () => {

};

const createSongData () => {

};

const createCommentData () => {

};

const createReplyData () => {

};