import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class HeroTittle extends React.Component {
    render() {
        return (
            <div className="tittle-container">
                <Bounce top>
                    <h1 className="text-hero my">My</h1>
                    <h1 className="text-hero tinerary">Tinerary</h1>
                </Bounce>
            </div>
        );
    }
}
