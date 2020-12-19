module.exports = (app) => {
  const que = require("../controllers/timer.controller.js");

  var router = require("express").Router();

  //Retrieve all Tutorials
  router.get("/:id", que.findOne);
  app.use("/api/timer", router);
};
