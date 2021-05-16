import React, { useState } from 'react'
import { Button } from 'primereact/button';
import FormLayout from './Layout';
import SignaturePad from 'react-signature-canvas'
import { COMPANY_NAME } from 'utilities';
import FormFooter from './FormFooter';
import ReCAPTCHA from "react-google-recaptcha";

export default function Consent(props) {
    let [allowSubmit, setAllowSubmit] = useState(true)
    return (
        <>
            <FormLayout>
                <div className="p-3">
                    <div className="p-text-center">
                        <h3>Consent forms</h3>
                        <p className="p-my-3">By signing and submitting this form, you acknowledge agree to the terms of the consent form</p>
                    </div>
                    <div className="consent-form p-my-3">
                        <p>
                            Note:  If you are hired for a position, which requires driving, you must keep us informed of any changes in driving record. <br /><br />



                            I (<span className="underline">{props.personalDetails.firstname} {props.personalDetails.lastname}</span>) certify that all information given on this application is true, correct and complete to the best of my knowledge. I also certify that I have accounted from all my work experience and training on this application, and that I have not knowingly withheld any fact or circumstance which would, if disclosed, affect my application unfavorably.
                            <br />
                            <br />

                            <span className="underline">{COMPANY_NAME}</span> is hereby authorized to make any investigation of my employment, educational, credit or criminal history through any investigates agencies or bureaus of its choice.  I release all relevant parties from all liability of and damage resulting from furnishing such information.
                            <br />
                            <br />
                            I understand that I must be capable of performing the essential functions of the job for which I am applying. I understand that my employment is subject to the completion of the Medical Examination and Mobility Evaluation and I understand that my continued employment may be conditioned upon maintaining a favorable health evaluation and drug/alcohol screening.  I also agree that all information concerning said physical examination can be supplied to the authorized agent of this company upon their request.
                            <br />
                            <br />

                            If employed by <span className="underline">{COMPANY_NAME}</span>, I agree to abide by its rules and regulations. I understand that discovery of misrepresentation or omission of facts herein will be cause for immediate dismissal.  I authorize any inquiry to be made on any information contained in this application if I am considered for employment. I agree to furnish additional information as may require completing my employment file. I understand that operation conditions may require me to temporarily work shifts other than the one for which I am applying and I agree to such scheduling change as directed by my supervisor.
                            <br />
                            <br />

                            I further understand that this is an application for employment and that no employment contract either express or implied is being offered I have been supplied a copy of the job description and I have read and understand the essential functions of the job. I also understand that if employed, such employment is for an indefinite period and can be terminated at will by either party, with or without notice, at any time, for any or no reason, and is subject to change in wages, conditions, benefits and operating policies.

                            <br />
                            <br />

                            Note:  If you are hired for a position, which requires driving, you must keep us informed of any changes in driving record.


                        </p>
                    </div>
                </div>
                {/* The form content */}


            </FormLayout>
            <div className="p-grid p-justify-end">
                <div className="p-col-12 p-lg-4 p-md-6 p-sm-6-6">
                    <div className="signature-box">
                        <SignaturePad
                            canvasProps={{ className: "signature" }}
                            ref={props.signatureRef} />
                        <div className="p-grid">
                            <div className="p-col-6">
                                <Button onClick={props.clearSignature} label="clear" className="p-button-white" />
                            </div>
                        </div>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        // onChange={props.onCaptchaChange}
                        onChange={()=> setAllowSubmit(!allowSubmit)}
                        theme="light"
                    />
                </div>
            </div>
            <FormFooter
                disabledSubmit={allowSubmit}
                goBack={props.handleGoBack}
                proceed={props.onSubmit}
                backText="Back"
                nextText="Submit"
            />
        </>
    )
}
