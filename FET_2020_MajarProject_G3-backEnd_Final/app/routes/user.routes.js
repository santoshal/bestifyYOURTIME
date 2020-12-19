module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const login = require("../controllers/login.controller.js");
    var router = require("express").Router();
    var jwt =require('jsonwebtoken');
    
    // Create a new Tutorial
    router.post("/", users.create);

    //login Controller
    router.post("/login",login.check);
  
    router.get('/userData',login.verifyToken);
    
   
    router.post('/password',login.updatepassword);
 
  
    app.use('/api/user', router);
  };