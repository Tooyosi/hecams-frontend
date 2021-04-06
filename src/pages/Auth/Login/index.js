import React, { useState, useRef, useContext } from 'react';
import { Link } from "react-router-dom";
import Form from './Form';
import { onChange } from 'utilities';
import { AlertContext } from 'layout/Auth';

export default function Login() {

    let [message, setMessage] = useContext(AlertContext)
    const [state, changeState] = useState({
        formLogin: {
            username: '',
            password: ''
        }
    })

    const handleChange = (e) => {
        onChange(e, state, changeState)
    }

    const addMessage = (severity, content) => {

        setMessage({
            severity, content, toggle: !message.toggle
        })
    };

    const handleSubmit = () => {
        addMessage("success", "No backend yet :)")
    }
    return (
        <>
            <div className="p-text-center">

                <h1 className="text-primary">Staff Login</h1>
                <p className="p-px-2 p-pb-4">Enter your credientials to access your online workspace</p>

            </div>
            <div>
                <Form
                    formControl={state.formLogin}
                    onChange={handleChange}
                    formName="formLogin"
                    onSubmit={handleSubmit}
                />
                <p className="p-text-right fs-small p-my-2">Can’t Login? <Link to="/forgot"> click here</Link></p>
            </div>


            {/* <Messages className="p-d-block" sticky ref={message} /> */}

        </>
    )
}
