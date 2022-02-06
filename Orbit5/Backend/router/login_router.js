const express = require("express");
const loginController = require("./../controller/login");
const loginRouter = express.Router();
// POST
// localhost:8000/v1/member

loginRouter
  .route("/email")
  .get(loginController.getEmail)
  .post(loginController.addEmail);

module.exports = loginRouter;
