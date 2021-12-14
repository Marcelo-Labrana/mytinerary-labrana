import React from "react";
import { useState, useEffect, useRef } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import usersActions from '../redux/actions/usersActions'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import {Link} from 'react-router-dom'

const SignUpForm = (props) => {

    const [pwShown, setPwShown] = useState(false);
    const [countries, setCountries] = useState([])

    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputFName = useRef()
    const inputLName = useRef()
    const inputImg = useRef()
    const inputCountry = useRef()

    const handleSubmit = async (fname, lname, email, password, img, country) => {
        const errors = await props.addUser(email, password, fname, lname, img, country,false)
        console.log(errors)
        if (errors) {
            errors.map(e => alert(e.message))
            
        } else {
            alert("Account created successfully")
            window.location.reload();
        }
    }


    useEffect(() => {
        if (!countries.length > 0) {
            fetch("https://restcountries.com/v3.1/all")
                .then(res => res.json())
                .then(data => setCountries(data))
                .catch(err => console.error(err.message))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user])

    const responseGoogle = (response) => {
        //console.log(response);
        let googleUser = {
            fname: response.profileObj.givenName,
            lname: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            img: response.profileObj.imageUrl,
            country: "Google Land",
            google:true
        }
        //console.log(googleUser)
        const errors = props.addUser(googleUser.email, googleUser.password, googleUser.fname, googleUser.lname, googleUser.img, googleUser.country, googleUser.google)
        .then(res=>{
                res.map(e => alert(e.message))
        }
            
             )
        .catch(()=>{
            alert("Account created successfully")
            window.location.reload();
        })    
            /*if (errores) {
                console.log(errores)
                errores.errors.map(e => alert(e.message))
                
            } else {
                alert("Account created successfully")
                window.location.reload();
            }*/
        
        
        
      }


    const toggleVisibility = () => {
        setPwShown(!pwShown);
    }


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Show/Hide Password
        </Tooltip>)

    const handleSubmitInputs = (e) => {
        e.preventDefault()
        handleSubmit(inputFName.current.value, inputLName.current.value, inputEmail.current.value, inputPassword.current.value, inputImg.current.value, inputCountry.current.value)
        inputFName.current.value = ''
        inputLName.current.value = ''
        inputEmail.current.value = ''
        inputPassword.current.value = ''
        inputImg.current.value = ''
        inputCountry.current.value = ''
    }

    

    const nameRegex = "^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
    const imgRegex = '(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)'

    return (

        <>
            <form className="form" onSubmit={handleSubmitInputs}>
                <fieldset>
                    <ul className="outer">
                        <legend className="legend-sign">Your <b>adventure</b> begins here</legend>
                        <li><label htmlFor="fname">FIRST NAME</label>
                            <input type="text" id="fname" ref={inputFName} name="fname" placeholder="John" autoComplete="off" required pattern={nameRegex} /></li>
                        <li><label htmlFor="lname">LAST NAME</label>
                            <input type="text" id="lname" ref={inputLName} name="lname" placeholder="Smith" autoComplete="off" required pattern={nameRegex} /></li>
                        <li><label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" ref={inputEmail} name="email" placeholder="example@domain.com" required /></li>
                        <li>
                            <div className="password">
                                <label>PASSWORD</label>

                                <input type="checkbox" onClick={toggleVisibility} className="toggle-visibility" id="eye" name="toggleVisibility" />
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 250 }}
                                    overlay={renderTooltip}
                                >

                                    <label htmlFor="eye" />
                                </OverlayTrigger>
                            </div>
                            <input type={pwShown ? "text" : "password"} id="pw" ref={inputPassword} name="pw" placeholder={pwShown ? "password" : "••••••••"} autoComplete="off" minLength={6} maxLength={"18"} />

                        </li>
                        <li><label htmlFor="img">IMAGE URL</label>
                            <input type="text" id="image" ref={inputImg} name="img" placeholder="www.image-url.com/example.png" autoComplete="off" required /></li>
                        <li>
                            <label htmlFor="countrylist">COUNTRY</label>
                            <select id="countries" ref={inputCountry} name="countrylist" required>
                                <option value="" selected disabled hidden>Select a Country</option>
                                {countries.map(country => {
                                    return (
                                        <option key={country.cca2} id={country.name.common}>{country.name.common}</option>
                                    )
                                }
                                )
                                }
                            </select>
                        </li>
                        <li><button type="submit" value={"submit"}><b>SIGN UP</b></button></li>
                        <GoogleLogin
                            clientId="625222718840-psku1behfs4a6u9v7ilond5j7h6693ka.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </ul>
                </fieldset>
                <p className="cta-text">Already have an account? <Link to={"/sign_in"}><b className="cta">sign in here</b></Link></p>
            </form>


        </>

    )


}

const mapDispatchToProps = {
    addUser: usersActions.addUser
}
const mapStateToProps = (state) => {

    return {
        users: state.usersReducer.users,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)