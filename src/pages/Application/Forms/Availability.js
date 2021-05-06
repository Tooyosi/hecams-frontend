import React, {useState, useEffect} from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import * as Yup from "yup"
import FormLayout from './Layout';
import { DATE_FORMAT } from 'utilities';

export const validation = Yup.object().shape({
    hours: Yup.string().required("Required"),
    night: Yup.string().required("Required"),
    weekends: Yup.string().required("Required"),
    startDate: Yup.string().required("Required"),
    allowedToWork: Yup.string().required("Required"),
    notavailableToWork: Yup.string().required("Required"),
    employmentDesired: Yup.string().required("Required")
})

export default function Availability(props) {
    let { formControl, onChange, formName, handleDropdownChange, yesOrNoOptions } = props
    var today = new Date();
   
    let [minDate, setMinDate] = useState(today)
   
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
                                            id="hours"
                                            name="hours"
                                            value={values.hours}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.hours && touched.hours ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="How many hours can you work weekly?*"></Dropdown>



                                        {showFieldError("hours", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                        <Dropdown
                                            id="weekends"
                                            name="weekends"
                                            value={values.weekends}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.weekends && touched.weekends ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Are you available to work weekends?*"></Dropdown>



                                        {showFieldError("weekends", errors, touched)}
                                    </div>
                                </div>


                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                        <Dropdown
                                            id="night"
                                            name="night"
                                            value={values.night}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.night ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Are you available to work at nights?*"></Dropdown>



                                        {showFieldError("night", errors, touched)}
                                    </div>

                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <Calendar
                                                value={values.startDate}
                                                className={`width-100  ${errors.startDate ? 'p-invalid' : ''}`}
                                                name="startDate"
                                                dateFormat={DATE_FORMAT}
                                                value={values.startDate}
                                                minDate={minDate}
                                                onChange={(e)=>{
                                                    handleChange(e)
                                                    onChange(e, formName)}}
                                                placeholder="Available to Start Date*"
                                            />

                                        </span>
                                        {showFieldError("startDate", errors, touched)}
                                    </div>
                                </div>
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                        <Dropdown
                                            id="allowedToWork"
                                            name="allowedToWork"
                                            value={values.allowedToWork}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.allowedToWork && touched.allowedToWork ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Are you legally authorized to work in this country?*"></Dropdown>



                                        {showFieldError("allowedToWork", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                        <Dropdown
                                            id="notavailableToWork"
                                            name="notavailableToWork"
                                            value={values.notavailableToWork}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.notavailableToWork && touched.notavailableToWork ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Are there any times you are not available to work?*"></Dropdown>



                                        {showFieldError("notavailableToWork", errors, touched)}
                                    </div>

                                </div>
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">

                                        <Dropdown
                                            id="employmentDesired"
                                            name="employmentDesired"
                                            value={values.employmentDesired}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={yesOrNoOptions}
                                            className={`width-100  ${errors.employmentDesired && touched.employmentDesired ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                            placeholder="Employment Desired*"></Dropdown>



                                        {showFieldError("employmentDesired", errors, touched)}
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
