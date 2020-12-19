module.exports = (app) => {
  const scr = require("../controllers/score.controller");

  var router = require("express").Router();

  router.get("/:id", scr.getMaxScore);
  router.post("/", scr.setScore);

  app.use("/api/sc", router);
};
