const City = require('../models/City')

const citiesControllers = {
    getCities: (req,res)=>{
        City.find()
        .then(response=> res.json({response:response}))
    },
    loadCity: (req,res)=>{ 
        console.log(req.body)
        const {city, country, img} = req.body
        new City({city, country, img}).save()
        .then(response=>res.json({response}))
    },
    deleteCity: (req,res)=>{
        const id = req.params.id
        City.findOneAndDelete({_id:id})
        .then(response=>res.json({response}))
        .catch(err=>console.error(err))
    },
    cityByID: async(req,res)=>{
        const id = req.params.id
        let response
        try{response = await City.findOne({_id:id})}
        catch(err){console.error(err)}
        res.json(response)
        
       
    },
    updateCity: (req,res)=>{
        const id = req.params.id
        const {city, country, img} = req.body
        console.log(req.body)
        City.findOneAndUpdate({_id:id}, {city, country, img},{new:true})
        .then(response=>res.json({response}))
        .catch(err=>console.error(err))
    }


}

module.exports = citiesControllers;