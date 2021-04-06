import React, { useState, useContext } from 'react'
import Form from './Form'
import { onChange, onDropdownChange } from '../../../utilities'
import { Messages } from 'primereact/messages';
import { AlertContext } from '../../../layout/Auth';

export default function Forgot() {

    let [message, setMessage] = useContext(AlertContext)
    let [state, changeState] = useState({
        formForgot: {
            issue: '',
            email: '',
            formState: 1
        },
        headerText: "Access account",
        headerSubText: "Please select the issue you are experiencing  accessing your account",
    })

    const addMessage = (severity, content) => {
        setMessage({
            severity, content, toggle: !message.toggle
        })
    };

    const handleChange = (e) => {
        onChange(e, state, changeState)
    }

    const handleDropdownChange = (e) => {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        changeState({
            ...state,
            formForgot: {
                ...state.formForgot,
                [input.name]: value.code,
                formState: 2
            },
            headerText: value.code == "1" ? "Forgot Password" : "Forget username",
            headerSubText: value.code == "1" ? "Enter your email address to retrieve your account" : "Enter your email address to retrieve your username",
        });
    }

    const handleSubmit = () => {
        let { formForgot: { issue } } = state
        if (issue == "1") {
            window.location.href = '/remember'
        } else {
            addMessage("success", "No backend yet :)")
        }
    }
    return (
        <div>

            <div className="p-text-center">

                <h1 className="text-primary">{state.headerText}</h1>
                <p className="p-px-2 p-pb-4">{state.headerSubText}</p>
                <Form
                    formControl={state.formForgot}
                    onChange={handleChange}
                    handleDropdownChange={handleDropdownChange}
                    formName="formForgot"
                    onSubmit={handleSubmit}
                    dropdownItems={[
                        { name: 'Forgot Password', code: '1' },
                        { name: 'Forgot Username', code: '2' },
                        { name: 'Inactive Account', code: '3' }
                    ]}
                />
            </div>
        </div>
    )
}
