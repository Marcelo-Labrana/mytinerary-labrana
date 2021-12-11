import React from "react";
import { useState, useEffect, useRef } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import usersActions from '../redux/actions/usersActions'
import {connect } from 'react-redux'

const SignUpForm = (props) => {

    const [pwShown, setPwShown] = useState(false);
    const [countries, setCountries] = useState([])

    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputFName = useRef()
    const inputLName = useRef()
    const inputImg = useRef()
    const inputCountry = useRef()

    const handleSubmit = async (fname, lname, email, password, img, country)=>{
        const errors = await props.addUser(email,password,fname,lname,img,country)
        /*if (errors.errores) {
            errores.errores.map(e=> alert(e.message))
        }*/
    }


    useEffect(() => {
        if(!countries.length>0){
            fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.error(err.message))
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    return (
        <>
            <form className="form" onSubmit={handleSubmitInputs}>
                <fieldset>
                    <ul className="outer">
                        <legend className="legend-sign">Your <b>adventure</b> begins here</legend>
                        <li><label htmlFor="fname">FIRST NAME</label>
                            <input type="text" id="fname" ref={inputFName} name="fname" placeholder="John" autoComplete="off"/></li>
                        <li><label htmlFor="lname">LAST NAME</label>
                            <input type="text" id="lname" ref={inputLName} name="lname" placeholder="Smith" autoComplete="off"/></li>
                        <li><label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" ref={inputEmail} name="email" placeholder="example@domain.com" /></li>
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
                            <input type={pwShown ? "text" : "password"} id="pw" ref={inputPassword} name="pw" placeholder={pwShown ? "password" : "••••••••"} autoComplete="off"/>

                        </li>
                        <li><label htmlFor="img">IMAGE URL</label>
                            <input type="text" id="image" ref={inputImg} name="img" placeholder="www.image-url.com/example.png" autoComplete="off"/></li>
                        <li>
                            <label htmlFor="countrylist">COUNTRY</label>
                            <select id="countries" ref={inputCountry} name="countrylist">
                                <option value="none" selected disabled hidden>Select a Country</option>
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
                    </ul>
                </fieldset>
            </form>


        </>
    )


}

const mapDispatchToProps = {
    addUser: usersActions.addUser
}
const mapStateToProps = (state)=>{
    
    return {
        users: state.usersReducer.users,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(SignUpForm)