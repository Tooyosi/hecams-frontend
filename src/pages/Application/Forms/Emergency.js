import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"
import FormLayout from './Layout';
import FormFooter from './FormFooter';

export const validation = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    alternativePhone: Yup.string().required("Required"),
    relationship: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zip: Yup.string().required("Required")
        .matches(/[0-9]/g, "Zip Code must be a number"),
    state: Yup.string().required("Required")

})

export default function Emergency(props) {
    let { formControl, onChange, formName, handleGoBack } = props

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

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.fullName && touched.fullName ? 'p-invalid' : ''}`}
                                                value={values.fullName}
                                                onChange={handleChange} />
                                            <label htmlFor="fullName">Name *</label>

                                        </span>
                                        {showFieldError("fullName", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="address"
                                                name="address"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.address && touched.address ? 'p-invalid' : ''}`}
                                                value={values.address}
                                                onChange={handleChange} />
                                            <label htmlFor="address">Address *</label>

                                        </span>
                                        {showFieldError("address", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.phone && touched.phone ? 'p-invalid' : ''}`}
                                                value={values.phone}
                                                onChange={handleChange} />
                                            <label htmlFor="phone">Phone Number *</label>

                                        </span>
                                        {showFieldError("phone", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="city"
                                                name="city"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.city && touched.city ? 'p-invalid' : ''}`}
                                                value={values.city}
                                                onChange={handleChange} />
                                            <label htmlFor="city">City *</label>

                                        </span>
                                        {showFieldError("city", errors, touched)}

                                    </div>
                                </div>
                                <div className="p-grid">


                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="alternativePhone"
                                                name="alternativePhone"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.alternativePhone && touched.alternativePhone ? 'p-invalid' : ''}`}
                                                value={values.alternativePhone}
                                                onChange={handleChange} />
                                            <label htmlFor="alternativePhone">Alternative Phone Number *</label>

                                        </span>
                                        {showFieldError("alternativePhone", errors, touched)}
                                    </div>

                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="state"
                                                name="state"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.state && touched.state ? 'p-invalid' : ''}`}
                                                value={values.state}
                                                onChange={handleChange} />
                                            <label htmlFor="state">State *</label>

                                        </span>
                                        {showFieldError("state", errors, touched)}

                                    </div>
                                </div>
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="relationship"
                                                name="relationship"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.relationship && touched.relationship ? 'p-invalid' : ''}`}
                                                value={values.relationship}
                                                onChange={handleChange} />
                                            <label htmlFor="relationship">Relationship</label>

                                        </span>
                                        {showFieldError("relationship", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="zip"
                                                name="zip"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.zip && touched.zip ? 'p-invalid' : ''}`}
                                                value={values.zip}
                                                onChange={handleChange} />
                                            <label htmlFor="zip">Zip Code *</label>

                                        </span>
                                        {showFieldError("zip", errors, touched)}

                                    </div>
                                </div>

                            </FormLayout>
                            {/* <div className="p-grid p-justify-end">
                                <div className="p-col-12 p-lg-6 p-md-6 p-sm-6-6">
                                    <Button label={isSubmitting ? 'Loading...please wait' : `Next`} disabled={isSubmitting} className="width-100 button-white" icon="pi pi-arrow-right" iconPos="right" ></Button>
                                </div>
                            </div> */}
                             <FormFooter
                                backText="Back"
                                nextText="Next"
                                goBack={handleGoBack}
                                proceed={handleSubmit}
                                disabled={isSubmitting}
                            />
                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
