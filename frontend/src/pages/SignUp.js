import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import SignUpForm from '../components/SignUpForm.js'


export default class SignUp extends React.Component {
    render() {
        return (
            <>
                {localStorage.getItem('token') ?
                    <>
                        <div className="cucu">
                            <div className="wrapper">
                                <h1>Perfect,</h1>
                                <h2>You're now signed in</h2>

                            </div>
                        </div>
                    </> :
                    <>
                        <div className="sign-up">
                            <img src="./assets/sign_in.jpg" alt="A person looking the city" className="sign-up-background" />
                        </div>
                        <NavBar />


                        <div className="wrapper sign-up-wrapper">
                            <SignUpForm />
                        </div>
                        <Footer />
                    </>
                }
            </>
        )
    }
}