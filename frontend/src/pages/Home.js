import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner.js"
import Carrousel from '../components/Carrousel.js'
import Footer from '../components/Footer.js'
import NavBar from '../components/NavBar'
import { useLayoutEffect } from 'react'
import { ToastContainer } from 'react-toastify';

const Home = (props) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
        return (<div>
            <NavBar />
            <Hero/>
            <Banner/>
            <Carrousel/>
            <Footer/>
            <ToastContainer/>
        </div>)
    
}

export default Home