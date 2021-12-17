import React from 'react'
import {useEffect} from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import usersActions from '../redux/actions/usersActions'
import {connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props)=> {

    const signed = localStorage.getItem('token')
    
    
    const signOut = () => {
        console.log(props)
        props.signOut(true)
    }

    useEffect(() => {
        //console.log(props.user)
    }, [props.user])

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

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex another-patch">
                        <Container className="d-flex justify-content-between md-justify-content-around container-patch">
                            <Nav.Link as={Link} to="/" className='align-self-center p-0'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/cities" className='align-self-center p-0'>Cities</Nav.Link>
                            <div className="justify-self-center ml-auto">
                                <NavDropdown
                                    title={
                                        <img src={signed?localStorage.getItem('image'):"/assets/default-user.png"} alt="default user" className="profile-pic" />

                                    } id="basic-nav-dropdown">
                                    {
                                        signed ?
                                            <>
                                                <NavDropdown.Item onClick={()=>signOut()}>Sign Out</NavDropdown.Item>
                                            </> :
                                            <>
                                                <NavDropdown.Item as={Link} to="/sign_in">Sign In</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/sign_up">Sign Up</NavDropdown.Item>
                                            </>

                                    }
                                </NavDropdown>
                            </div>
                        </Container>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}



const mapStateToProps = (state)=>{
    
    return {
        user: state.usersReducer.user
    }
}

const mapDispatchToProps = {
    signOut : usersActions.logOut
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)