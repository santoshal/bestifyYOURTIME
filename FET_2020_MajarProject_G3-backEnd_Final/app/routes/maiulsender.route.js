module.exports = (app) => {
  const mail = require("../controllers/mailnoder.controller.js");

  var router = require("express").Router();

  //Retrieve all Tutorials
  router.post("/", mail.mailsender);

  app.use("/api/mailsend", router);
};
