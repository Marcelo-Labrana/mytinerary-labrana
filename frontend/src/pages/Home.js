import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner.js"
import Carrousel from '../components/Carrousel.js'

class Home extends React.Component{
    render(){
        //const foto = require('../assets/nigelmoon.jpg');
        
        return (<div>
            <Hero/>
            <Banner/>
            <Carrousel/>
        
        </div>)
    }
}

export default Home