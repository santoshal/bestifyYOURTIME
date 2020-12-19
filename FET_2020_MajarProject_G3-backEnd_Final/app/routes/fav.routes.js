module.exports = (app) => {
  const fav = require("../controllers/fav.controller.js");

  var router = require("express").Router();

  //Create a new Tutorial
  router.post("/", fav.create);

  //Retrieve all Tutorials
  router.get("/:id", fav.findAll);

  // Retrieve all published Tutorials
  router.get("/favourite/:id/:qid", fav.findOne);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", fav.update);
  router.get("/favourite/:id", fav.findAll);
  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/fav", router);
};
