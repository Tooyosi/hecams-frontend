import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import *  as Yup from "yup"
import FormLayout from './Layout';
import FormFooter from './FormFooter';




let validationFn = (formName)=>{
    return {
        [`${formName}Name`]: Yup.string().required("Required"),
        [`${formName}Relationship`]: Yup.string().required("Required"),
        [`${formName}Years`]: Yup.string().required("Required"),
        [`${formName}Phone`]: Yup.string().required("Required")
    }
}
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
            <span className="p-float-label">

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
                    ></Dropdown>
                    <label htmlFor={`${formName}Relationship`}>Relationship</label>
                    </span>

                {showFieldError(`${formName}Relationship`, errors, touched)}
            </div>
            <div className="p-col-6 p-lg-3  p-md-6 p-sm-6">
                <span className="p-float-label">
                    <InputText
                        type="number"
                        id={`${formName}Years`}
                        name={`${formName}Years`}
                        onBlur={handleBlur}
                        min="0"
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
    let { formControl, onChange, formReference1Name,handleGoBack, countryOption, formReference2Name, formReference3Name, handleDropdownChange } = props
    const validation = Yup.object().shape({
       ...validationFn(formReference1Name),
       ...validationFn(formReference2Name),
       ...validationFn(formReference3Name)
    })

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
                                        handleDropdownChange={handleDropdownChange}
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
                                        handleDropdownChange={handleDropdownChange}
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
                                        handleDropdownChange={handleDropdownChange}
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
