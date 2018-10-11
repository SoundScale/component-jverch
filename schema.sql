
CREATE DATABASE commentsBig;

USE commentsBig;

CREATE TABLE artists (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(100),
    followers VARCHAR(7),
    followStatus BOOLEAN,
    numTracks TINYINT,
    dp VARCHAR(2083),
    premium BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(100),
    followers INT,
    followStatus BOOLEAN,
    home VARCHAR(255),
    dp VARCHAR(2083),
    PRIMARY KEY (id)
);

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    artistId INT,
    description VARCHAR(2083),
    PRIMARY KEY (id),
    FOREIGN KEY (artistId)
        REFERENCES artists (id)
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    comText VARCHAR(2083),
    userId INT NOT NULL,
    songId INT NOT NULL,
    songTimeSpot VARCHAR(5),
    timeSincePost INT,     
    PRIMARY KEY (id),
    FOREIGN KEY (userId)
        REFERENCES users (id),
    FOREIGN KEY (songId)
        REFERENCES songs (id)
);

CREATE TABLE replies (
    id INT NOT NULL AUTO_INCREMENT,
    comText VARCHAR(2083),
    timeSincePost INT,
    userId INT,
    commentId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (userId)
        REFERENCES users (id),
    FOREIGN KEY (commentId)
        REFERENCES comments (id)
);


