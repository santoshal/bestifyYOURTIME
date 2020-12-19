module.exports = (sequelize, Sequelize) => {
    const Favourite = sequelize.define("favourite", {
      
      
    //   quizid :{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'quizes',
    //         key:'id'
    //     }
    // },
    // userid :{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    //     references:{
    //         model:'users',
    //         key:'id'
    //     }
    // },    
     status:{
        type: Sequelize.BOOLEAN
      }
      
      
    },
    
    {
      timestamps: false
  } );
  
    return Favourite;
  };