const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    tittle: {type:String, required:true},
    img: {type:String,required:true},
    itinerary: {type: mongoose.Types.ObjectId, ref: 'itinerary'}
})


const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity;