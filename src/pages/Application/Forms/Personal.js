import React from 'react'
import FormsWrapper, { showFieldError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from "yup"
import FormLayout from './Layout';
import { inputValidate, RequiredWithCharacterValidation } from 'utilities';
import FormFooter from './FormFooter';


export default function Personal(props) {
    let { formControl, onChange, formName, handleDropdownChange, yesOrNoOptions, genderOptions, readOnly } = props
    let inputValidateCall = inputValidate()

    let validationShape = {
        firstname: RequiredWithCharacterValidation,
        lastname: RequiredWithCharacterValidation,
        phone: RequiredWithCharacterValidation,
        middlename: Yup.string().test("fileFormat",
            "Invalid Character",
            value => !value ?.match(/[&\/\\#,+()~%.'":*?<>{}!|]/g)
        ),
        workPhone: RequiredWithCharacterValidation,
        address1: RequiredWithCharacterValidation,
        email: RequiredWithCharacterValidation,
        address2: RequiredWithCharacterValidation,
        gender: RequiredWithCharacterValidation,
        howHear: RequiredWithCharacterValidation,
        city: RequiredWithCharacterValidation,
        workingWithDisabilities: RequiredWithCharacterValidation,
        position: RequiredWithCharacterValidation,
        challenging: RequiredWithCharacterValidation,
        zip: Yup.string().required("Required")
            .matches(/[0-9]/g, "Zip Code must be a number"),
        state: RequiredWithCharacterValidation,
        ssn: Yup.string().required("Required")
            .matches(/[0-9]/g, "Social Security must be a number"),
        cSsn: Yup.string().required("Required")
            .oneOf([Yup.ref("ssn"), null], "Social Security dont match"),
        howLongAtAddress: RequiredWithCharacterValidation,
        capability: RequiredWithCharacterValidation,
        convicted: RequiredWithCharacterValidation,
    }
    if (formControl.upload == "" && formControl.fileUploadName == "") {

        validationShape.upload = Yup.mixed()
            .required("A file is required")
            // .test(
            //     "fileSize",
            //     "File too large",
            //     value => value && value.size <= 100000
            // )
            .test(
                "fileFormat",
                "Unsupported Format",
                value => value && value.includes("pdf")
            )
    }
    // if readonly, no validation
    let validation = Yup.object().shape(readOnly ? {} : validationShape)
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
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.firstname && touched.firstname ? 'p-invalid' : ''}`}
                                                value={values.firstname}
                                                onChange={handleChange} />
                                            <label htmlFor="firstname">Firstname *</label>

                                        </span>
                                        {showFieldError("firstname", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="address1"
                                                name="address1"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.address1 && touched.address1 ? 'p-invalid' : ''}`}
                                                value={values.address1}
                                                onChange={handleChange} />
                                            <label htmlFor="address1">Address 1 *</label>

                                        </span>
                                        {showFieldError("address1", errors, touched)}

                                    </div>
                                </div>
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="middlename"
                                                name="middlename"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.middlename && touched.middlename ? 'p-invalid' : ''}`}
                                                value={values.middlename}
                                                onChange={handleChange} />
                                            <label htmlFor="middlename">Middle name</label>

                                        </span>
                                        {showFieldError("middlename", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="address2"
                                                name="address2"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.address2 && touched.address2 ? 'p-invalid' : ''}`}
                                                value={values.address2}
                                                onChange={handleChange} />
                                            <label htmlFor="address2">Address 2 *</label>

                                        </span>
                                        {showFieldError("address1", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="lastname"
                                                name="lastname"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.lastname && touched.lastname ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.lastname}
                                                onChange={handleChange} />
                                            <label htmlFor="lastname">Last name *</label>

                                        </span>
                                        {showFieldError("lastname", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="city"
                                                name="city"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.city && touched.city ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.city}
                                                onChange={handleChange} />
                                            <label htmlFor="city">City *</label>

                                        </span>
                                        {showFieldError("city", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.phone && touched.phone ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.phone}
                                                onChange={handleChange} />
                                            <label htmlFor="phone">Phone Number *</label>

                                        </span>
                                        {showFieldError("phone", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="state"
                                                name="state"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.state && touched.state ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.state}
                                                onChange={handleChange} />
                                            <label htmlFor="state">State *</label>

                                        </span>
                                        {showFieldError("state", errors, touched)}

                                    </div>
                                </div>
                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="workPhone"
                                                name="workPhone"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.workPhone && touched.workPhone ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.workPhone}
                                                onChange={handleChange} />
                                            <label htmlFor="workPhone">Work Phone Number *</label>

                                        </span>
                                        {showFieldError("workPhone", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="zip"
                                                name="zip"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.zip && touched.zip ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.zip}
                                                onChange={handleChange} />
                                            <label htmlFor="zip">Zip Code *</label>

                                        </span>
                                        {showFieldError("zip", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="email"
                                                name="email"
                                                onBlur={handleBlur}
                                                disabled={formControl.otp !== ""}
                                                className={`width-100  ${errors.email && touched.email ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.email}
                                                onChange={handleChange} />
                                            <label htmlFor="email">Email *</label>

                                        </span>
                                        {showFieldError("email", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="position"
                                                name="position"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.position && touched.position ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.position}
                                                onChange={handleChange} />
                                            <label htmlFor="position">Position applying for*</label>

                                        </span>
                                        {showFieldError("position", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">

                                            <Dropdown
                                                id="gender"
                                                name="gender"
                                                value={formControl.gender}
                                                disabled={readOnly}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    handleDropdownChange(e, formName)
                                                }}
                                                options={genderOptions}
                                                className={`width-100  ${errors.gender && touched.gender ? 'p-invalid' : ''}`}
                                                optionLabel="name"
                                            ></Dropdown>

                                            <label for="gender">Gender *</label>

                                        </span>
                                        {showFieldError("gender", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="ssn"
                                                name="ssn"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.ssn && touched.ssn ? 'p-invalid' : ''}`}
                                                value={values.ssn}
                                                onChange={handleChange} />
                                            <label htmlFor="ssn">SSN *</label>

                                        </span>
                                        {showFieldError("ssn", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                readOnly={readOnly}
                                                id="howHear"
                                                name="howHear"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.howHear && touched.howHear ? 'p-invalid' : ''}`}
                                                value={values.howHear}
                                                onChange={handleChange} />
                                            <label htmlFor="howHear">How did you here about us? *</label>

                                        </span>
                                        {showFieldError("howHear", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="cSsn"
                                                name="cSsn"
                                                onBlur={handleBlur}
                                                readOnly={readOnly}
                                                className={`width-100  ${errors.cSsn && touched.cSsn ? 'p-invalid' : ''}`}
                                                value={values.cSsn}
                                                onChange={handleChange} />
                                            <label htmlFor="cSsn">Confirm SSN *</label>

                                        </span>
                                        {showFieldError("cSsn", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="workingWithDisabilities"
                                                name="workingWithDisabilities"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.workingWithDisabilities && touched.workingWithDisabilities ? 'p-invalid' : ''}`}
                                                value={values.workingWithDisabilities}
                                                onChange={handleChange} />
                                            <label htmlFor="workingWithDisabilities">What do you like most about working with the individuals with disabilities? *</label>

                                        </span>
                                        {showFieldError("workingWithDisabilities", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="howLongAtAddress"
                                                name="howLongAtAddress"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.howLongAtAddress && touched.howLongAtAddress ? 'p-invalid' : ''}`}
                                                value={values.howLongAtAddress}
                                                onChange={handleChange} />
                                            <label htmlFor="howLongAtAddress">How long at this address? *</label>

                                        </span>
                                        {showFieldError("howLongAtAddress", errors, touched)}

                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <InputText
                                                type="text"
                                                id="challenging"
                                                name="challenging"
                                                onBlur={handleBlur}
                                                className={`width-100  ${errors.challenging && touched.challenging ? 'p-invalid' : ''}`}
                                                readOnly={readOnly}
                                                value={values.challenging}
                                                onChange={handleChange} />
                                            <label htmlFor="challenging">What do you find most challenging in this type of work *</label>

                                        </span>
                                        {showFieldError("challenging", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <Dropdown
                                                id="capability"
                                                name="capability"
                                                value={formControl.capability}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    handleDropdownChange(e, formName)
                                                }}
                                                disabled={readOnly}
                                                options={yesOrNoOptions}
                                                className={`width-100  ${errors.capability && touched.capability ? 'p-invalid' : ''}`}
                                                optionLabel="name"
                                            ></Dropdown>
                                            <label htmlFor="capability">Do you have any Physical and/mental capabilty to perfom
                                        the essential functions of this job*</label>
                                        </span>
                                        {showFieldError("capability", errors, touched)}
                                    </div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <span className="p-float-label">
                                            <Dropdown
                                                id="convicted"
                                                name="convicted"
                                                value={formControl.convicted}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    handleDropdownChange(e, formName)
                                                }}
                                                options={yesOrNoOptions}
                                                className={`width-100  ${errors.convicted && touched.convicted ? 'p-invalid' : ''}`}
                                                disabled={readOnly}
                                                optionLabel="name"
                                            ></Dropdown>

                                            <label htmlFor="convicted">Have you been convicted of any crime*</label>
                                        </span>
                                        {showFieldError("convicted", errors, touched)}
                                    </div>
                                    <div className="p-col-12 p-lg-6 p-md-6 p-sm-6">
                                        <div className="p-field">
                                            {/* <label htmlFor="upload">Upload Driver’s Licence*</label> */}
                                            <label htmlFor="upload"
                                                className={`${(formControl.upload !== "" && formControl.upload) || (formControl.fileUploadName !== "") ? 'bg-primary ' : ''}upload-div width-100 p-border-none p-p-2`}
                                            >

                                                <p>{formControl.upload !== "" && formControl.upload ? formControl.upload.name : formControl.fileUploadName !== "" ? formControl.fileUploadName : "Upload Identification card / Driver’s Licence*"}</p></label>
                                            <InputText
                                                type="file"
                                                id="upload"
                                                name="upload"
                                                readOnly={readOnly}
                                                onBlur={handleBlur}
                                                className={`p-d-none  ${errors.upload && touched.upload ? 'p-invalid' : ''}`}
                                                onChange={handleChange} />

                                        </div>
                                        {showFieldError("upload", errors, touched)}
                                    </div>
                                </div>

                            </FormLayout>
                            {/* <div className="p-grid p-justify-end">
                                <div className="p-col-12 p-lg-6 p-md-6 p-sm-6-6">
                                    <Button label={isSubmitting ? 'Loading..please wait' : `Next`} disabled={isSubmitting} className="width-100 button-white" icon="pi pi-arrow-right" iconPos="right" ></Button>
                                </div>
                            </div> */}
                            <FormFooter
                                nextText="Next"
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
