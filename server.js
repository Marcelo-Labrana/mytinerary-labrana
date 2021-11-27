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
        },
    
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
        },
    
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
        },
        {
            city: "Ulaanbaatar",
            country: "Mongolia",
            img: "./assets/ulaanbaatar.jpg"
        },
        {
            city: "Tokyo",
            country: "Japan",
            img: "./assets/tokyo.jpg"
        },
        {
            city: "Beijing",
            country: "China",
            img: "./assets/beijing.jpg"
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

