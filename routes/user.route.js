const express = require("express");
const UserModel = require("../models/user.model");
// const ProductModel = require("../model/product.model");

const userRouter = express.Router();

userRouter.get("/get-user", async (req,res)=>{
    try{
        const users = await UserModel.find();
        res.send(users);
    }
    catch(error){
        res.send(error.message)
    }
});

userRouter.post("/create-user", async (req,res)=>{
    const{name,age,gender,mobile} = req.body;
    try{
        let user = await UserModel.findOne({mobile});
            if(user){
                res.send({msg:"user already exist"});
                return
            }
        let newUser = new UserModel({name,age,gender,mobile});
        await newUser.save();
        res.status(200).json({msg:"user created",newUser});
    }
    catch(error){
        res.send(error.message);
    }
});

userRouter.patch("/update-user/:id", async (req,res)=>{
    const{id} = req.params;
    try{
        let updateUser = await UserModel.findByIdAndUpdate({_id:id}, req.body);
        res.send(updateUser);
    }
    catch(error){
        res.status(500).json({msg:error.message});
    }
});
userRouter.delete("/delete-user/:id", async (req,res)=>{
    const{id} = req.params;
    try{
        let deleteUser = await UserModel.findByIdAndDelete({_id:id}, req.body);
        res.send(deleteUser);
    }
    catch(error){
        res.status(500).json({msg:error.message});
    }
});
module.exports = userRouter