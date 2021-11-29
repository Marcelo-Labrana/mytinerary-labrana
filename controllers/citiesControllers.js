/*const cities = [

    
    {
        city: "Barcelona",
        country: "Spain",
        img: "/assets/barcelona.jpg",
        id:1
    },
    {
        city: "London",
        country: "United Kingdom",
        img: "/assets/london.jpg",
        id:2
    },
    {
        city: "Sidney",
        country: "Australia",
        img: "/assets/sidney.jpg",
        id:3
    },
    {
        city: "Milan",
        country: "Italy",
        img: "/assets/milan.jpg",
        id:4
    },

    {
        city: "Bilbao",
        country: "Spain",
        img: "/assets/bilbao.jpg",
        id:5
    },
    {
        city: "Paris",
        country: "France",
        img: "/assets/paris.jpg",
        id:6
    },
    {
        city: "Rome",
        country: "Italy",
        img: "/assets/rome.jpg",
        id:7
    },
    {
        city: "Berlin",
        country: "Germany",
        img: "/assets/berlin.jpg",
        id:8
    },

    {
        city: "Toulouse",
        country: "France",
        img: "/assets/toulouse.jpg",
        id:9
    },
    {
        city: "San Sebastian",
        country: "Spain",
        img: "/assets/san sebastian.jpg",
        id:10
    },
    {
        city: "Ibiza",
        country: "Spain",
        img: "/assets/ibiza.jpg",
        id:11
    },
    {
        city: "Istanbul",
        country: "Turkey",
        img: "/assets/istambul.jpg",
        id:12
    },
    {
        city: "Ulaanbaatar",
        country: "Mongolia",
        img: "/assets/ulaanbaatar.jpg",
        id:13
    },
    {
        city: "Tokyo",
        country: "Japan",
        img: "/assets/tokyo.jpg",
        id:14
    },
    {
        city: "Beijing",
        country: "China",
        img: "/assets/beijing.jpg",
        id:15
    }

]*/

const City = require('../models/City')

const citiesControllers = {
    getCities: (req,res)=>{
        City.find()
        .then(response=> res.json({response:response}))
        
        /*res.json({response:{cities:cities}})*/
    },
    loadCity: (req,res)=>{ 
        console.log(req.body)
        const {city, country, img} = req.body
        new City({city, country, img}).save()
        .then(response=>res.json({response}))
        /*cities.push(req.body)
        res.json({response:{cities:cities}})*/
    },
    deleteCity: (req,res)=>{
        const id = req.params.id
        City.findOneAndDelete({_id:id})
        .then(response=>res.json({response}))
        .catch(err=>console.error(err))
    },
    cityByID: (req,res)=>{
        console.log(req.params)
        const id = req.params.id

        City.findOne({_id:id})
        .then(response=>res.json({response}))
        .catch(err=>console.error(err))
       
    },
    updateCity: (req,res)=>{
        const id = req.params.id
        const {city, country, img} = req.body
        City.findOneAndUpdate({_id:id}, {city, country, img},{new:true})
        .then(response=>res.json({response}))
        .catch(err=>console.error(err))
    }


}

module.exports = citiesControllers;