const User = require('../models/userModel')

const getAsync= async(req,res)=>{
    try{
        const users=await User.findAll();
        res.status(200).json(users);

    }catch(error){
        res.status(500).json({error:error.message})
    }
    
}
const createAsync=async(req,res)=>{
    try{
        const {user_id,username, password,role }=req.body
        const newUser=await User.create({
            user_id, username, password, role
        });
        res.status(200).json('User created successfully');
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
module.exports={getAsync,createAsync}