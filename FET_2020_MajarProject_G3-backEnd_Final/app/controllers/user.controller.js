const db = require("../models");
const User = db.users;
const crypto = require('../crypto');
const Op = db.Sequelize.Op;
var hash;
var hash1;
var p;
// Create and Save a new User
exports.create = (req, res) => {
   // Validate request
   
   console.log(req.body);
   if (req.body.fullname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  p = req.body.password;
  hash = crypto.encrypt(p);
  console.log(hash);
  hash1 = crypto.decrypt(hash);
  console.log("Decrypt ",hash1);
  // Create a User
  const user = {
      
    username: req.body.fullName,
    email: req.body.email,
    password : hash,
    roleid : 2

  };
  console.log("User =>"+user.username, user.email , user.password, user.roleid);

  // Save User in the database
  User.create(user)
    .then(data => {
      console.log(data);
      res.json("Registration");
    })
    .catch(err => {
      res.json("Validation error");
    });
};