const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{type:String, require: true},
    age: Number,
    gender: String,
    mobile: Number
},{
    versionKey: false
});
const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel