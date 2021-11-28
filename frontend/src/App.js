import React from 'react'
import Home from './pages/Home.js'
import Cities from './pages/Cities.js'
import City from './pages/City.js'
import Error404 from './pages/Error404.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () =>  {
  
  
  
    return (
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/cities" element={<Cities/>}/>
          <Route path="/cities/:city" element={<City/>}/>
          
          <Route path="*" element={<Error404/>}/>

        </Routes>
      </Router>

    )
  
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
