const express = require("express");
const ProductModel = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/get-product", async (req,res)=>{
    try{
        const products = await ProductModel.find();
        res.send({products});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
productRouter.post("/create-product", async (req,res)=>{
    const{name,price,quantity,color} = req.body
    try{
        let newProduct = new ProductModel({name,price,quantity,color});
        await newProduct.save();
        res.status(200).json({msg:"product added succesfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
productRouter.patch("/update-product/:id", async (req,res)=> {
    const{id} = req.params;
    try{
        let updateProcts = await ProductModel.findByIdAndUpdate({_id:id}, req.body);
        res.send("update successfully");
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
productRouter.delete("/delete-product/:id", async (req,res)=> {
    const{id} = req.params;
    try{
        let deleteProcts = await ProductModel.findByIdAndDelete({_id:id}, req.body);
        res.send("deleted successfully");
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
module.exports = productRouter