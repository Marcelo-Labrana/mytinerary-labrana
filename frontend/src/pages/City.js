import React from 'react'
import { Card, Col, Accordion } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cityActions from '../redux/actions/cityActions.js'
import citiesActions from '../redux/actions/citiesActions.js'
import activitiesActions from '../redux/actions/activitiesActions'
import Activities from '../components/Activties.js'
import Comments from '../components/Comments.js'
import Itinerary from '../components/Itinerary.js'


const City = (props) => {

    const cityId = useParams().city;
    const [likeId, setLike] = useState(null)

    useEffect(() => {
        props.fetchCity(cityId)
        props.fetchItineraries(cityId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /*const likeToggle = async (likeThing)=>{
        await props.like(likeThing, localStorage.getItem('token'))
        .then(res=>console.log(res))
        .catch(error=>console.log(error))

    }

    const toggleVisibility = (random) => {
        //e.preventDefault()
        console.log(random)
        likeToggle(random)
    }*/

    

    return (
        <>

            <div className="cucu cucu-patch">

                <NavBar />
                <div className="wrapper">

                    {
                        (props.city) &&
                        <Col xs={12} className="d-flex justify-content-center">
                            <Card className="custom-card-cities align-self-center justify-self-center itinerary-wrapper">
                                <Card.Img className="img-city" variant="top" src={props.city.img} />
                                <Card.Body>
                                    <Card.Title>{props.city.city}, {props.city.country}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>}
                    
                    {
                        (props.itineraries && props.itineraries.length > 0) ?
                            props.itineraries.map(itinerary => {
                                return (
                                    <Itinerary key={itinerary._id} itinerary={itinerary} itineraries={props.itineraries}/>
                                )
                            }) : <div className="construction"><p>There are no itineraries yet for this city</p></div>

                    }

                    <Link to="/cities"><button className="hero-button">Go back to Cities</button></Link>
                </div>
                <Footer />
            </div>
        </>
    )


}

const mapDispatchToProps = {
    fetchCity: citiesActions.fetchCity,
    fetchItineraries: cityActions.fetchItineraries,
    fetchActivities: activitiesActions.fetchActivities,
    like: cityActions.like
}
const mapStateToProps = (state) => {

    return {
        city: state.citiesReducer.city,
        itineraries: state.cityReducer.itineraries,
        activities: state.activitiesReducer.activities,
        userToken: state.usersReducer.signToken
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)