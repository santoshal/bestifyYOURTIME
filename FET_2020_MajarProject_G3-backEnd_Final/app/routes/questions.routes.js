module.exports = app => {
    const questions = require("../controllers/questions.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", questions.create);
    router.post('/addQuestion', questions.addQuestion);
    // router.get("/getby", questions.getBy);
    router.get("/getQuizName", questions.getQuizName);
    // router.get("/getCategoryName", questions.getCategoryName);
    router.get("/getTypeName", questions.getTypeName);
    //Retrieve all Tutorials
    router.get("/", questions.findAll);

    // router.get("/:id", questions.findOne);
  
    app.use('/api/questions', router);
  };