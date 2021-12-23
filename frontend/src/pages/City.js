import React from 'react'
import { Card, Col, Accordion } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cityActions from '../redux/actions/cityActions.js'
import citiesActions from '../redux/actions/citiesActions.js'
import activitiesActions from '../redux/actions/activitiesActions'
import Activities from '../components/Activties.js'
import Comments from '../components/Comments.js'


const City = (props) => {

    const cityId = useParams().city;
    useEffect(() => {
        props.fetchCity(cityId)
        props.fetchItineraries(cityId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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
                                    <Col className="d-flex justify-content-center itinerary-wrapper" key={itinerary._id}>
                                        <Card className="text-center city-card itinerary-wrapper">
                                            <Card.Header className="d-flex flex-column justify-content-center align-content-center align-items-center"><img className="user-img" src={itinerary.user.img} alt="user" />{itinerary.user.name}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    Price: {
                                                        "💵".repeat(itinerary.price)
                                                    }
                                                </Card.Text>
                                                <Card.Text>Duration: {"⌛".repeat(itinerary.duration)}</Card.Text>
                                                <Card.Text>Likes: {itinerary.likes}</Card.Text>

                                            </Card.Body>
                                            <Card.Footer className="text-muted hashtag">{
                                                itinerary.hashtags.map((hashtag,index) => { return <p style={{display:'inline'}} key={index}>{hashtag}</p> })
                                            }</Card.Footer>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header className="text-center">View More</Accordion.Header>
                                                    <Accordion.Body className="text-center">

                                                        
                                                            <Activities itineraryId={itinerary._id}/>
                                                            <Comments itineraryId={itinerary._id}/>  
                                                                                                                  
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Card>
                                    </Col>
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
    fetchActivities: activitiesActions.fetchActivities
}
const mapStateToProps = (state) => {

    return {
        city: state.citiesReducer.city,
        itineraries: state.cityReducer.itineraries,
        activities: state.activitiesReducer.activities
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)