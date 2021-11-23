import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





export default class Carrousel extends React.Component {

    cities = [
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

    render() {
        return (
            <div className="container-crsl">
                <Carousel interval={20000} pause="hover">

                    {
                        this.cities.map(packs => {
                            return (
                                <Carousel.Item>

                                    <Container>
                                        <Row>
                                            {
                                                packs.map((pack) => {
                                                    
                                                    return (
                                                        
                                                        <Col xs={12} sm={5}>
                                                            <Card className="custom-card">
                                                                <Card.Img variant="top" src={pack.img} />
                                                                <Card.Body>
                                                                    <Card.Title>{pack.city}</Card.Title>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Container>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}