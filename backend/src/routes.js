const express = require('express');

const userInfoController = require("./controllers/userInfoController");

const routes = express.Router();

routes.post("/user/signup", userInfoController.signUp);
routes.post("/user/signin", userInfoController.signIn);

module.exports = routes;