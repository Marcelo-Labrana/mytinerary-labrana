import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useLayoutEffect } from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import {Link} from 'react-router-dom'


const City = () => {

    const cityName = useParams();
    const [city, setCity] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => setCity(data.response.cities.find(cityFind => cityFind.city === cityName.city)))
            .catch(err => console.error(err.message))

    }, [cityName.city])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <div className="cucu">
                <NavBar />
                <div className="wrapper">
                    {

                        <Col xs={12}>
                            <Card className="custom-card-cities">
                                <Card.Img className="img-city" variant="top" src={city.img} />
                                <Card.Body>
                                    <Card.Title>{city.city}, {city.country}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>}
                    <div className="construction">
                        <h3>Under construction</h3>
                    </div>
                    <Link to="/cities"><button className="hero-button">Go back to Cities</button></Link>
                </div>
                <Footer />
            </div>
        </>
    )


}

export default City