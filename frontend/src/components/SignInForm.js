import React from "react";
import { useState } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const SignInForm = () => {

    const [pwShown, setPwShown] = useState(false);


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
                        <legend className="legend-sign">We're <b>glad</b> to see you <b>traveler</b></legend>
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
                        
                        <li><button type="submit"><b>SIGN IN</b></button></li>
                    </ul>
                </fieldset>
            </form>


        </>
    )


}

export default SignInForm