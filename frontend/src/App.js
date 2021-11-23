import React from 'react'
import Home from './pages/Home.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'


class App extends React.Component{
  //constructor(){}
  render(){
    return (
    <div>
      <NavBar/>
      <Home />
      <Footer/>
      
    </div>
      )
    };
}

/*const App = () => {
  return (<h1>Mientras tanto</h1>)
} */

/*function App() {
  return (
    <h1>Mientras tanto</h1>
  );
}*/

export default App;
