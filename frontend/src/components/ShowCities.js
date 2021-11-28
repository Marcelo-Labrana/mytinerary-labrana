import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Carrousel() {



    const [cities, setCities] = useState([])
    const [citiesStatic, setCitiesStatic] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => {
                setCities(data.response.cities)
                setCitiesStatic(data.response.cities)
            })
            .catch(err => console.error(err.message))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = searchValue => {
        var searchResults = citiesStatic.filter(searchCity => {
            if (searchCity.city.toLowerCase().startsWith(searchValue.toLowerCase()) ||
                searchCity.country.toLowerCase().startsWith(searchValue.toLowerCase())) {
                return searchCity
            } else { 
                return null }

        })
        if(searchResults.length){setCities(searchResults)}
        else{setCities([])}
        
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-items-center align-content-center justify-content-center">
                <div className="search-tittle-container"><h3 className="d-flex justify-content-center search-tittle">Search for your City: </h3></div>
                <div>
                    <input value={search}
                        placeholder="What's your destination?"
                        onChange={handleChange} />
                </div>
                {

                    cities.map(city => {
                            return (
                                <Col xs={12} key={city.id} className="d-flex justify-content-center">
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
            </div>
        </>
    )
}