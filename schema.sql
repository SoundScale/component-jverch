DROP DATABASE soundcloud;
CREATE DATABASE soundcloud;

USE soundcloud;

CREATE TABLE artists (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(20),
    followers INT,
    followStatus BOOLEAN,
    numTracks INT,
    dp LONGBLOB,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(20),
    followers INT,
    followStatus BOOLEAN,
    home VARCHAR(50),
    dp LONGBLOB,
    PRIMARY KEY (id)
);

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    artistId INT,
    description VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (artistId)
        REFERENCES artists (id)
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    comText VARCHAR(255),
    userId INT NOT NULL,
    songId INT NOT NULL,
    songTimeSpot TIME,
    timeSincePost INT,     
    PRIMARY KEY (id),
    FOREIGN KEY (userId)
        REFERENCES users (id),
    FOREIGN KEY (songId)
        REFERENCES songs (id)
);

CREATE TABLE replies (
    id INT NOT NULL AUTO_INCREMENT,
    replyText VARCHAR(255),
    timeSincePost INT,
    userId INT,
    commentId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (userId)
        REFERENCES users (id),
    FOREIGN KEY (commentId)
        REFERENCES comments (id)
);


