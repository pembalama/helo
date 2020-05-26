CREATE TABLE helo_users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE,
    password VARCHAR (20),
    profile_pic TEXT
);

CREATE TABLE helo_posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES helo_users(id)
);

INSERT INTO helo_users
(username,password,profile_pic)
VALUES('abc','abc','https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');

INSERT INTO helo_users
(username,password,profile_pic)
VALUES('bca','bca','https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
RETURNING *;

INSERT INTO helo_posts
(title,img,content,author_id)
VALUES('hello','https://images.unsplash.com/photo-1585856231313-7d7a30d64a50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80','Hello from this side!',1);