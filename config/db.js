const Sequelize=require('sequelize');
const sequelize=new Sequelize('OneKey','root','root',{
    host:'localhost',
    dialect:'mysql'
});

module.exports=sequelize;