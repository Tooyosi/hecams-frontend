import React from 'react'
import FormsWrapper, { showFieldError } from '../../../components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"

export const validation = Yup.object().shape({
    issue: Yup.string().required("Required"),
    email: Yup.string()
        .required("Required")
})
export default function Form(props) {
    let { formControl, onChange, formName, dropdownItems, handleDropdownChange } = props

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
                            <div className="p-field">
                                <Dropdown
                                    id="issue"
                                    name="issue"
                                    value={values.issue}
                                    onChange={(e) => {
                                        handleChange(e)
                                        handleDropdownChange(e)
                                    }}
                                    options={dropdownItems}
                                    className={`width-100  ${errors.issue && touched.issue ? 'p-invalid' : ''}`}
                                    optionLabel="name"
                                    placeholder="Select Issue"></Dropdown>

                                {showFieldError("issue", errors, touched)}

                            </div>
                            {formControl.formState > 1 && <>
                                <div className="p-field p-my-3">
                                    <span className="p-float-label">
                                        <InputText
                                            type="email"
                                            id="email"
                                            name="email"
                                            onBlur={handleBlur}
                                            className={`width-100 ${errors.email && touched.email ? 'p-invalid' : ''}`}
                                            value={values.email}
                                            onChange={handleChange} />
                                        <label htmlFor="email">Email</label>
                                    </span>
                                    {showFieldError("email", errors, touched)}
                                </div>
                                <Button label="Sign in" className="width-100" ></Button>
                            </>}
                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
