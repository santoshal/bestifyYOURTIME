module.exports = (app) => {
  const fav = require("../controllers/status.controller");

  var router = require("express").Router();

  //Create a new Tutorial
  router.post("/", fav.create);

  //Retrieve all Tutorials
  router.get("/allque/:id", fav.findAll);

  // // Retrieve all published Tutorials
  //  router.get("/favourite/:id/:qid", fav.findOne);

  // // // Retrieve a single Tutorial with id
  // // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  //  router.put("/:id", fav.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
 router.delete("/:qId/:uId", fav.deleteAll);
  
  router.put("/", fav.update);
  router.get("/:uid/:qid", fav.findOne);
  app.use("/api/status", router);
};
