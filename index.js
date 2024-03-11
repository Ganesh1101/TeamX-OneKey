const express =require('express');
const sequelize=require('./config/db')
const port=3030;
const app=express();
try{
    sequelize.authenticate();
    console.log('Connection established successfully...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
app.get('/',(req,res)=>{
    res.json('Welcome to DCF....')
})
app.listen(port,()=>{
    console.log(`server is running on ${port}.... `);
})