const mongoose = require('mongoose');

const city12Schema = new mongoose.Schema({
    city: {type:String, required:true},
    img: {type:String,required:true},
})


const City12 = mongoose.model('city12',city12Schema)

module.exports = City12;