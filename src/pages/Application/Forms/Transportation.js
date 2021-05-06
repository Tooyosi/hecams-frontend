import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"
import FormLayout from './Layout';

export const validation = Yup.object().shape({
    car: Yup.string().required("Required"),
    reason: Yup.string().required("Required"),
    license: Yup.string().required("Required"),
    expiration: Yup.string().required("Required"),

})

export default function Transportation(props) {
    let { formControl, onChange, formName, handleDropdownChange, yesOrNoOptions } = props

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

                                        <Dropdown
                                            id="car"
                                            name="car"
                                            value={values.car}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.car && touched.car ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Do you have a car?*"></Dropdown>



                                        {showFieldError("car", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="reason"
                                                name="reason"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.reason && touched.reason ? 'p-invalid' : ''}`}
                                                value={values.reason}
                                                onChange={handleChange} />
                                            <label htmlFor="reason">If you don’t have a car how do you get to work?</label>

                                        </span>
                                        {showFieldError("reason", errors, touched)}

                                    </div>
                                </div>


                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="license"
                                                name="license"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.license && touched.license ? 'p-invalid' : ''}`}
                                                value={values.fullName}
                                                onChange={handleChange} />
                                            <label htmlFor="license">Driver Driver’s Liense #</label>

                                        </span>
                                        {showFieldError("license", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="expiration"
                                                name="expiration"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.expiration && touched.expiration ? 'p-invalid' : ''}`}
                                                value={values.expiration}
                                                onChange={handleChange} />
                                            <label htmlFor="expiration">Expiration</label>

                                        </span>
                                        {showFieldError("expiration", errors, touched)}

                                    </div>
                                </div>

                            </FormLayout>
                            <div className="p-grid p-justify-end">
                                <div className="p-col-12 p-lg-6 p-md-6 p-sm-6-6">
                                    <Button label={isSubmitting ? 'Loading...please wait' : `Next`} disabled={isSubmitting} className="width-100 button-white" icon="pi pi-arrow-right" iconPos="right" ></Button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
