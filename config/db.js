const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/lab"

const connection =()=>{
    try{
        mongoose.connect(url);
        console.log("mongodb connection done");
    }
    catch(error){
    console.log("Error connection ")
    }
};
module.exports = connection