-- blogProject db

CREATE TABLE authors (
    id serial not null primary key,
    firstName varchar,
    lastName varchar,
    bio varchar,
    imageurl varchar,
    email varchar,
    twitter varchar,
    linkedIn varchar

);

CREATE TABLE blogs (
    postID serial not null primary key,
    title varchar,
    authorID integer,
    isPublished varchar,
    publishDate date,
    FOREIGN KEY (authorID) REFERENCES authors (id)

);