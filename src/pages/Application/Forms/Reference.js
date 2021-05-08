import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import *  as Yup from "yup"
import FormLayout from './Layout';

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


const FormDisplay = ({ formName, countryOption, handleChange, onChange, handleBlur, errors, values, handleDropdownChange, touched, showFieldError, withLevel, formControl, header }) => {
    let doChange = (e) => {
        handleChange(e)
        onChange(e, formName)

    }
    return (
        // <div className="p-card p-p-4">
        //     <div className="p-card-body">
        <div className="p-grid">
            <div className="p-col-12">
                <h6>{header}</h6>
            </div>
            <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                <span className="p-float-label">
                    <InputText
                        type="text"
                        id={`${formName}Name`}
                        name={`${formName}Name`}
                        onBlur={handleBlur}
                        className={`width-100  ${errors[`${formName}Name`] && touched[`${formName}Name`] ? 'p-invalid' : ''}`}
                        value={values[`${formName}Name`]}
                        onChange={doChange} />
                    <label htmlFor={`${formName}Name`}>Name </label>

                </span>
                {showFieldError(`${formName}Name`, errors, touched)}
            </div>
            <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">

                <Dropdown
                    id={`${formName}Relationship`}
                    name={`${formName}Relationship`}
                    value={values[`${formName}Relationship`]}
                    onChange={(e) => {
                        doChange(e)
                        handleDropdownChange(e, formName)
                    }}
                    options={countryOption}
                    className={`width-100  ${errors[`${formName}Relationship`] && touched[`${formName}Relationship`] ? 'p-invalid' : ''}`}
                    optionLabel="name"
                    placeholder="Relationship"></Dropdown>



                {showFieldError(`${formName}Relationship`, errors, touched)}
            </div>
            <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                <span className="p-float-label">
                    <InputText
                        type="number"
                        id={`${formName}Years`}
                        name={`${formName}Years`}
                        onBlur={handleBlur}
                        className={`width-100  ${errors[`${formName}Years`] && touched[`${formName}Years`] ? 'p-invalid' : ''}`}
                        value={values[`${formName}Years`]}
                        onChange={doChange} />
                    <label htmlFor={`${formName}Years`}>Years Known</label>

                </span>
                {showFieldError(`${formName}Years`, errors, touched)}
            </div>
            <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                <span className="p-float-label">
                    <InputText
                        type="text"
                        id={`${formName}Phone`}
                        name={`${formName}Phone`}
                        onBlur={handleBlur}
                        className={`width-100  ${errors[`${formName}Phone`] && touched[`${formName}Phone`] ? 'p-invalid' : ''}`}
                        value={values[`${formName}Phone`]}
                        onChange={doChange} />
                    <label htmlFor={`${formName}Phone`}>Phone *</label>

                </span>
                {showFieldError(`${formName}Phone`, errors, touched)}
            </div>
        </div>
        //     </div>
        // </div>
    )
}


export default function Reference(props) {
    let { formControl, onChange, formReference1Name, countryOption, formReference2Name, formReference3Name, formProfessionalName } = props

    return (
        <FormsWrapper values={{ ...formControl.formReference1, ...formControl.formReference2, ...formControl.formReference3 }}
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
                        <form onSubmit={handleSubmit} >
                            <FormLayout>


                                <div className="p-col-12">
                                    <FormDisplay
                                        formName={formReference1Name}
                                        countryOption={countryOption}
                                        handleChange={handleChange}
                                        withLevel={true}
                                        values={values}
                                        errors={errors}
                                        onChange={onChange}
                                        touched={touched}
                                        header="Reference 1*"
                                        handleBlur={handleBlur}
                                        formControl={formControl.formReference1}
                                        showFieldError={showFieldError} />
                                </div>

                                <div className="p-col-12">
                                    <FormDisplay
                                        formName={formReference2Name}
                                        countryOption={countryOption}
                                        handleChange={handleChange}
                                        withLevel={false}
                                        values={values}
                                        errors={errors}
                                        onChange={onChange}
                                        touched={touched}
                                        header="Reference 2*"
                                        handleBlur={handleBlur}
                                        formControl={formControl.formReference2}
                                        showFieldError={showFieldError} />
                                </div>

                                <div className="p-col-12">
                                    <FormDisplay
                                        formName={formReference3Name}
                                        countryOption={countryOption}
                                        handleChange={handleChange}
                                        withLevel={false}
                                        values={values}
                                        errors={errors}
                                        onChange={onChange}
                                        touched={touched}
                                        header="Reference 3*"
                                        handleBlur={handleBlur}
                                        formControl={formControl.formReference3}
                                        showFieldError={showFieldError} />
                                </div>





                            </FormLayout>
                            <div className="p-grid p-justify-end">
                                <div className="p-col-6 p-lg-3  p-md-6 p-sm-6 p-lg-6 p-md-6 p-sm-6-6">
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
