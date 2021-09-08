import React, { useState } from 'react'
import { Button } from 'primereact/button';
import FormLayout from './Layout';
import SignaturePad from 'react-signature-canvas'
import { COMPANY_NAME } from 'utilities';
import FormFooter from './FormFooter';
import ReCAPTCHA from "react-google-recaptcha";
import { Document, Page, pdfjs } from 'react-pdf';
import FileViewer from 'react-file-viewer';
import DocViewer from "react-doc-viewer";
import CustomModal from 'components/common/CustomModal';
import Loader from 'components/common/Loader';
pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewForm = ({ showModal, toggleModal, type, file, setViewForm, setAllowSubmit, allowSubmit, isSubmitted, submitting, readOnly, ...props }) => {

    return (
        <CustomModal
            header="Consent Form"
            visible={showModal}
            closeOnEscape={false}
            // style={{ maxWidth: '500px' }}
            toggle={toggleModal}>
            {file == "" || submitting ? <Loader /> :
                <FileViewer
                    fileType={type}
                    filePath={file}
                    onError={(err) => {
                        console.log(err)
                    }}
                />
            }

            <div className="p-grid p-jc-end">
                {isSubmitted ?
                    <div className="p-col-12">
                        <Button className="width-100" onClick={() => {
                            window.location.href = '/'
                        }} label="Go Home" />
                    </div>
                    :
                    <>
                        {!readOnly && file !== "" && !submitting && <div className="p-mt-2">
                            <div className="signature-box">
                                <SignaturePad
                                    canvasProps={{
                                        className: "signature",
                                        height: "100",
                                        width: "300"
                                    }}
                                    ref={props.signatureRef} />
                                <div className="p-grid">
                                    <div className="p-col-6">
                                        <Button onClick={() => {
                                            props.clearSignature()
                                            setAllowSubmit(false)
                                        }} label="clear" className="p-button-white" />
                                    </div>
                                </div>
                            </div>

                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                // onChange={props.onCaptchaChange}
                                ref={props.captchaRef}
                                onChange={(e) => props.onCaptchaChange(e, setAllowSubmit)}
                                theme="light"
                            />
                            <Button disabled={!allowSubmit} onClick={props.onSubmit}>Submit</Button>

                        </div>
                        }
                    </>
                }
            </div>

        </CustomModal>)
}

export default function Consent(props) {
    let { formControl: { file, fileType, isSubmitted, submitting }, readOnly } = props
    // var index = file.lastIndexOf(".");
    //     var type = file.substr(index + 1);
    let type = fileType.includes("officedocument") ? "docx" : fileType.includes("msword") ? "docx" : fileType.includes("pdf") ? "pdf" : "docx"
    let [allowSubmit, setAllowSubmit] = useState(false)
    const [numPages, setNumPages] = useState(null);

    const [viewForm, setViewForm] = useState(false);


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>
            <FormLayout>
                <div className="p-3">
                    <div className="p-text-center">
                        <h3>Consent forms</h3>
                        <p className="p-my-3">By signing and submitting this form, you acknowledge agree to the terms of the consent form</p>
                        <Button onClick={() => {
                            setViewForm(true)
                            props.doReload()
                        }}>{viewForm ? `Reload` : 'Load'} Form</Button>
                    </div>
                    {/* <div className="consent-form p-my-3 d-none ">

                        <Document
                            // file={"https://cors-anywhere.herokuapp.com/https://printreceipt.ebs-rcm.com/Listen/printreceipt?dbName=LASG&payertype=N&payerid=4544200&transid=46412909&transcode=UHQQVJBI"}
                            file={file}
                            // options={{ workerSrc: "/pdf.worker.js" }}
                            onLoadSuccess={onDocumentLoadSuccess}
                            renderMode="svg"
                            style={{width: "100%"}}
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                            ))}
                        </Document>
                        <FileViewer
                            fileType={type}
                            filePath={file}
                            onError={(err) => {
                                console.log(err)
                            }}
                        />

                    </div>
                    */}
                    <ViewForm
                        showModal={viewForm}
                        toggleModal={() => setViewForm(!viewForm)}
                        type={type}
                        file={file}
                        setViewForm={setViewForm}
                        setAllowSubmit={setAllowSubmit}
                        allowSubmit={allowSubmit}
                        isSubmitted={isSubmitted}
                        readOnly
                        submitting={submitting}
                        {...props}
                    />
                </div>
                {/* The form content */}


            </FormLayout>
            <div className="p-grid">
                <div className="p-col-6 p-lg-8 p-md-6 p-sm-6-6">

                </div>
                {/* <div className="p-col-6 p-lg-4 p-md-6 p-sm-6-6 p-jc-end">
                    <div className="signature-box">
                        <SignaturePad
                            canvasProps={{ className: "signature" }}
                            ref={props.signatureRef} />
                        <div className="p-grid">
                            <div className="p-col-6">
                                <Button onClick={() => {
                                    props.clearSignature()
                                    setAllowSubmit(false)
                                }} label="clear" className="p-button-white" />
                            </div>
                        </div>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        // onChange={props.onCaptchaChange}
                        ref={props.captchaRef}
                        onChange={(e) => props.onCaptchaChange(e, setAllowSubmit(true))}
                        theme="light"
                    />
                </div> */}
            </div>
            <FormFooter
                disabledSubmit={!allowSubmit}
                goBack={props.handleGoBack}
                proceed={props.onSubmit}
                backText="Back"
            // nextText="Submit"
            />
        </>
    )
}
