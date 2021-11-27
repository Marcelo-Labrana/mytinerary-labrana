import React from 'react'
import Form from 'react-bootstrap/Form'

export default function SearchBar() {
    return (
        <Form>
            <Form.Group className="xs-12 d-flex flex-column justify-content-center align-content-center" controlId="searchBar">
            
                <Form.Label><div className="search-tittle-container"><h3 className="d-flex justify-content-center search-tittle">Search for your City: </h3></div></Form.Label>
                <Form.Control as="textarea" rows={1} placeholder="What's your destination?"/>
            </Form.Group>
        </Form>
    )
}