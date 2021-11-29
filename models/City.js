const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    city: {type:String, required:true},
    country: {type:String, required:true},
    img: {type:String,required:true},
})
//type: Number

const City = mongoose.model('city',citySchema)

module.exports = City;