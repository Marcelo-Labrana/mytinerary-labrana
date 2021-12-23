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
            response = await Itinerary.findOneAndUpdate({ _id: id }, { user, price, duration, likes, hashtags, comments, city }, { new: true })
        } catch (err) { console.error(err) }
        res.json(response)
    },
    consultItineraries: async (req, res) => {
        const cityId = req.params.cityId
        let response
        try {
            response = await Itinerary.find({ city: cityId })
        } catch (err) {
            response = "no-itineraries"
            console.error(err)
        }
        res.json(response)
    },
    comments: async (req, res) => {
        //console.log(req.params)
        const { type, comment } = req.body
        const { itineraryId } = req.params
        const {_id} = req.user
        console.log(_id)
        //const {_id} = req.user
        let response
        switch (type) {
            case "add":

                try {
                    response = await Itinerary.findOneAndUpdate({ _id: itineraryId }, { $push: { comments: { body: comment, user: _id, img: req.user.img } } }, {new:true}).populate('comments.user')
                    console.log(response)
                    const something = await Itinerary.find({ city: response.city })   
                    res.json({success:true, response: something})
                } catch (err) {
                    console.log(err)
                    res.json({success:false, response:null})
                }
                break

            case "delete":
                try {
                    response = await Itinerary.findOneAndUpdate({ _id: itineraryId }, { $pull: { comments: { _id: comment, user: _id } } }, {new:true})
                    console.log(response)
                    const something = await Itinerary.find({ city: response.city })       
                    res.json({success:true, response: something})
                    
                } catch (err) {
                    console.log(err)
                    res.json({success:false, response:null})
                }
                break
            case "edit":
                console.log("ID comment: "+req.body.commentId)
                response = await Itinerary.findOneAndUpdate({ "comments._id": req.body.commentId }, { $set: { "comments.$.body":  comment  } }, {new:true})
                const something = await Itinerary.find({ city: response.city })
                res.json({success:true, response: something})
                break

        }

    },
    likes: async (req,res)=>{
        const { itineraryId } = req.params
        const {_id} = req.user

        

        Itinerary.findOne({_id: itineraryId})
            .then((itinerary) =>{
                
                if(itinerary.likes && itinerary.likes.includes(_id)){
                   Itinerary.findOneAndUpdate({_id:itineraryId}, {$pull:{likes:_id}},{new:true})
                   .then(async (newItinerary)=> {
                        
                        
                        res.json({success:true, response:newItinerary})
                    
                    })
                   .catch((error) => console.log(error))
                }else{
                    Itinerary.findOneAndUpdate({_id: itineraryId}, {$push:{likes:_id}},{new:true})
                    .then( async (newItinerary) => {
                        
                        
                        res.json({success:true, response:newItinerary})
                })
                    .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({success:false, response:error}))
        }
    

}

module.exports = itinerariesControllers;