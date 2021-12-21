import React from 'react'
import Home from './pages/Home.js'
import Cities from './pages/Cities.js'
import City from './pages/City.js'
import Error404 from './pages/Error404.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useEffect} from 'react'
import {connect } from 'react-redux'
import usersActions from './redux/actions/usersActions.js'

const App = (props) => {


  useEffect(() => {
    if(localStorage.getItem('token') && !props.user) props.signToken(localStorage.getItem('token'))
  }, [props.user])

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:city" element={<City />} />

        {props.user ? (
          <Route path="*" element={<Home />} />
        ) : (
          <>
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/sign_in" element={<SignIn />} />
          </>
        )}



        <Route path="*" element={<Error404 />} />

      </Routes>
    </Router>

  )

}

const mapDispatchToProps = {
  signToken : usersActions.signToken
  
}

const mapStateToProps = (state)=>{
    
  return {
      user: state.usersReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
