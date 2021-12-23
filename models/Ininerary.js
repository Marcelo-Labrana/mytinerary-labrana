const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    user : {
        name: {type: String, required:true},
        img: {type: String, required: true}
    },
    price: {type: Number, required:true},
    duration: {type: Number, required:true},
    likes: {type: Number, required:false},
    hashtags: [
        {type: String, required:true}
    ],
    comments: {type: [{body: String, user: mongoose.Types.ObjectId}],required:false},

    city: {type: mongoose.Types.ObjectId, ref: 'city'}
    

})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary