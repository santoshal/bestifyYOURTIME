module.exports = (sequelize, Sequelize) => {
    const Quize = sequelize.define("quize", {
      quizname: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.INTEGER
      },
      count:{
        type: Sequelize.INTEGER
      }
    //   ,
    //   categoryid :{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'categories',
    //         key:'id'
    //     }
    // }
      
      
    },
    
    {
      timestamps: false
  });
  
    return Quize;
  };