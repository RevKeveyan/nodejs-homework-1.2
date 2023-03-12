require('dotenv').config(); // verevy dnenq vor ashxti

const express = require('express');

const app = express();
const {PORT, HOST} = require('./constants');
const {getUsers, getUser} = require('./controllers/UserController');
const {getComments,getComment} = require('./controllers/CommentsController');
const {getPosts,getPost, getPostById} = require('./controllers/PostsController');


app.get('/users', getUsers);
app.get('/users/:id', getUser);
app.get('/posts', getPosts);
app.get('/comments', getComments);
app.get('/users/:userId/posts', getPost);
app.get('/users/:userId/posts/:postId', getPostById);
app.get('/users/:userId/posts/:postId/comments', getComment);


app.listen(PORT, ()=>{
    console.log(`http://${HOST}${PORT}`);
});