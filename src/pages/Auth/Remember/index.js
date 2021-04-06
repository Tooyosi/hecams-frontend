import React, { useState, useContext } from 'react'
import Form from './Form'
import { onChange, onDropdownChange } from '../../../utilities'
import { Messages } from 'primereact/messages';
import { AlertContext } from '../../../layout/Auth';

export default function Remember() {

    let [message, setMessage] = useContext(AlertContext)
    let [state, changeState] = useState({
        formRemember: {
            token: '',
            email: '',
            cPassword: '',
            password:'',
            formState: 1
        },
        headerText: "Token Code",
        headerSubText: "Enter your access code to retrieve your reset your password",
    })

    const addMessage = (severity, content) => {
        setMessage({
            severity, content, toggle: !message.toggle
        })
    };

    const handleChange = (e) => {
        onChange(e, state, changeState)
    }

    const handleSubmit = () => {
        let { formRemember: { formState } } = state
        if (formState == 1) {
            changeState({
                ...state,
                formRemember: {
                    ...state.formRemember,
                    formState: 2
                },
                headerText: "Reset password",
                headerSubText: "Enter your enter to your new password"
            });
        } else {
            // addMessage("success", "No backend yet :)")
            window.location.href = '/login'
        }
    }
    return (
        <div>

            <div className="p-text-center">

                <h1 className="text-primary">{state.headerText}</h1>
                <p className="p-px-2 p-pb-4">{state.headerSubText}</p>
                <Form
                    formControl={state.formRemember}
                    onChange={handleChange}
                    formName="formRemember"
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}
