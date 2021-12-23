const Activity = require('../models/Activity')

const activitiesControllers = {
    
    getActivities: async(req,res)=>{
        let response
        try {
            response = await Activity.find()
        } catch (err) {
            console.error(err)
        }
        res.json(response)

    },

    addActivity: async (req, res) => {
        const activity = req.body
        let response
        try {
            response = await new Activity(activity).save()
        } catch (err) { console.error(err) }
        res.json(response)
    },
    
    deleteActivity: async (req, res) => {
        const id = req.params.id
        try {
            response = await Activity.findOneAndDelete({ _id: id })
        } catch (err) { console.error(err) }
        Activity.findOneAndDelete({ _id: id })
        res.json(response)
    },
    updateActivity: async (req, res) => {
        const id = req.params.id
        const { tittle, img, itinerary } = req.body
        let response

        try {
            response = await Activity.findOneAndUpdate({ _id: id }, { tittle, img, itinerary }, { new: true })
        } catch (err) { console.error(err) }
        res.json(response)
    },
    consultActivities: async (req, res) => {
        const itineraryId = req.params.id
        let response
            try {
                response = await Activity.find({ itinerary: itineraryId })
            } catch (err) { 
                response = "no-activities"
                console.error(err) }
        //console.log(response)
        res.json(response)
    }

}

module.exports = activitiesControllers;