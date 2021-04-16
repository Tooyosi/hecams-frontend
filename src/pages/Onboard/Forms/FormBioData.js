import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import * as Yup from "yup"

export const validation = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    middlename: Yup.string().required("Required"),
    lastname: Yup.string()
        .required("Required"),
    calendar: Yup.string().required("Required"),
    ssn: Yup.string().required("Required")
        .matches(/[0-9]/g, "Social Security must be a number")
    ,

})
export default function FormBioData(props) {
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
                            <div className="p-formgrid p-grid">
                                <div className="p-field p-col">
                                    <label htmlFor="firstname">Firstname</label>

                                    <InputText
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="Firstname"
                                        onBlur={handleBlur}
                                        className={`width-100  ${errors.firstname && touched.firstname ? 'p-invalid' : ''}`}
                                        value={values.firstname}
                                        onChange={handleChange} />

                                    {showFieldError("firstname", errors, touched)}
                                </div>
                                <div className="p-field p-col">

                                    <label htmlFor="middlename">Middle Name</label>
                                    <InputText
                                        type="text"
                                        id="middlename"
                                        placeholder="Middle name"
                                        name="middlename"
                                        onBlur={handleBlur}
                                        className={`width-100 ${errors.middlename && touched.middlename ? 'p-invalid' : ''}`}
                                        value={values.middlename}
                                        onChange={handleChange} />

                                    {showFieldError("middlename", errors, touched)}
                                </div>
                            </div>
                            <div className="p-field">
                                <label htmlFor="lastname">Last name</label>

                                <InputText
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last name"
                                    onBlur={handleBlur}
                                    className={`width-100  ${errors.lastname && touched.lastname ? 'p-invalid' : ''}`}
                                    value={values.lastname}
                                    onChange={handleChange} />

                                {showFieldError("lastname", errors, touched)}

                            </div>
                            <div className="p-field p-my-3">
                                <label htmlFor="calendar">Date of Birth</label>

                                <InputText
                                    type="date"
                                    id="calendar"
                                    name="calendar"
                                    onBlur={handleBlur}
                                    className={`width-100 ${errors.calendar && touched.calendar ? 'p-invalid' : ''}`}
                                    value={values.calendar}
                                    onChange={handleChange} />

                                {showFieldError("calendar", errors, touched)}
                            </div>
                            <div className="p-field p-my-3">
                                <label htmlFor="calendar">Social Security Number</label>
                                <InputText
                                    type="text"
                                    id="ssn"
                                    name="ssn"
                                    placeholder="000-000-000"
                                    onBlur={handleBlur}
                                    className={`width-100 ${errors.ssn && touched.ssn ? 'p-invalid' : ''}`}
                                    value={formControl.ssn}
                                    onChange={handleChange} />

                                {showFieldError("ssn", errors, touched)}
                            </div>

                            <div className="p-grid">
                                <div className="p-col-6">
                                    <Button label={isSubmitting ? 'Loading...please wait' : `Next`} disabled={isSubmitting} className="width-100" ></Button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
