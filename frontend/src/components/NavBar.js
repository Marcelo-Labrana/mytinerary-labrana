import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'

/*import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap'*/

import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
    
    return (
            <Navbar sticky="top" className="navbar-custom" variant="dark" expand="md">
                <Container className='align-content-md-center d-flex sm-m-1 justify-content-md-start'>
                    <Container className='container-logo'>
                        <Navbar.Brand>
                            <Link to="/"><img
                                src="/assets/logo.png"
                                width="70"
                                height="50"
                                className="d-inline-block align-top"
                                alt="MyTinerary logo"
                            /></Link>
                        </Navbar.Brand>
                    </Container>
                       
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto d-flex another-patch">
                                <Container className="d-flex justify-content-between md-justify-content-around container-patch">
                                    <Nav.Link as={Link} to="/" className='align-self-center p-0'>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/cities" className='align-self-center p-0'>Cities</Nav.Link>
                                    <div className="justify-self-center ml-auto">
                                        <NavDropdown
                                            title={
                                                <img src="/assets/default-user.png" alt="default user" className="profile-pic" />
                                                
                                            } id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#">Login</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Sign Up</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                </Container>
                            </Nav>
                        </Navbar.Collapse>
                    
                </Container>
            </Navbar>
    );
}

export default NavBar