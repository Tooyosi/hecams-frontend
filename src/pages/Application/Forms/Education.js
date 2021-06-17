import React, { useState } from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import *  as Yup from "yup"
import FormLayout from './Layout';
import { PDF_OR_WORD } from 'utilities';
import FormFooter from './FormFooter';
import CustomModal from 'components/common/CustomModal';



let validationFn = (formName) => {
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

const FormDisplay = ({ formName, countryOption, handleChange, onChange, handleBlur, errors, values, handleDropdownChange, touched, withLevel, formControl, header }) => {
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

const AddModal = ({ formName, showModal, toggleModal, schoolTypeOption ,countryOption, handleChange, onChange, handleBlur, errors, values, handleDropdownChange, touched, withLevel, formControl, header, ...props }) => {
    let validation = Yup.object().shape({
        schoolName: Yup.string().required("Required"),
        schoolType: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        level: Yup.string().required("Required"),
        degree: Yup.string().required("Required"),
        major: Yup.string().required("Required"),
        certificate: Yup.string().required("Required")

    })
    return (
        <CustomModal
            header="Add Education"
            visible={showModal}
            closeOnEscape={false}
            style={{ maxWidth: '500px' }}
            toggle={toggleModal}>
            <FormsWrapper values={{ ...formControl }}
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
                            <form onSubmit={handleSubmit} onChange={onChange} name={formName} >
                                <div className="p-grid p-my-2">
                                    <div className="p-col-6">
                                        <span className="p-float-label">
                                        <Dropdown
                                                id={`schoolType`}
                                                name={`schoolType`}
                                                value={values[`schoolType`]}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    handleDropdownChange(e, formName)
                                                }}
                                                options={schoolTypeOption}
                                                className={`width-100  ${errors[`schoolType`] && touched[`schoolType`] ? 'p-invalid' : ''}`}
                                                optionLabel="name"
                                            ></Dropdown>
                                            <label htmlFor={`schoolType`}>School Type</label>
                                     
                                        </span>
                                        {showFieldError(`schoolType`, errors, touched)}

                                    </div>
                                    <div className="p-col-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="schoolName"
                                                name="schoolName"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.schoolName && touched.schoolName ? 'p-invalid' : ''}`}
                                                value={values.schoolName}
                                                onChange={handleChange} />
                                            <label htmlFor="schoolName">Name </label>
                                        </span>
                                        {showFieldError(`schoolName`, errors, touched)}
                                    </div>
                                    <div className="p-col-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id={`city`}
                                                name={`city`}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors[`city`] && touched[`city`] ? 'p-invalid' : ''}`}
                                                value={values[`city`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`city`}>City </label>
                                        </span>
                                        {showFieldError(`city`, errors, touched)}
                                    </div>
                                    <div className="p-col-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id={`state`}
                                                name={`state`}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors[`state`] && touched[`state`] ? 'p-invalid' : ''}`}
                                                value={values[`state`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`state`}>State </label>

                                        </span>
                                        {showFieldError(`state`, errors, touched)}
                                    </div>
                                    <div className="p-col-6">
                                        <span className="p-float-label">

                                            <Dropdown
                                                id={`country`}
                                                name={`country`}
                                                value={values[`country`]}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    handleDropdownChange(e, formName)
                                                }}
                                                options={countryOption}
                                                className={`width-100  ${errors[`country`] && touched[`country`] ? 'p-invalid' : ''}`}
                                                optionLabel="name"
                                            ></Dropdown>
                                            <label htmlFor={`country`}>Country</label>
                                        </span>

                                        {showFieldError(`country`, errors, touched)}
                                    </div>
                                    <div className="p-col-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id={`level`}
                                                name={`level`}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors[`level`] && touched[`level`] ? 'p-invalid' : ''}`}
                                                value={values[`level`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`level`}>Level Completed </label>

                                        </span>
                                        {showFieldError(`level`, errors, touched)}
                                    </div>
                                    <div className="p-col-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id={`degree`}
                                                name={`degree`}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors[`degree`] && touched[`degree`] ? 'p-invalid' : ''}`}
                                                value={values[`degree`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`degree`}>Degree</label>

                                        </span>
                                        {showFieldError(`degree`, errors, touched)}
                                    </div>
                                    <div className="p-col-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id={`major`}
                                                name={`major`}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors[`major`] && touched[`major`] ? 'p-invalid' : ''}`}
                                                value={values[`major`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`major`}>Major</label>

                                        </span>
                                        {showFieldError(`major`, errors, touched)}
                                    </div>
                                    <div className="p-col-12">
                                        <div className="p-field">
                                            <label htmlFor={`certificate`}
                                                className={`${formControl.certificate !== "" && formControl.certificate !== null ? 'bg-primary ' : ''}upload-div width-100 p-border-none p-p-2`}
                                            >

                                                <p>{formControl[`certificate`] !== "" && formControl[`certificate`] !== null ? formControl[`certificate`].name : "Load certificate"}</p></label>

                                            <span className="p-float-label">
                                                <InputText
                                                    type="file"
                                                    id={`certificate`}
                                                    name={`certificate`}
                                                    onBlur={handleBlur}
                                                    accept={PDF_OR_WORD}
                                                    className={`p-d-none  ${errors[`certificate`] && touched[`certificate`] ? 'p-invalid' : ''}`}
                                                    // value={values[`certificate`]}
                                                    onChange={handleChange} />

                                            </span>
                                            {showFieldError(`certificate`, errors, touched)}
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-text-right">
                                        <Button type="submit" role="submit" disabled={isSubmitting}  className="p-mr-2" label="Submit"/>
                                        <Button type="button" role="button" disabled={isSubmitting} label="Cancel" onClick={toggleModal} className="p-button-danger" />
                                    </div>

                                </div>

                            </form>
                        )
                    }
                }
            </FormsWrapper>

        </CustomModal>)
}

