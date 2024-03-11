const  Datatypes =require('sequelize')
const sequelize=require('../config/db');
const User=sequelize.define('users',{
    user_id:{
        type:Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'telemarketer', 'agent', 'product_owner'),
        allowNull: false
    }
});
const createUser=async ()=>{
    await User.sync({force:true})
    console.log('User table created')
}
createUser();
module.exports=User
