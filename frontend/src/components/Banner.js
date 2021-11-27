import React from 'react'

export default class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="banner-container">
                    <a href="https://facebook.com/" target="_blank" rel='noopener noreferrer'><img src="./assets/fb-logo.png" alt="facebook" className="social-media"/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noopener noreferrer'><img src="./assets/ig-logo.png" alt="instagram" className="social-media"/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noopener noreferrer'><img src="./assets/tw-logo.png" alt="twitter" className="social-media"/></a>

                </div>
            </>
        );
    }
}