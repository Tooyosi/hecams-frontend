import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"

export const validation = Yup.object().shape({
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zip: Yup.string().required("Required")
        .matches(/[0-9]/g, "Zip Code must be a number"),
    state: Yup.string().required("Required")

})
export default function FormAddress(props) {
    let { formControl, onChange, formName, handleDropdownChange, cityOptions } = props

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
                                <label htmlFor="address1">Address 1</label>
                                <InputText
                                    type="text"
                                    id="address1"
                                    name="address1"
                                    onBlur={handleBlur}
                                    className={`width-100  ${errors.address1 && touched.address1 ? 'p-invalid' : ''}`}
                                    value={values.address1}
                                    onChange={handleChange} />

                                {showFieldError("address1", errors, touched)}
                            </div>
                            <div className="p-field">

                                <label htmlFor="address2">Address 2</label>
                                <InputText
                                    type="text"
                                    id="address2"
                                    name="address2"
                                    onBlur={handleBlur}
                                    className={`width-100 ${errors.address2 && touched.address2 ? 'p-invalid' : ''}`}
                                    value={values.address2}
                                    onChange={handleChange} />

                                {showFieldError("address2", errors, touched)}
                            </div>
                            <div className="p-formgrid p-grid  p-my-3">

                                <div className="p-field p-col">
                                    <label htmlFor="city">City</label>

                                    <Dropdown
                                        id="city"
                                        name="city"
                                        value={values.city}
                                        onChange={(e) => {
                                            handleChange(e)
                                            handleDropdownChange(e, formName)
                                        }}
                                        options={cityOptions}
                                        className={`width-100  ${errors.city && touched.city ? 'p-invalid' : ''}`}
                                        optionLabel="name"
                                        placeholder="Select City"></Dropdown>


                                    {showFieldError("city", errors, touched)}

                                </div>
                                <div className="p-field p-col">
                                    <label htmlFor="zip">Zip/ Postal Code</label>

                                    <InputText
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        onBlur={handleBlur}
                                        className={`width-100 ${errors.zip && touched.zip ? 'p-invalid' : ''}`}
                                        value={values.zip}
                                        onChange={handleChange} />

                                    {showFieldError("zip", errors, touched)}
                                </div>
                            </div>
                            <div className="p-field p-my-3">
                                <label htmlFor="state">State/ Province/ Region</label>
                                <InputText
                                    type="text"
                                    id="state"
                                    name="state"
                                    onBlur={handleBlur}
                                    className={`width-100 ${errors.state && touched.state ? 'p-invalid' : ''}`}
                                    value={formControl.state}
                                    onChange={handleChange} />

                                {showFieldError("state", errors, touched)}
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
