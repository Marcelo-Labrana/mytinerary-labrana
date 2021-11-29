import React from 'react'
import ShowCities from '../components/ShowCities.js'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

export default class Cities extends React.Component {
    render() {
        return (
            <>
                <div className="cucu">
                    <NavBar/>
                    <div className="wrapper">
                        <ShowCities/>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}