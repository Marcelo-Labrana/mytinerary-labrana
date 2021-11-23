import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner.js"
import Carrousel from '../components/Carrousel.js'
import Footer from '../components/Footer.js'
import NavBar from '../components/NavBar'

class Home extends React.Component{
    render(){
        //const foto = require('../assets/nigelmoon.jpg');
        
        return (<div>
            <NavBar />
            <Hero/>
            <Banner/>
            <Carrousel/>
            <Footer/>
        
        </div>)
    }
}

export default Home