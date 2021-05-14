import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import *  as Yup from "yup"
import FormLayout from './Layout';
import { PDF_OR_WORD } from 'utilities';
import FormFooter from './FormFooter';



let validationFn = (formName)=>{
    return {
        [`${formName}Name`]: Yup.string().required("Required"),
        [`${formName}City`]: Yup.string().required("Required"),
        [`${formName}State`]: Yup.string().required("Required"),
        [`${formName}Country`]: Yup.string().required("Required"),
        [`${formName}Level`]: Yup.string().required("Required"),
        [`${formName}Degree`]: Yup.string().required("Required"),
        [`${formName}Major`]: Yup.string().required("Required"),
        [`${formName}Certificate`]: Yup.string().required("Required")
    }
}

const FormDisplay = ({ formName, countryOption, handleChange, onChange, handleBlur, errors, values, handleDropdownChange, touched, showFieldError, withLevel, formControl, header }) => {
    let doChange = (e) => {
        handleChange(e)
        onChange(e, formName)

    }
    return (
        <div className="p-card p-p-4">
            <div className="p-card-body">
                <div className="">
                    <div className="p-col-12">
                        <h6>{header}</h6>
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
                    <div className="p-col-12">
                        <span className="p-float-label">
                            <InputText
                                type="text"
                                id={`${formName}City`}
                                name={`${formName}City`}
                                onBlur={handleBlur}
                                className={`width-100  ${errors[`${formName}City`] && touched[`${formName}City`] ? 'p-invalid' : ''}`}
                                value={values[`${formName}City`]}
                                onChange={doChange} />
                            <label htmlFor={`${formName}City`}>City </label>

                        </span>
                        {showFieldError(`${formName}City`, errors, touched)}
                    </div>
                    <div className="p-col-12">
                        <span className="p-float-label">
                            <InputText
                                type="text"
                                id={`${formName}State`}
                                name={`${formName}State`}
                                onBlur={handleBlur}
                                className={`width-100  ${errors[`${formName}State`] && touched[`${formName}State`] ? 'p-invalid' : ''}`}
                                value={values[`${formName}State`]}
                                onChange={doChange} />
                            <label htmlFor={`${formName}State`}>State </label>

                        </span>
                        {showFieldError(`${formName}State`, errors, touched)}
                    </div>
                     <div className="p-col-12">
                     <span className="p-float-label">

                        <Dropdown
                            id={`${formName}Country`}
                            name={`${formName}Country`}
                            value={values[`${formName}Country`]}
                            onChange={(e) => {
                                doChange(e)
                                handleDropdownChange(e, formName)
                            }}
                            options={countryOption}
                            className={`width-100  ${errors[`${formName}Country`] && touched[`${formName}Country`] ? 'p-invalid' : ''}`}
                            optionLabel="name"
                            ></Dropdown>
                            <label htmlFor={`${formName}Country`}>Country</label>
                            </span>

                        {showFieldError(`${formName}Country`, errors, touched)}
                    </div>
                    {withLevel && <div className="p-col-12">
                        <span className="p-float-label">
                            <InputText
                                type="text"
                                id={`${formName}Level`}
                                name={`${formName}Level`}
                                onBlur={handleBlur}
                                className={`width-100  ${errors[`${formName}Level`] && touched[`${formName}Level`] ? 'p-invalid' : ''}`}
                                value={values[`${formName}Level`]}
                                onChange={doChange} />
                            <label htmlFor={`${formName}Level`}>Level Completed </label>

                        </span>
                        {showFieldError(`${formName}Level`, errors, touched)}
                    </div>}
                    <div className="p-col-12">
                        <span className="p-float-label">
                            <InputText
                                type="text"
                                id={`${formName}Degree`}
                                name={`${formName}Degree`}
                                onBlur={handleBlur}
                                className={`width-100  ${errors[`${formName}Degree`] && touched[`${formName}Degree`] ? 'p-invalid' : ''}`}
                                value={values[`${formName}Degree`]}
                                onChange={doChange} />
                            <label htmlFor={`${formName}Degree`}>Degree</label>

                        </span>
                        {showFieldError(`${formName}Degree`, errors, touched)}
                    </div>
                    <div className="p-col-12">
                        <span className="p-float-label">
                            <InputText
                                type="text"
                                id={`${formName}Major`}
                                name={`${formName}Major`}
                                onBlur={handleBlur}
                                className={`width-100  ${errors[`${formName}Major`] && touched[`${formName}Major`] ? 'p-invalid' : ''}`}
                                value={values[`${formName}Major`]}
                                onChange={doChange} />
                            <label htmlFor={`${formName}Major`}>Major</label>

                        </span>
                        {showFieldError(`${formName}Major`, errors, touched)}
                    </div>
                    <div className="p-col-12">
                        <div className="p-field">
                            <label htmlFor={`${formName}Certificate`}
                                className={`${formControl[`${formName}Certificate`] !== "" && formControl[`${formName}Certificate`] !== null ? 'bg-primary ' : ''}upload-div width-100 p-border-none p-p-2`}
                            >

                                <p>{formControl[`${formName}Certificate`] !== "" && formControl[`${formName}Certificate`] !== null ? formControl[`${formName}Certificate`].name : "Load certificate"}</p></label>

                            <span className="p-float-label">
                                <InputText
                                    type="file"
                                    id={`${formName}Certificate`}
                                    name={`${formName}Certificate`}
                                    onBlur={handleBlur}
                                    accept={PDF_OR_WORD}
                                    className={`p-d-none  ${errors[`${formName}Certificate`] && touched[`${formName}Certificate`] ? 'p-invalid' : ''}`}
                                    // value={values[`${formName}Certificate`]}
                                    onChange={doChange} />

                            </span>
                            {showFieldError(`${formName}Certificate`, errors, touched)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Education(props) {
    let { formControl, onChange, formHighSchoolName, countryOption, handleGoBack, formCollegeName, formTradeName, formProfessionalName, handleDropdownChange } = props

    let validationShape = {
        ...validationFn(formHighSchoolName)
    }

    let collegeValues = Object.values(formControl[formCollegeName])
    let tradeValues = Object.values(formControl[formTradeName])
    let professionalValues = Object.values(formControl[formProfessionalName])


    const notEmpty = (array)=>{
        let response = false
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(element !== ""){
                response = true
            }
            
        }

        return response
    }

    // check if each form sets are empty
    let hasCollegeField = notEmpty(collegeValues)
    let hasTradeField = notEmpty(tradeValues)
    let hasProfessionalField = notEmpty(professionalValues)
    if(hasCollegeField){
        validationShape = {
            ...validationShape,
        ...validationFn(formCollegeName)
        }
    }
    if(hasTradeField){
        validationShape = {
            ...validationShape,
        ...validationFn(formTradeName)
        }
    }
    if(hasProfessionalField){
        validationShape = {
            ...validationShape,
        ...validationFn(formProfessionalName)
        }
    }

    const validation = Yup.object().shape(validationShape)
    return (
        <FormsWrapper values={{ ...formControl.formHighSchool, ...formControl.formCollege, ...formControl.formTrade, ...formControl.formProfessional }}
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

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <FormDisplay
                                            formName={formHighSchoolName}
                                            countryOption={countryOption}
                                            handleChange={handleChange}
                                            withLevel={true}
                                            values={values}
                                            handleDropdownChange={handleDropdownChange}
                                            errors={errors}
                                            onChange={onChange}
                                            touched={touched}
                                            header="High School / Equivalent*"
                                            handleBlur={handleBlur}
                                            formControl={formControl.formHighSchool}
                                            showFieldError={showFieldError} />
                                    </div>

                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <FormDisplay
                                            formName={formCollegeName}
                                            countryOption={countryOption}
                                            handleChange={handleChange}
                                            withLevel={false}
                                            values={values}
                                            handleDropdownChange={handleDropdownChange}
                                            errors={errors}
                                            onChange={onChange}
                                            touched={touched}
                                            header="College"
                                            handleBlur={handleBlur}
                                            formControl={formControl.formCollege}
                                            showFieldError={showFieldError} />
                                    </div>

                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <FormDisplay
                                            formName={formTradeName}
                                            countryOption={countryOption}
                                            handleChange={handleChange}
                                            withLevel={false}
                                            values={values}
                                            errors={errors}
                                            onChange={onChange}
                                            touched={touched}
                                            header="Bus or Trade School "
                                            handleBlur={handleBlur}
                                            handleDropdownChange={handleDropdownChange}
                                            formControl={formControl.formTrade}
                                            showFieldError={showFieldError} />
                                    </div>

                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <FormDisplay
                                            formName={formProfessionalName}
                                            countryOption={countryOption}
                                            handleChange={handleChange}
                                            withLevel={false}
                                            values={values}
                                            errors={errors}
                                            handleDropdownChange={handleDropdownChange}
                                            onChange={onChange}
                                            touched={touched}
                                            header="Professional"
                                            handleBlur={handleBlur}
                                            formControl={formControl.formProfessional}
                                            showFieldError={showFieldError} />
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
