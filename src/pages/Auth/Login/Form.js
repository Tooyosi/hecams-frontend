import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
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
                        isSubmitting,
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
                                        className={`width-100  ${errors.username && touched.username? 'p-invalid' : ''}`}
                                        value={values.username} 
                                        onChange={handleChange} />
                                    <label htmlFor="username">Staff ID</label>
                                </span>
                                {showFieldError("username", errors, touched)}

                            </div>
                            <div className="p-field p-my-3">
                                <span className="p-float-label">
                                    <InputText 
                                        type="text" 
                                        id="password" 
                                        name="password"
                                        onBlur={handleBlur}
                                        className={`width-100 ${errors.password && touched.password? 'p-invalid' : ''}`}
                                        value={values.password} 
                                        onChange={handleChange} />
                                    <label htmlFor="username">Password</label>
                                </span>
                                {showFieldError("password", errors, touched)}
                            </div>
                            <Button label={isSubmitting? 'Loading...please wait': `Sign in`} disabled={isSubmitting} className="width-100" ></Button>

                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
