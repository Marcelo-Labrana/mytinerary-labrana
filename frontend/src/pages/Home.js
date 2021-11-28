import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner.js"
import Carrousel from '../components/Carrousel.js'
import Footer from '../components/Footer.js'
import NavBar from '../components/NavBar'

const Home = (props) => {
        return (<div>
            <NavBar />
            <Hero/>
            <Banner/>
            <Carrousel/>
            <Footer/>
        </div>)
    
}

export default Home