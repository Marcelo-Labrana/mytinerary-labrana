import React from 'react';
import Reveal from 'react-reveal/Reveal';

export default class HeroSlogan extends React.Component {
    render() {
        return (
            <div className="tittle-container justify-self-end">
                <Reveal bottom>
                    <button className="hero-button">Start your Journey</button>
                </Reveal>
            </div>
        );
    }
}
