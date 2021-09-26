import React from 'react'
import { Dropdown } from 'primereact/dropdown';
import { RequiredWithCharacterValidation } from 'utilities';
import FormsWrapper from 'components/common/form/Formik';
import * as Yup from "yup"
import { Button } from 'primereact/button';
export default function StatusForm(props) {
    let { formControl, onChange, formName, handleDropdownChange, dropdownOptions } = props

    let validationShape = {
        status: RequiredWithCharacterValidation

    }

    let validation = Yup.object().shape(validationShape)
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
                            <div className="p-grid p-justify-end p-pr-3 p-mb-3">
                                <div className="">
                                    <span className="p-float-label">
                                        <Dropdown
                                            id="status"
                                            name="status"
                                            value={formControl.status}
                                            onChange={(e) => {
                                                handleChange(e)
                                                handleDropdownChange(e, formName)
                                            }}
                                            options={dropdownOptions}
                                            // className={`width-100  ${errors.gender && touched.gender ? 'p-invalid' : ''}`}
                                            optionLabel="name"
                                        ></Dropdown>

                                        <label for="status">Status</label>

                                    </span>
                                </div>
                                <Button disabled={isSubmitting} label="Update Status" />
                            </div>

                        </form>
                    )
                }
            }
        </FormsWrapper>
    )
}
