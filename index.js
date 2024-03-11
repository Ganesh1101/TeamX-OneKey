const express =require('express');
const sequelize=require('./config/db');
const userRoutes=require('./routes/userRoutes')
const port=3030;
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try{
    sequelize.authenticate();
    console.log('Connection established successfully...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
app.use ('/api/user',userRoutes);

app.get('/',(req,res)=>{
    res.json('Welcome to DCF....')
})
app.listen(port,()=>{
    console.log(`server is running on ${port}.... `);
})