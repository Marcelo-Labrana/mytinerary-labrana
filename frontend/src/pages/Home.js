import React from 'react'

class Home extends React.Component{
    render(){
        const foto = require('../assets/nigelmoon.jpg');

        return (<div>
            <h1>Un título random</h1>
            <img src='./assets/frock.jpg' alt='frogs with glock' />
            <img src={foto.default} alt="cursed nigel" />
        </div>)
    }
}

export default Home