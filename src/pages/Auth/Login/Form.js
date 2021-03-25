import React from 'react'
import FormsWrapper from '../../../components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import * as Yup from "yup"

export const validation = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string()
        .required("Required")
})
export default function Form(props) {
    let { formControl, onChange, formName } = props

    return (
        <FormsWrapper values={formControl}
            handleSubmit={props.onSubmit}
            handleChange={onChange}
            validationSchema={validation}>
            {
                props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit } = props;
                    return (
                        <form onChange={onChange} onSubmit={handleSubmit} name={formName} >
                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText 
                                        type="text" 
                                        id="username" 
                                        name="username"
                                        onBlur={handleBlur}
                                        className={`p-col-12 p-my-3  ${errors.username && touched.username? 'p-invalid' : ''}`}
                                        value={values.username} 
                                        onChange={handleChange} />
                                    <label htmlFor="username">Username</label>
                                </span>
                            </div>
                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText 
                                        type="text" 
                                        id="password" 
                                        name="password"
                                        onBlur={handleBlur}
                                        className={`p-col-12 p-my-3  ${errors.password && touched.password? 'p-invalid' : ''}`}
                                        value={values.password} 
                                        onChange={handleChange} />
                                    <label htmlFor="username">Password</label>
                                </span>
                            </div>
                            <Button label="Submit"></Button>

                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
