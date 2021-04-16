import React from 'react'
import { FileUpload } from 'primereact/fileupload';
import FormsWrapper, { showFieldError, showUploadError } from 'components/common/form/Formik'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import * as Yup from "yup"


export default function FormQualifications(props) {
    let { formControl, onChange, formName, handleUpload } = props

    let fileValidation = Yup.mixed()
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
    let validation


    if (formControl.certificate == "" || formControl.license == "" || formControl.authorization == "") {
        validation = Yup.object().shape({

            certificate: fileValidation,
            license: fileValidation,
            authorization: fileValidation,
            position: Yup.string().required("Required"),
            records: Yup.string().required("Required")

        })
    } else {

        validation = Yup.object().shape({
            position: Yup.string().required("Required"),
            records: Yup.string().required("Required")

        })
    }

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
                            <div className="p-field">
                                <label htmlFor="certificate">Educational Qualification {"&"} Certificates</label>
                                <label htmlFor="certificate"
                                    className={`${formControl.certificate !== "" && formControl.certificate !== null ? 'bg-primary ' : ''}upload-div width-100 p-border-none p-p-2`}
                                > <i className="pi pi-cloud-upload " />
                                    <span>{formControl.certificate !== "" && formControl.certificate !== null ? formControl.certificate.name : "Upload"}</span></label>
                                <InputText
                                    type="file"
                                    id="certificate"
                                    name="certificate"
                                    onBlur={handleBlur}
                                    accept="application/pdf"
                                    className={`width-100 p-d-none  ${errors.certificate && touched.certificate ? 'p-invalid' : ''}`}
                                    // value={values.certificate}
                                    onChange={handleChange} />
                                {showUploadError("certificate", errors)}
                            </div>
                            <div className="p-field">
                                <label htmlFor="license">Professional licenses for nurses/Therapist/case manager </label>
                                <label htmlFor="license"
                                    className={`${formControl.license !== "" && formControl.license !== null ? 'bg-primary ' : ''}upload-div width-100 p-border-none p-p-2`}

                                > <i className="pi pi-cloud-upload " />
                                    <span>{formControl.license !== "" && formControl.license !== null ? formControl.license.name : "Upload"}</span></label>


                                <InputText
                                    type="file"
                                    id="license"
                                    accept="application/pdf"
                                    name="license"
                                    onBlur={handleBlur}
                                    className={`width-100 p-d-none  ${errors.license && touched.license ? 'p-invalid' : ''}`}
                                    // value={values.license}
                                    onChange={handleChange} />

                                {showUploadError("license", errors)}
                            </div>
                            <div className="p-field">
                                <label htmlFor="authorization">Employment authorization document</label>
                                <label htmlFor="authorization"
                                    className={`${formControl.authorization !== "" && formControl.authorization !== null ? 'bg-primary ' : ''}upload-div width-100 p-border-none p-p-2`}

                                > <i className="pi pi-cloud-upload " />
                                    <span>{formControl.authorization !== "" && formControl.authorization !== null ? formControl.authorization.name : "Upload"}</span></label>


                                <InputText
                                    type="file"
                                    id="authorization"
                                    accept="application/pdf"
                                    name="authorization"
                                    onBlur={handleBlur}
                                    className={`width-100 p-d-none  ${errors.authorization && touched.authorization ? 'p-invalid' : ''}`}
                                    // value={values.authorization}
                                    onChange={handleChange} />

                                {showUploadError("authorization", errors)}
                            </div>
                            <div className="p-field">
                                <label htmlFor="position">Postition of staff</label>

                                <InputText
                                    type="text"
                                    id="position"
                                    name="position"
                                    onBlur={handleBlur}
                                    className={`width-100 ${errors.position && touched.position ? 'p-invalid' : ''}`}
                                    value={values.position}
                                    onChange={handleChange} />

                                {showFieldError("position", errors, touched)}
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
