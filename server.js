const express = require("express")

const app = express()

const cities = [
    [
        {
            city: "Barcelona",
            img: "./assets/barcelona.jpg"
        },
        {
            city: "London",
            img: "./assets/london.jpg"
        },
        {
            city: "Sidney",
            img: "./assets/sidney.jpg"
        },
        {
            city: "Milan",
            img: "./assets/milan.jpg"
        }
    ],
    [
        {
            city: "Bilbao",
            img: "./assets/bilbao.jpg"
        },
        {
            city: "Paris",
            img: "./assets/paris.jpg"
        },
        {
            city: "Rome",
            img: "./assets/rome.jpg"
        },
        {
            city: "Berlin",
            img: "./assets/berlin.jpg"
        }
    ],
    [
        {
            city: "Toulouse",
            img: "./assets/toulouse.jpg"
        },
        {
            city: "San Sebastian",
            img: "./assets/san sebastian.jpg"
        },
        {
            city: "Ibiza",
            img: "./assets/ibiza.jpg"
        },
        {
            city: "Istambul",
            img: "./assets/istambul.jpg"
        }
    ]
]

app.get("/pruebas/datos",(req,res)=>{
    console.log("Me llegó un pedido GET")
    res.json({respuesta:"ola keace"})
})

app.get("/api/cities", (req, res)=>{
    res.json({respone:{cities:cities}})
})

app.listen(4000, ()=>{console.log("Server is listening on port 4000")})

