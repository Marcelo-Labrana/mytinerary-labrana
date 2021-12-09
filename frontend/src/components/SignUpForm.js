import React from "react";
import { useState } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const SignUpForm = () => {

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
                            <input type="text" id="lname" name="img" placeholder="www.image-url.com/example.png" /></li>
                        <li><button type="submit"><b>SIGN UP</b></button></li>
                    </ul>
                </fieldset>
            </form>


        </>
    )


}

export default SignUpForm