import React from 'react'
import { useEffect, useState } from 'react'
import activitiesActions from '../redux/actions/activitiesActions'
import { connect } from 'react-redux'
import { Card, Col, Container, Carousel } from 'react-bootstrap'

const Activities = (props) => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        
        props.fetchActivities(props.itineraryId)
            .then(res => setActivities(res))
            .catch(err => console.error(err))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            
            {
                (activities) ?
                    <Carousel interval={5000} pause="false">
                        {activities.map(activity => {
                            return (
                                <Carousel.Item key={activity._id}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={activity.img} />
                                        <Card.Body>
                                            <Card.Title>{activity.tittle}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>

                            )
                        })}
                    </Carousel> : console.log("algo")
            }
        </>
    )
}




const mapDispatchToProps = {
    fetchActivities: activitiesActions.fetchActivities
}

const mapStateToProps = (state) => {

    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)