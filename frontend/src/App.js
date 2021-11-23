import React from 'react'
import Home from './pages/Home.js'
import Cities from './pages/Cities.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


class App extends React.Component {
  //constructor(){}
  render() {
    return (
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/cities" element={<Cities/>}/>

        </Routes>
      </Router>

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
