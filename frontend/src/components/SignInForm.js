import React from "react";
import { useState, useEffect, useRef } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import usersActions from '../redux/actions/usersActions'
import {connect } from 'react-redux'

const SignInForm = (props) => {

    const [pwShown, setPwShown] = useState(false);
    const inputEmail = useRef()
    const inputPassword = useRef()

    useEffect(() => {
        console.log(props.user)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user])

    const toggleVisibility = () => {
        setPwShown(!pwShown);
    }
    
    const handleSubmit = async (email, password)=>{
        const user = await props.signUser(email,password)
        
        setTimeout(()=>console.log(props.user),3000);
        
        /*if (user.error) {
            user.error.map(e=> alert(e.message))
        }*/
    }
    const handleSubmitInputs = (e) => {
        e.preventDefault()
        console.log(inputEmail.current.value, inputPassword.current.value)
        handleSubmit(inputEmail.current.value, inputPassword.current.value)
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
                    </ul>
                </fieldset>
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