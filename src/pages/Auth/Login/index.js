import React, { useState, useRef } from 'react'
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import Form from './Form';
import { onChange } from '../../../utilities';
import { Messages } from 'primereact/messages';

export default function Login() {
    const message = useRef();

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
        message.current.show({ severity, content });
    };

    const handleSubmit = () => {
        addMessage("success", "No backend yet :)")
    }
    return (
        <div>
            <div className="card">
                <div className="card-body p-px-3 p-py-3">
                    <div className="input-panel p-d-flex p-flex-column p-px-3 p-py-3">
                        <h2>Login</h2>
                        <div>
                            <Form
                                formControl={state.formLogin}
                                onChange={handleChange}
                                formName="formLogin"
                                onSubmit={handleSubmit}
                            />
                        </div>

                    </div>
                    <Messages className="p-d-block" life={400000000000000} sticky ref={message} />

                </div>
            </div>

        </div>
    )
}
