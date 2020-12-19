const db = require("../models");
const { favourite } = require("../models");
const Tutorial = db.favourite;

const Op = db.Sequelize.Op;
exports.findOne= (req, res) => {
    const id = req.params.id;
    const quid=req.params.qid;
    Tutorial.findOne({
        where: { quizeId:quid, userId:id } })
    .then(data => {
      res.send(data);
      console.log(data);
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const updateedStatus=req.body.status;
const userid=req.body.userId;

console.log(updateedStatus);
    Tutorial.update( 
        { status: updateedStatus },
        { where: { quizeId: id,userId:userid } }
      ).then(function(rowsUpdated) {
        res.send(rowsUpdated)
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Create and Save a new fav
exports.create = (req, res) => {
    // Validate request
    if (!req.body.quizid) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
     return;
   }
 
   // Create a fav
   const tutorial = {
     quizeId: req.body.quizid,
     userId: req.body.userid,
     status: req.body.status
   };
 
   // Save fav in the database
   Tutorial.create(tutorial)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     });
 };

exports.findAll=(req,res) => {
    const id=req.params.id;
    console.log("ds");
    return Tutorial.findAll({
      include: ["quizs"],
      where: {userId:id,status:true}
    } ).then(data => {
        res.send(data);
        console.log(data);
        
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  