import React from 'react'
import { Card, Col, Accordion } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Activities from './Activties.js'
import Comments from './Comments.js'
import cityActions from '../redux/actions/cityActions.js'


const Itinerary = ({itinerary, itineraries, logged}) => {
    
    

    const [cLikes, setLikes] = useState(itinerary.likes.length)
    const dispatch = useDispatch()
    
    useEffect(() => {

        
        //props.addComment(props.itineraryId)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itineraries])

    const likeToggle = async ()=>{
        
        await dispatch(cityActions.like(itinerary._id, localStorage.getItem('token')) )
        .then(res=>setLikes(res.data.response.likes.length))
        .catch(error=>console.log(error))

    }

    const toggleVisibility = (random) => {
        //e.preventDefault()
        //console.log(random)
        likeToggle(random)
    }
    
    return(
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
                                                <Card.Text >
                                                
                                                <input type="checkbox" onClick={likeToggle}
                                                    className="toggle-like" id={itinerary._id}  disabled={logged?false:true}/> 
                                                <label htmlFor={itinerary._id} /> {cLikes}
                                                </Card.Text>
                                                
                                            </Card.Body>
                                            <Card.Footer className="text-muted hashtag">{
                                                itinerary.hashtags.map((hashtag,index) => { return <p style={{display:'inline'}} key={index}>{hashtag}</p> })
                                            }</Card.Footer>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header className="text-center">View More</Accordion.Header>
                                                    <Accordion.Body className="text-center">

                                                    <div className="search-tittle-container tittle-patch"><h3 className="d-flex justify-content-center search-tittle">Activities: </h3></div>
                                                            <Activities itineraryId={itinerary._id}/>
                                                            <div className="search-tittle-container tittle-patch"><h3 className="d-flex justify-content-center search-tittle">Comments: </h3></div>
                                                            <Comments itineraryId={itinerary._id}/>  

                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Card>
                                    </Col>
    )
}



export default Itinerary