const db = require("../models");
const User = db.users;
const crypto = require('../crypto');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const http = require('http');
const expressJwt = require('express-jwt');
let secret = 'some_secret';
var decodedData = "";
var users;
var count;

var token;
// Create and Save a new User
exports.check = (req, res) => {
  console.log("Inside loigin Controller");
  // Create a User
  const loginData = {
       email: req.body.email,
       password : req.body.password
  };

 this.users= db.sequelize.query("SELECT * FROM `users`",{
    model: db.users,
    mapToModel: true
}).then((data)=>{
    this.count = data.length;

    for (let index = 0; index < data.length; index++) 
{
    decryptPassword = crypto.decrypt(data[index].password);
  

    if(data[index].email==loginData.email && decryptPassword==loginData.password)
    {
        var userData = {
            "name": data[index].username,
            "id": data[index].id,
            "email": data[index].email,
            "roleid" : data[index].roleid,
        }
        // console.log("validated USer : "+data[index]);
        token = jwt.sign(userData,secret, {expiresIn: '3h'});
        console.log("token sended = ",token);
        res.status(200).send({token});
        //  res.send({token});
        //res.send(data[index]);
        break;
    }
   
    
}    
if(index > data.length)
{
    console.log(index);
    res.status(404).send("Email or password is incorrect.")
}
}).catch(err => {
    res.status(500).send({
      message:
     err.message || "Email or password is incorrect ."
    });
  });


console.log("user data "+users);
  
};

exports.verifyToken = (req,res,next) =>
{
  let token1 = req.query.token;
  console.log("verifyTokem = "+token1);
  jwt.verify(token1,secret,(err,tokendata)=>{
    if(err)
    {
      console.log("error");
    //   next();
      return res.status(400).send("Invalid Request")
    }
    if(tokendata)
    {
      console.log("tokendata ="+tokendata);
      decodedData = tokendata;
    //   next();
      return res.status(200).send(decodedData);
    }
  })
};

exports.updatepassword = (req,res)=>{
    console.log(req.body);
    const p = req.body.password;
    const passwordEncrypt = crypto.encrypt(p);
    console.log(passwordEncrypt);
    const email = req.body.email;
    console.log(email);
        User.update(
{         password : passwordEncrypt },
        {  where: {email:email}}
        
        ).then((changed_data, rowsupdated) =>{
            console.log(changed_data, rowsupdated)
          res.json(rowsupdated)
        })
        .catch((error) => {
            res.status(500).send({
              message: "Error updating password"
            });
       });
    
    
}