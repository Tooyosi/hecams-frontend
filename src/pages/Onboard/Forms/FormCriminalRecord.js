import React from 'react'
import FormsWrapper, { showFieldError, showUploadError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import * as Yup from "yup"
import { RadioButton } from 'primereact/radiobutton';

export const validation = Yup.object().shape({
    record: Yup.string().required("Required"),
    records: Yup.string().required("Required")

})
export default function FormCriminalRecord(props) {
    let { formControl, onChange, formName, handleDropdownChange } = props

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

                            <div className="p-grid">
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="option1" name="record" value="true" checked={formControl.record === 'true'} onChange={(e) => {
                                            handleChange(e)
                                            onChange(e, formName)

                                        }} />
                                        <label htmlFor="option1">Clean</label>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field-radiobutton">
                                        <RadioButton inputId="option2" name="record" value="false" checked={formControl.record === "false"} onChange={(e) => {
                                            handleChange(e)
                                            onChange(e, formName)

                                        }} />
                                        <label htmlFor="option2">Not Clean</label>
                                    </div>
                                </div>

                            </div>

                            <div className="p-field p-my-3">
                                <label htmlFor="records">Employment Records</label>
                                <InputTextarea
                                    id="records"
                                    name="records"
                                    onBlur={handleBlur}
                                    className={`width-100 ${errors.records && touched.records ? 'p-invalid' : ''}`}
                                    value={formControl.records}
                                    onChange={handleChange} />

                                {showFieldError("records", errors, touched)}
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
