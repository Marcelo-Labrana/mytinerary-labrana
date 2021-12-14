import React from "react";
import { useState, useEffect, useRef } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import usersActions from '../redux/actions/usersActions'
import { GoogleLogin } from 'react-google-login';
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'

const SignInForm = (props) => {

    const [pwShown, setPwShown] = useState(false);
    const inputEmail = useRef()
    const inputPassword = useRef()

    useEffect(() => {
        //console.log(props.user)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user])

    const responseGoogle = (response) => {
        console.log(response);
        let googleUser = {
            fname: response.profileObj.givenName,
            lname: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            img: response.profileObj.imageUrl,
            country: "Google Land",
            google:true
        }
        props.signUser(googleUser.email, googleUser.password, googleUser.google)
        .then(res=>window.location.reload())
        .catch(error=>console.error(error))
        
      }

    const toggleVisibility = () => {
        setPwShown(!pwShown);
    }
    
    const handleSubmit = async (email, password)=>{
        const errors = await props.signUser(email,password,false)
        
        if (errors) {
            errors.errors.map(e=> alert(e.message))
        }else{window.location.reload();}
    }
    const handleSubmitInputs = (e) => {
        e.preventDefault()
        //console.log(inputEmail.current.value, inputPassword.current.value)
        handleSubmit(inputEmail.current.value, inputPassword.current.value,false)
        inputEmail.current.value = ''
        inputPassword.current.value = ''
        
    }


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Show/Hide Password
        </Tooltip>)

    return (
        <>
            <form className="form" onSubmit={handleSubmitInputs}>
                <fieldset>
                    <ul className="outer">
                        <legend className="legend-sign">We're <b>glad</b> to see you <b>traveler</b></legend>
                        <li><label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" name="email" ref={inputEmail} placeholder="example@domain.com" /></li>
                        <li>
                            <div className="password">
                                <label htmlFor="pw">PASSWORD</label>

                                <input type="checkbox" onClick={toggleVisibility} className="toggle-visibility" id="eye" name="toggleVisibility" />
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 250 }}
                                    overlay={renderTooltip}
                                >

                                    <label htmlFor="eye" />
                                </OverlayTrigger>
                            </div>
                            <input type={pwShown ? "text" : "password"} id="pw" name="pw" ref={inputPassword} placeholder={pwShown ? "password" : "••••••••"} />

                        </li>
                        
                        <li><button type="submit"><b>SIGN IN</b></button></li>
                        <GoogleLogin
                            clientId="625222718840-psku1behfs4a6u9v7ilond5j7h6693ka.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </ul>
                </fieldset>
                <p className="cta-text">Don't have an account? <Link to={"/sign_up"}><b className="cta">sign up here</b></Link></p>
            </form>


        </>
    )


}

const mapDispatchToProps = {
    signUser : usersActions.signUser
    
}
const mapStateToProps = (state)=>{
    
    return {
        users: state.usersReducer.users,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(SignInForm)