import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import SignInForm from '../components/SignInForm.js'


export default class SignIn extends React.Component {

    render() {
        return (

            <>
                {
                    localStorage.getItem('token') ?
                        <>
                            <div className="cucu">
                                <div className="wrapper">
                                    <h1>Bruh,</h1>
                                    <h2>You're already signed in</h2>

                                </div>
                            </div>
                        </> :
                        <>
                            <div className="sign-up">
                                <img src="./assets/sign_in.jpg" alt="A person looking the city" className="sign-up-background" />
                            </div>
                            <NavBar />


                            <div className="wrapper sign-up-wrapper">
                                <SignInForm />
                            </div>
                            <Footer />
                        </>
                }
            </>
        )
    }
}