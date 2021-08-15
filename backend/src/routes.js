const express = require('express');

const userInfoController = require("./controllers/userInfoController");

const routes = express.Router();

routes.post("/user/create", userInfoController.createUser);

module.exports = routes;