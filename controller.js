const fs = require('fs');
const User=require('./model');

exports.getAllUsers=async (req, res) => {
    try{
        const users=await User.find();

        res.status(200).json({
          status: 'success',
          results: users.length,
          data: {
              users
          }
        });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
  
};

exports.getUser= async(req, res) => {
    try{
        // const users=await User.findById(req.params.id);
        const user=await User.findOne({Email:req.params.email});
        if(!user){
            console.log(req.params);
            throw new Error("User does not exits");
        }
        console.log(user._id);
        // console.log(user);

        res.status(200).json({
          status: 'success',
          data: {
              user
          }
        });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message:err.message
        })
    }
};

exports.createUser =async (req, res) => {
    try{
        const newUser=await User.create(req.body);
  
        res.status(201).json({
          status: 'success',
          data: {
            user: newUser
          }
        });
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }

    
};

exports.updateUser =async (req, res) => {
    try{
        const temp=await User.findOne({Email:req.params.email});
        if(!temp){
            console.log(req.params);
            throw new Error("User does not exits");
        }
        
       const user=await User.findByIdAndUpdate(temp._id,req.body,{
        new:true,
        runValidators:true
        });
        res.status(200).json({
            status: 'success',
            data: {
              user
            }
        });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message:err.message
        })
    }
 
};

exports.deleteUser =async (req, res) => {
    try{
        const temp=await User.findOne({Email:req.params.email});
        if(!temp){
            console.log(req.params);
            throw new Error("User does not exits");
        }

        await User.deleteOne({Email:req.params.email});
        res.status(204).json({
            status: 'success',
            data: null
          });
    }catch(err){
        res.status(404).json({
            status:"fail",
            message:err.message
        })
    }
  
};