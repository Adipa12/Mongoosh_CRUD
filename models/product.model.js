const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {type:String, require: true},
    price: Number,
    quantity: Number,
    color: String
},{
    versionKey : false
});
const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel