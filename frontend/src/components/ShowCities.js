import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import { connect } from 'mongoose'
import {connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


function Carrousel(props) {

    const [search, setSearch] = useState("")
    //console.log(props)
    //const {cities, aux, fetchCities, filterCities} = props

    useEffect(() => {
        //console.log(cities)    
        props.fetchCities()
    }, [])

    

    const handleChange = e => {
        const searchValue = e.target.value
        setSearch(searchValue)
        props.filterCities(props.cities, searchValue)
        
    }

  

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-items-center align-content-center justify-content-center">
                <div className="search-tittle-container"><h3 className="d-flex justify-content-center search-tittle">Search for your City: </h3></div>
                <div>
                    <input className="searchBar" value={search}
                        placeholder="What's your destination?"
                        onChange={handleChange} />
                </div>
                
                {
                    props.aux.length ?
                    props.aux.map(city => {
                            return (
                                <Col xs={12} key={city._id} className="d-flex justify-content-center">
                                    <Card as={Link} to={`/cities/${city.city}`} className="custom-card-cities">
                                        <Card.Img className="img-cities" variant="top" src={city.img} />
                                        <Card.Body>
                                            <Card.Title>{city.city}, {city.country}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        ):
                            
                            <Col xs={12} className="d-flex justify-content-center">
                                    <Card className="custom-card-cities">
                                        <Card.Img className="img-not-found" variant="top" src="/assets/notFound.jpg" />
                                        <Card.Body>
                                            <Card.Title>Sorry, the city you're searching for is not in the database.</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        
    

                }
            </div>
        </>
    )
}

const mapDispatchToProps = {
    fetchCities: citiesActions.fetchCities,
    filterCities: citiesActions.filterCities
}
const mapStateToProps = (state)=>{
    
    return {
        cities: state.citiesReducer.cities,
        aux: state.citiesReducer.aux
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Carrousel)