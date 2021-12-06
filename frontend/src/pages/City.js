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

            <div className="cucu">

                <NavBar />
                <div className="wrapper">

                    {
                        (props.city) &&
                        <Col xs={12} className="d-flex justify-content-center">
                            <Card className="custom-card-cities align-self-center justify-self-center">
                                <Card.Img className="img-city" variant="top" src={props.city.img} />
                                <Card.Body>
                                    <Card.Title>{props.city.city}, {props.city.country}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>}
                    {console.log(props.itineraries)}
                    {
                        (props.itineraries&&props.itineraries.length>0) ?
                        props.itineraries.map(itinerary => {
                            return (
                                <Col xs={12} className="d-flex justify-content-center" key={itinerary._id}>
                                    <Card className="text-center city-card">
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
                                        <Card.Footer className="text-muted">{
                                            itinerary.hashtags.map(hashtag => { return hashtag })
                                        }</Card.Footer>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className="text-center">View More</Accordion.Header>
                                                <Accordion.Body className="text-center">
                                                    Under Construction
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card>
                                </Col>
                            )
                        }):<div className="construction"><p>There are no itineraries yet for this city</p></div>

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
    fetchItineraries: cityActions.fetchItineraries
}
const mapStateToProps = (state) => {

    return {
        city: state.citiesReducer.city,
        itineraries: state.cityReducer.itineraries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)