export default function Education(props) {
    // let { formControl, onChange, formHighSchoolName, countryOption, handleGoBack, formCollegeName, formTradeName, formProfessionalName, handleDropdownChange } = props
    let [toggle, setToggle] = useState(false)
    const doToggleModal = () => setToggle(!toggle)
    return (
        <>
            <FormLayout className>
                {/* <button onClick={doToggleModal}>Add</button> */}
                <div className="p-d-flex p-jc-end">

                    <Button type="submit" onClick={props.doToggleModal} className="p-button-rounded p-my-4" icon="pi pi-plus" iconPos="center" ></Button>
                </div>
                {props.formControl.list.length > 0 && <div className="p-grid company-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Type</td>
                                                <td>School Name</td>
                                                <td>Country</td>
                                                <td>State</td>
                                                <td>City</td>
                                                <td>Degree</td>
                                                <td>Major</td>
                                                <td>Certificate</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.formControl.list.map((data, i) => (
                                                <tr key={i}>
                                                    <td>{data.schoolType}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.country}</td>
                                                    <td>{data.stateName}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.degree}</td>
                                                    <td>{data.major}</td>
                                                    <td>{data.fileUploadName}</td>

                                                    <td><Button type="button" role="button" 
                                                    // onClick={(e)=>{
                                                    //     editPastJobList("delete", i, null)
                                                    // }}
                                                     label="Delete" className="p-button-danger" /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                }

                 <AddModal
                    showModal={props.formControl.toggle}
                    toggleModal={props.doToggleModal}
                    {...props}
                />
            </FormLayout>
            {/* <div className="p-grid p-justify-end">
                                <div className="p-col-12 p-lg-6 p-md-6 p-sm-6-6">
                                    <Button label={isSubmitting ? 'Loading...please wait' : `Next`} disabled={isSubmitting} className="width-100 button-white" icon="pi pi-arrow-right" iconPos="right" ></Button>
                                </div>
                            </div> */}
            <FormFooter
                backText="Back"
                nextText="Next"
            goBack={props.handleGoBack}
            proceed={props.handleNext}
            disabledSubmit={props.formControl.list < 1}
            />
        </>
    )
}
