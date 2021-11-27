import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useEffect, useState} from 'react'





export default function Carrousel () {

   

    const [cities, setCities] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/api/cities")
        .then(res=>res.json())
        .then(data=>setCities(data.response.cities))
        .catch(err=>console.error(err.message))
    },[])
        return (
            <>

                <div className="container-crsl">
                    <div className="ttl-crsl-cont">
                        <h2>Popular MyTineraries</h2>
                    </div>
                    <Carousel interval={5000} pause="false">

                        {
                            cities.map(packs => {
                                return (
                                    <Carousel.Item key={cities.indexOf(packs).toString()}>

                                        <Container>
                                            <Row>
                                                {
                                                    packs.map((pack) => {

                                                        return (

                                                            <Col xs={12} sm={5} key={pack.city}>
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
            </>
        )
    
}