import React from 'react';
import Flip from 'react-reveal/Flip';

export default class HeroSlogan extends React.Component {
    render() {
        return (
            <div className="tittle-container">
                <h3 className="text-hero slogan">
                    <Flip bottom>
                    Find your perfect trip, designed by insiders who know and love their cities!
                    </Flip>
                </h3>
            </div>
        );
    }
}
