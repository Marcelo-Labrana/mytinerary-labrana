import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Carrousel() {



    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => setCities(data.response.cities))
            .catch(err => console.error(err.message))
    }, [])
    return (
        <>
            {
                cities.map(city => {
                    return (
                        <Col xs={12} key={city.id}>
                            <Card as={Link} to={`/cities/${city.city}`} className="custom-card-cities">
                                <Card.Img className="img-cities" variant="top" src={city.img} />
                                <Card.Body>
                                    <Card.Title>{city.city}, {city.country}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </>
    )
}