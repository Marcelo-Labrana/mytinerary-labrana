const cities12 = [

    [
        {
            city: "Barcelona",
            country: "Spain",
            img: "./assets/barcelona.jpg"
        },
        {
            city: "London",
            country: "United Kingdom",
            img: "./assets/london.jpg"
        },
        {
            city: "Sidney",
            country: "Australia",
            img: "./assets/sidney.jpg"
        },
        {
            city: "Milan",
            country: "Italy",
            img: "./assets/milan.jpg"
        }
    ],
    [
        {
            city: "Bilbao",
            country: "Spain",
            img: "./assets/bilbao.jpg"
        },
        {
            city: "Paris",
            country: "France",
            img: "./assets/paris.jpg"
        },
        {
            city: "Rome",
            country: "Italy",
            img: "./assets/rome.jpg"
        },
        {
            city: "Berlin",
            country: "Germany",
            img: "./assets/berlin.jpg"
        }
    ],
    [
        {
            city: "Toulouse",
            country: "France",
            img: "./assets/toulouse.jpg"
        },
        {
            city: "San Sebastian",
            country: "Spain",
            img: "./assets/san sebastian.jpg"
        },
        {
            city: "Ibiza",
            country: "Spain",
            img: "./assets/ibiza.jpg"
        },
        {
            city: "Istanbul",
            country: "Turkey",
            img: "./assets/istambul.jpg"
        }
    ]
]

const cities = [

    
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
    
]


const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/api/cities",(req,res)=>{
    console.log("Me llegó un pedido GET")
    res.json({response:{cities:cities}})
})

app.get("/api/cities12", (req, res)=>{
    res.json({response:{cities12:cities12}})
})

app.listen(4000, ()=>{console.log("Server is listening on port 4000")})

