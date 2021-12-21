import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import SignUpForm from '../components/SignUpForm.js'
import { ToastContainer } from 'react-toastify';


export default class SignUp extends React.Component {
    render() {
        return (
            <>
                {
                    <>
                        <div className="sign-up">
                            <img src="./assets/sign_in.jpg" alt="A person looking the city" className="sign-up-background" />
                        </div>
                        <NavBar />


                        <div className="wrapper sign-up-wrapper">
                            <SignUpForm />
                        </div>
                        <Footer />
                        <ToastContainer />
                    </>
                }
            </>
        )
    }
}