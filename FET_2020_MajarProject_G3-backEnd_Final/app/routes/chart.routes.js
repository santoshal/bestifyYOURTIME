module.exports = app => {
    const chart = require("../controllers/chart.controller");
  
    var router = require("express").Router();
  
  
    //Retrieve all Tutorials
    router.get("/", chart.findAll);
  
    
   
    app.use('/api/chart', router);
  };