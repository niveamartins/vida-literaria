const express = require('express');

const bookController = require('./controllers/bookController');
const userInfoController = require("./controllers/userInfoController");

const routes = express.Router();

routes.post("/user/signup", userInfoController.signUp);
routes.post("/user/signin", userInfoController.signIn);

routes.get("/books/search", bookController.searchBookbyTitle)

module.exports = routes;