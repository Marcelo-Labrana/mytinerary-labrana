import React from "react";
import { useState, useEffect } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const SignUpForm = () => {

    const [pwShown, setPwShown] = useState(false);

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.error(err.message))
    }, [])

    const toggleVisibility = () => {
        setPwShown(!pwShown);
    }


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Show/Hide Password
        </Tooltip>)

    return (
        <>
            <form className="form">
                <fieldset>
                    <ul className="outer">
                        <legend className="legend-sign">Your <b>adventure</b> begins here</legend>
                        <li><label htmlFor="fname">FIRST NAME</label>
                            <input type="text" id="fname" name="fname" placeholder="John" /></li>
                        <li><label htmlFor="lname">LAST NAME</label>
                            <input type="text" id="lname" name="lname" placeholder="Smith" /></li>
                        <li><label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" name="email" placeholder="example@domain.com" /></li>
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
                            <input type={pwShown ? "text" : "password"} id="pw" name="pw" placeholder={pwShown ? "password" : "••••••••"} />

                        </li>
                        <li><label htmlFor="img">IMAGE URL</label>
                            <input type="text" id="image" name="img" placeholder="www.image-url.com/example.png" /></li>
                        <li>
                            <label htmlFor="countrylist">COUNTRY</label>
                            <select id="countries" name="countrylist">
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
                        <li><button type="submit"><b>SIGN UP</b></button></li>
                    </ul>
                </fieldset>
            </form>


        </>
    )


}

export default SignUpForm