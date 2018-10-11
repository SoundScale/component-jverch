ALTER DATABASE soundclout CONNECTION LIMIT 0;

SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'soundclout';

DROP DATABASE IF EXISTS soundclout;

CREATE DATABASE soundclout;

\c soundclout;

CREATE TABLE artists (
    id INT PRIMARY KEY,
    userName VARCHAR,
    followers VARCHAR,
    followStatus BOOLEAN,
    numTracks SMALLINT,
    dp VARCHAR,
    premium BOOLEAN
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    userName VARCHAR,
    followers INT,
    followStatus BOOLEAN,
    home VARCHAR,
    dp VARCHAR
);

CREATE TABLE songs (
    id INT PRIMARY KEY,
    title VARCHAR,
    artistId INT,
    description VARCHAR
);

CREATE TABLE comments (
    id INT,
    comText VARCHAR,
    userId INT,
    songId INT,
    songTimeSpot VARCHAR,
    timeSincePost SMALLINT,
    PRIMARY KEY (id, songId)
);

CREATE TABLE replies (
    id INT,
    comText VARCHAR,
    timeSincePost SMALLINT,
    userId INT,
    commentId INT,
    PRIMARY KEY (id, commentId)
);


