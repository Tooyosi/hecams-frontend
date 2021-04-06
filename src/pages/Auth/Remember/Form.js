import React from 'react'
import FormsWrapper, { showFieldError } from '../../../components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import * as Yup from "yup"

export default function Form(props) {
    let { formControl, onChange, formName } = props

    let validation
    switch (formControl.formState) {
        case 1:
            validation = Yup.object().shape({
                token: Yup.string().required("Required")
            })
            break;
        case 2:
            validation = Yup.object().shape({
                password: Yup.string()
                    .required("Required"),
                cPassword: Yup.string()
                    .required("Required").oneOf([Yup.ref("password"), null], "Password dont match"),
            })
            break;
    }
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
                        <form onChange={onChange} onSubmit={handleSubmit} name={formName} className="p-text-left">
                            {formControl.formState == 1 ?
                                <div className="p-field p-my-3">
                                    <span className="p-float-label">
                                        <InputText
                                            type="number"
                                            id="token"
                                            min="0"
                                            name="token"
                                            onBlur={handleBlur}
                                            className={`width-100 ${errors.token && touched.token ? 'p-invalid' : ''}`}
                                            value={values.token}
                                            onChange={handleChange} />
                                        <label htmlFor="token">Token</label>
                                    </span>
                                    {showFieldError("token", errors, touched)}
                                </div> :
                                <>
                                    <div className="p-field p-my-3">
                                        <span className="p-float-label">
                                            <InputText
                                                type="password"
                                                id="password"
                                                name="password"
                                                onBlur={handleBlur}
                                                className={`width-100 ${errors.password && touched.password ? 'p-invalid' : ''}`}
                                                value={values.password}
                                                onChange={handleChange} />
                                            <label htmlFor="password">Password</label>
                                        </span>
                                        {showFieldError("password", errors, touched)}
                                    </div>
                                    <div className="p-field p-my-3">
                                        <span className="p-float-label">
                                            <InputText
                                                type="password"
                                                id="cPassword"
                                                name="cPassword"
                                                onBlur={handleBlur}
                                                className={`width-100 ${errors.cPassword && touched.cPassword ? 'p-invalid' : ''}`}
                                                value={values.cPassword}
                                                onChange={handleChange} />
                                            <label htmlFor="cPassword">Confirm Password</label>
                                        </span>
                                        {showFieldError("cPassword", errors, touched)}
                                    </div>
                                </>}
                            <Button type="submit" label="Submit" className="width-100" ></Button>

                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
