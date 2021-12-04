const Itinerary = require('../models/Ininerary')

const itinerariesControllers = {
    getItineraries: async (req, res) => {
        let response
        try {
            response = await Itinerary.find().populate('city')
        } catch (err) {
            console.error(err)
        }
        res.json(response)
    },
    addItinerary: async (req, res) => {
        const itinerary = req.body
        try {
            response = await new Itinerary(itinerary).save()
        } catch (err) { console.error(err) }
        res.json(response)
    },
    getByID: async (req, res) => {
        const id = req.params.id
        let response
        try {
            response = await Itinerary.findOne({ _id: id })
        } catch (err) { console.error(err) }
        res.json(response)
    },
    deleteItinerary: async (req, res) => {
        const id = req.params.id
        try {
            response = await Itinerary.findOneAndDelete({ _id: id })
        } catch (err) { console.error(err) }
        Itinerary.findOneAndDelete({ _id: id })
        res.json(response)
    },
    updateItinerary: async (req, res) => {
        const id = req.params.id
        const { user, price, duration, likes, hashtags, comments, city } = req.body
        let response

        try {
            response = await Itinerary.findOneAndUpdate({ _id: id }, { user, price, duration, likes, hashtags,comments, city }, { new: true })
        } catch (err) { console.error(err) }
        res.json(response)
    }

}

module.exports = itinerariesControllers;