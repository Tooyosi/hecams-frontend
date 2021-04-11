import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Form from './Form';
import { onChange } from 'utilities';
import { AlertContext } from 'layout/Auth';
import { login } from 'service/authService';
import { saveCookies } from 'service';
export default function Login() {

    let [message, setMessage] = useContext(AlertContext)
    const [state, changeState] = useState({
        formLogin: {
            username: '',
            password: '',
            loading: false
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

    const handleSubmit = async (formFields, { resetForm, setFieldError, setSubmitting }) => {
        try {
            let { formLogin } = state
            let { data } = await login(formLogin)
            // Check if login action is successful
            if (data["action-successful"]) {

                // save cookies and redirect
                saveCookies({ token: data["access-token"], refreshToken: data["refresh-token"] }, () => {

                    addMessage("success", "Successful")
                    setTimeout(() => {
                        localStorage.setItem("loggedIn", "true")
                        window.location.href = "/dashboard"
                    }, 1000)

                })
            }else{
                addMessage("error", "An error occured during login")
            }
        } catch (error) {
            if (error && error.response) {
                let { data } = error.response
                addMessage("error", data.message)
            } else {
                addMessage("error", "An error occured during login")
            }
        }
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
