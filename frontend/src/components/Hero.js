import React from 'react'
import HeroSlogan from './HeroSlogan'
import HeroTittle from './HeroTittle'
import HeroButton from './HeroButton'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <img src="./assets/hero.jpg" alt="A person looking at the landscape" className="hero-background" />
            </div>
            <div className="hero-container">
            
                <HeroTittle/>
                <HeroSlogan/>
                <HeroButton/>
            </div>
        </>
    )
}

export default Hero