import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export default class Footer extends React.Component{
    
    render(){
        return(
            <footer className="footer-container">
                <div className="footer-nav">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link as={Link} to="/cities">Cities</Nav.Link>
                </div>
                <div className="txt-inl"><h4 className="my">My</h4><h4 className="tinerary">Tinerary</h4></div>
                <h5>Contact Info: </h5>
                <div className="ctc-info"><p>|  Email: mytinerary@my.tinerary  </p><p>|  Phone: 555-0303456  </p>  <p>|  Direction: 742 Evergreen Terrace</p></div>
                <div className="copyright"><h6>Copyright {'\u00A9'} 2022. MyTinerary | All Rights Reserved</h6></div>
            </footer>
        )
    }

}