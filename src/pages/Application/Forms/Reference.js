import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import *  as Yup from "yup"
import FormLayout from './Layout';
import FormFooter from './FormFooter';
import CustomModal from 'components/common/CustomModal';




let validationFn = (formName) => {
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


const AddModal = ({ formName, showModal, toggleModal, schoolTypeOption, countryOption, handleChange, onChange, handleBlur, errors, values, handleDropdownChange, touched, withLevel, formControl, header, ...props }) => {
    let validation = Yup.object().shape({
        referenceName: Yup.string().required("Required"),
        relationship: Yup.string().required("Required"),
        years: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),

    })
    return (
        <CustomModal
            header="Add Reference"
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
                            <form onSubmit={handleSubmit} onChange={onChange} name={formName}>
                                <div className="p-grid p-my-2">
                                    <div className="p-col-6   p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id={`referenceName`}
                                                name={`referenceName`}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors[`referenceName`] && touched[`referenceName`] ? 'p-invalid' : ''}`}
                                                value={values[`referenceName`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`referenceName`}>Name </label>

                                        </span>
                                        {showFieldError(`referenceName`, errors, touched)}
                                    </div>
                                    <div className="p-col-6   p-md-6 p-sm-6">
                                        <span className="p-float-label">

                                            <Dropdown
                                                id={`relationship`}
                                                name={`relationship`}
                                                value={values[`relationship`]}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    handleDropdownChange(e, formName)
                                                }}
                                                options={countryOption}
                                                className={`width-100  ${errors[`relationship`] && touched[`relationship`] ? 'p-invalid' : ''}`}
                                                optionLabel="name"
                                            ></Dropdown>
                                            <label htmlFor={`relationship`}>Relationship</label>
                                        </span>

                                        {showFieldError(`relationship`, errors, touched)}
                                    </div>
                                    <div className="p-col-6   p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="number"
                                                id={`years`}
                                                name={`years`}
                                                onBlur={handleBlur}
                                                min="0"
                                                className={`width-100  ${errors[`years`] && touched[`years`] ? 'p-invalid' : ''}`}
                                                value={values[`years`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`years`}>Years Known</label>

                                        </span>
                                        {showFieldError(`years`, errors, touched)}
                                    </div>
                                    <div className="p-col-6   p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id={`phone`}
                                                name={`phone`}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors[`phone`] && touched[`phone`] ? 'p-invalid' : ''}`}
                                                value={values[`phone`]}
                                                onChange={handleChange} />
                                            <label htmlFor={`phone`}>Phone *</label>

                                        </span>
                                        {showFieldError(`phone`, errors, touched)}
                                    </div>
                                </div>
                                <div className="p-col-12 p-text-right">
                                    <Button type="submit" role="submit" disabled={isSubmitting} className="p-mr-2" label="Submit" />
                                    <Button type="button" role="button" disabled={isSubmitting} label="Cancel" onClick={toggleModal} className="p-button-danger" />
                                </div>
                            </form>
                        )
                    }
                }
            </FormsWrapper>

        </CustomModal>)
}


export default function Reference(props) {

    return (
        // <FormsWrapper values={{ ...formControl.formReference1, ...formControl.formReference2, ...formControl.formReference3 }}
        //     handleSubmit={props.onSubmit}
        //     handleChange={onChange}
        //     validationSchema={validation}>
        //     {
        //         props => {
        //             const {
        //                 values,
        //                 touched,
        //                 errors,
        //                 handleBlur,
        //                 handleChange,
        //                 isSubmitting,
        //                 handleSubmit } = props;
        //             return (
        //                 <form onSubmit={handleSubmit} >
        //                     <FormLayout>

        //                         <div className="p-col-12">
        //                             <FormDisplay
        //                                 formName={formReference1Name}
        //                                 countryOption={countryOption}
        //                                 handleChange={handleChange}
        //                                 withLevel={true}
        //                                 handleDropdownChange={handleDropdownChange}
        //                                 values={values}
        //                                 errors={errors}
        //                                 onChange={onChange}
        //                                 touched={touched}
        //                                 header="Reference 1*"
        //                                 handleBlur={handleBlur}
        //                                 formControl={formControl.formReference1}
        //                                 showFieldError={showFieldError} />
        //                         </div>

        //                         <div className="p-col-12">
        //                             <FormDisplay
        //                                 formName={formReference2Name}
        //                                 countryOption={countryOption}
        //                                 handleChange={handleChange}
        //                                 withLevel={false}
        //                                 handleDropdownChange={handleDropdownChange}
        //                                 values={values}
        //                                 errors={errors}
        //                                 onChange={onChange}
        //                                 touched={touched}
        //                                 header="Reference 2*"
        //                                 handleBlur={handleBlur}
        //                                 formControl={formControl.formReference2}
        //                                 showFieldError={showFieldError} />
        //                         </div>

        //                         <div className="p-col-12">
        //                             <FormDisplay
        //                                 formName={formReference3Name}
        //                                 countryOption={countryOption}
        //                                 handleChange={handleChange}
        //                                 handleDropdownChange={handleDropdownChange}
        //                                 withLevel={false}
        //                                 values={values}
        //                                 errors={errors}
        //                                 onChange={onChange}
        //                                 touched={touched}
        //                                 header="Reference 3*"
        //                                 handleBlur={handleBlur}
        //                                 formControl={formControl.formReference3}
        //                                 showFieldError={showFieldError} />
        //                         </div>





        //                     </FormLayout>
        //                     <FormFooter
        //                         backText="Back"
        //                         nextText="Next"
        //                         goBack={handleGoBack}
        //                         proceed={handleSubmit}
        //                         disabled={isSubmitting}
        //                     />
        //                 </form>
        //             )
        //         }
        //     }
        // </FormsWrapper>
        <>
            <FormLayout>
                {!props.readOnly && <div className="p-grid p-my-2">
                    <div className="p-col-8">


                        <h3>Enter Reference Information</h3>
                    </div>
                    <div className="p-col-4 p-d-flex p-jc-end">

                        <Button type="submit" onClick={props.doToggleModal} className="p-button-rounded p-my-4" icon="pi pi-plus" iconPos="center" ></Button>
                    </div>
                </div>}
                {props.formControl.list.length > 0 && <div className="p-grid company-table">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Relationship</td>
                                <td>Years</td>
                                <td>Phone No</td>
                                {!props.readOnly && <td></td>}
                            </tr>
                        </thead>
                        <tbody>
                            {props.formControl.list.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.fullName}</td>
                                    <td>{data.relationship}</td>
                                    <td>{data.numberOfYearsKnown}</td>
                                    <td>{data.phoneNumber}</td>

                                    {!props.readOnly && <td><Button type="button" role="button"
                                        // onClick={(e)=>{
                                        //     editPastJobList("delete", i, null)
                                        // }}
                                        label="Delete" className="p-button-danger" /></td>}
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
            <FormFooter
                backText="Back"
                nextText="Next"
                goBack={props.handleGoBack}
                proceed={props.handleNext}
                disableSubmit={props.formControl.list.length < 4}
            />
        </>
    )
}
