import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"
import FormLayout from './Layout';
import { EmailValidation, NumberLengthValidation, RequiredWithCharacterValidation } from 'utilities';

export default function FormOtp({ formStep, formControl, onChange, formName, handleDropdownChange, yesOrNoOptions, genderOptions, ...props }) {

    let validationShape = {}
    if (formStep == 1) {

        validationShape.email = EmailValidation
    } else if (formStep == 2) {
        validationShape.otp = NumberLengthValidation(6)

    }
    let validation = Yup.object().shape(validationShape)
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
                            <FormLayout>
                                {formStep == 1 ?
                                    <div className="p-grid">
                                        <div className="p-col-12">
                                            <h5 className="p-text-center">Enter your email</h5>
                                            <span className="p-float-label">
                                                <InputText
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    className={`width-100  ${errors.email && touched.email ? 'p-invalid' : ''}`}
                                                    value={values.email}
                                                    onChange={handleChange} />
                                                <label htmlFor="email">Email *</label>

                                            </span>
                                            {showFieldError("email", errors, touched)}
                                        </div>
                                    </div>
                                    :
                                    <div className="p-grid">
                                        <div className="p-col-12">
                                            <h5 className="p-text-center">Code sent to email</h5>
                                            <span className="p-float-label">
                                                <InputText
                                                    type="text"
                                                    id="otp"
                                                    name="otp"
                                                    onBlur={handleBlur}
                                                    className={`width-100  ${errors.otp && touched.otp ? 'p-invalid' : ''}`}
                                                    value={values.otp}
                                                    onChange={handleChange} />
                                                <label htmlFor="email">OTP *</label>

                                            </span>
                                            {showFieldError("otp", errors, touched)}
                                        </div>
                                    </div>}

                                <div className="p-grid">
                                    <div className="p-col-6">
                                        {formStep == 2 &&
                                            <Button   disabled={isSubmitting} label="Resend OTP" type="button" role="button" className="width-100" />
                                        }
                                    </div>
                                    <div className="p-col-6">
                                        <Button  disabled={isSubmitting} label={`${isSubmitting? "Please wait..." :"Submit"}`} className="width-100" />
                                    </div>
                                </div>

                            </FormLayout>
                        </form>
                    )
                }
            }
        </FormsWrapper>

    )
}
