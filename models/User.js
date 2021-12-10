const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type:String, required:true},
    password: {type:String, required:true},
    fname: {type: String, required:true},
    lname: {type:String,required:true},
    img: {type:String,required:true},
    country: {type:String,required:true},
})
//type: Number

const User = mongoose.model('user',userSchema)

module.exports = User;