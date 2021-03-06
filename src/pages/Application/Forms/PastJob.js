import React, { useState, useEffect } from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import * as Yup from "yup"
import FormLayout from './Layout';
import { DATE_FORMAT } from 'utilities';
import FormFooter from './FormFooter';
import { Checkbox } from 'primereact/checkbox';


export default function PastJob(props) {
    let { formControl, onChange, formName, editPastJobList, handleGoBack, onFinish, toggleWorks, onDelete, readOnly } = props
    var today = new Date();

    let [minDate, setMinDate] = useState(today)

    let validationShape = {
        company: Yup.string().required("Required"),
        reasonLeft: Yup.string().required("Required"),
        from: Yup.string().required("Required"),
        supervisor: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        jobTitle: Yup.string().required("Required"),
        contact: Yup.string().required("Required"),

    }
    if (!formControl.workHere) {
        validationShape = {
            ...validationShape,
            to: Yup.string().required("Required"),
        }
    }
    const validation = Yup.object().shape(readOnly ? {} : validationShape)
    return (
        <FormsWrapper values={formControl}
            handleSubmit={props.onSubmit}
            handleChange={onChange}
            validationSchema={validation}
        >
            {
                props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                        setFieldValue,
                        setValues,
                        handleSubmit } = props;
                    return (
                        <form onChange={onChange} onSubmit={handleSubmit} name={formName} >
                            <FormLayout>
                                {!readOnly && <>
                                    <div className="p-grid">
                                        <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                            <div className="">
                                                <div className="width-100">
                                                    <span className="p-float-label">
                                                        <InputText
                                                            readOnly={readOnly}
                                                            type="text"
                                                            id="company"
                                                            name="company"
                                                            onBlur={handleBlur}
                                                            className={`width-100  ${errors.company && touched.company ? 'p-invalid' : ''}`}
                                                            value={values.company}
                                                            onChange={handleChange} />
                                                        <label htmlFor="company">Company*</label>

                                                    </span>
                                                    {showFieldError("company", errors, touched)}
                                                </div>
                                                <div className="">
                                                    <p>
                                                        <Checkbox name="workHere" className="p-mr-2" checked={formControl.workHere} onChange={(e) => {
                                                            toggleWorks()
                                                        }} />
                                                        work here
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                            <span className="p-float-label">
                                                <InputText
                                                    readOnly={readOnly}
                                                    type="text"
                                                    id="reasonLeft"
                                                    name="reasonLeft"
                                                    onBlur={handleBlur}
                                                    className={`width-100  ${errors.reasonLeft && touched.reasonLeft ? 'p-invalid' : ''}`}
                                                    value={values.reasonLeft}
                                                    onChange={handleChange} />
                                                <label htmlFor="reasonLeft">Reason Left*</label>

                                            </span>
                                            {showFieldError("reasonLeft", errors, touched)}
                                        </div>
                                    </div>


                                    <div className="p-grid">
                                        <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                            <span className="p-float-label">
                                                <Calendar
                                                    disabled={readOnly}
                                                    value={values.from}
                                                    className={`width-100  ${errors.from ? 'p-invalid' : ''}`}
                                                    name="from"
                                                    dateFormat={DATE_FORMAT}
                                                    value={values.from}
                                                    maxDate={minDate}
                                                    onChange={(e) => {
                                                        handleChange(e)
                                                        onChange(e, formName)
                                                    }}
                                                    id="from"
                                                />
                                                <label htmlFor="from">From*</label>

                                            </span>
                                            {showFieldError("from", errors, touched)}
                                        </div>
                                        <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                            <span className="p-float-label">
                                                <InputText
                                                    readOnly={readOnly}
                                                    type="text"
                                                    id="supervisor"
                                                    name="supervisor"
                                                    onBlur={handleBlur}
                                                    className={`width-100  ${errors.supervisor && touched.supervisor ? 'p-invalid' : ''}`}
                                                    value={values.supervisor}
                                                    onChange={handleChange} />
                                                <label htmlFor="supervisor">Supervisor**</label>

                                            </span>
                                            {showFieldError("supervisor", errors, touched)}
                                        </div>


                                    </div>
                                    <div className="p-grid">
                                        {!formControl.workHere && <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                            <span className="p-float-label">
                                                <Calendar
                                                    disabled={readOnly}
                                                    value={values.to}
                                                    className={`width-100  ${errors.to ? 'p-invalid' : ''}`}
                                                    name="to"
                                                    dateFormat={DATE_FORMAT}
                                                    value={values.to}
                                                    minDate={minDate}
                                                    onChange={(e) => {
                                                        handleChange(e)
                                                        onChange(e, formName)
                                                    }}
                                                    id="to"
                                                />
                                                <label htmlFor="to">To*</label>
                                            </span>
                                            {showFieldError("to", errors, touched)}
                                        </div>
                                        }
                                        <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                            <span className="p-float-label">
                                                <InputText
                                                    readOnly={readOnly}
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    onBlur={handleBlur}
                                                    className={`width-100  ${errors.phone && touched.phone ? 'p-invalid' : ''}`}
                                                    value={values.phone}
                                                    onChange={handleChange} />
                                                <label htmlFor="phone">Phone*</label>

                                            </span>
                                            {showFieldError("phone", errors, touched)}
                                        </div>

                                    </div>
                                    <div className="p-grid">
                                        <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                            <span className="p-float-label">
                                                <InputText
                                                    readOnly={readOnly}
                                                    type="text"
                                                    id="jobTitle"
                                                    name="jobTitle"
                                                    onBlur={handleBlur}
                                                    className={`width-100  ${errors.jobTitle && touched.jobTitle ? 'p-invalid' : ''}`}
                                                    value={values.jobTitle}
                                                    onChange={handleChange} />
                                                <label htmlFor="jobTitle">Job Title*</label>

                                            </span>
                                            {showFieldError("jobTitle", errors, touched)}
                                        </div>

                                        <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                            <span className="p-float-label">
                                                <InputText
                                                    readOnly={readOnly}
                                                    type="text"
                                                    id="contact"
                                                    name="contact"
                                                    onBlur={handleBlur}
                                                    className={`width-100  ${errors.contact && touched.contact ? 'p-invalid' : ''}`}
                                                    value={values.contact}
                                                    onChange={handleChange} />
                                                <label htmlFor="contact">May we contact</label>

                                            </span>
                                            {showFieldError("contact", errors, touched)}
                                        </div>

                                    </div>
                                    <div className="p-grid">
                                        <div className="p-col p-text-right">
                                            {/* <p className="text-primary">Add Another</p>  */}
                                            <Button type="submit" disabled={isSubmitting} className="p-button-rounded p-my-4" icon="pi pi-plus" iconPos="center" ></Button>
                                        </div>

                                    </div>
                                </>}

                                {formControl.list.length > 0 && <div className="p-grid company-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Company</td>
                                                <td>Job Title</td>
                                                {/* <td>Edit</td> */}
                                                {!readOnly && <td>Delete</td>}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {formControl.list.map((data, i) => (
                                                <tr key={i}>
                                                    <td>{data.companyName}</td>
                                                    <td>{data.jobTitle}</td>
                                                    {/* <td><Button type="button" role="button" onClick={(e)=>{
                                                        editPastJobList("edit", i, setValues)
                                                    }} label="Edit" className="p-button-secondary" /></td> */}
                                                    {!readOnly && <td><Button type="button" role="button" onClick={(e) => {
                                                        onDelete(data.id)
                                                    }} label="Delete" className="p-button-danger" /></td>}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                }
                            </FormLayout>
                            <FormFooter
                                backText="Back"
                                nextText="Next"
                                goBack={handleGoBack}
                                proceed={formControl.list.length < 1 ? handleSubmit : onFinish}
                                disabled={isSubmitting}
                            />
                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
