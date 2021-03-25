import React, { useState } from 'react'
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import Form from './Form';

export default function Login() {
    const [state, changeState] = useState({
        formLogin:{
            username:'',
            password:''
        }
    })

    const handleChange = (e) => {
        const input = e.target;
        const form = input.form;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        changeState({
            ...state,
            [form.name]: {
                ...state[form.name],
                [input.name]: value,
            }
        });
    }
    return (
        <div>

            <Panel header="Login">
                <div>
                <Form 
                    formControl={state.formLogin}
                    onChange={handleChange}
                    formName="formLogin"
                />
                </div>
                </Panel>
        </div>
    )
}
