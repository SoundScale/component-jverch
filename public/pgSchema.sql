ALTER DATABASE soundclout CONNECTION LIMIT 0;

SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'soundclout';

DROP DATABASE IF EXISTS soundclout;

CREATE DATABASE soundclout;

\c soundclout;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(100),
    followers VARCHAR(7),
    followStatus BOOLEAN,
    numTracks SMALLINT,
    dp VARCHAR(80),
    premium BOOLEAN
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(100),
    followers INT,
    followStatus BOOLEAN,
    home VARCHAR(255),
    dp VARCHAR(80)
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    artistId INT REFERENCES artists(id),
    description VARCHAR(150)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comText VARCHAR(150),
    userId INT NOT NULL REFERENCES users(id),
    songId INT NOT NULL REFERENCES songs(id),
    songTimeSpot VARCHAR(5),
    timeSincePost SMALLINT
);

CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    comText VARCHAR(150),
    timeSincePost SMALLINT,
    userId INT REFERENCES users(id),
    commentId INT REFERENCES comments(id)
);


