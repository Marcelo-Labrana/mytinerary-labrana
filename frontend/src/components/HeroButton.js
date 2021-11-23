import Reveal from 'react-reveal/Reveal';
import Pulse from 'react-reveal/Pulse';
import { Link } from 'react-router-dom';


export default function HeroButton() {





    return (
        <div className="tittle-container justify-self-end">
            <Reveal bottom>
                <Link to="/cities">
                    <button className="hero-button">
                        <div className="button-items">
                            <img src="./assets/take-off.png" alt="airplane taking off" className="plane" />
                            <div className="button-text">
                                <Pulse duration={3000} delay={6600} forever>
                                    <p className="button-text-1">Click here to</p>
                                    <p className="button-text-2">Start   your   Journey</p>
                                </Pulse>
                            </div>

                        </div>
                    </button>
                </Link>
            </Reveal>
        </div>
    );

}

