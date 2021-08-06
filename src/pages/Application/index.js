import React, { useState, useContext, useRef } from 'react'
import Logo from 'components/common/Logo'
import { TabMenu } from 'primereact/components/tabmenu/TabMenu';
import { checkProperties, onChange, onDropdownChange, guid, COMPANY_NAME } from 'utilities';
import Personal from './Forms/Personal';
import Emergency from './Forms/Emergency';
import Transportation from './Forms/Transportation';
import Availability from './Forms/Availability';
import Education from './Forms/Education'
import Task from './Forms/Task';
import PastJob from './Forms/PastJob';
import Reference from './Forms/Reference';
import Consent from './Forms/Consent';
import { emergencySubmit, personalSubmit, taskSubmit, transportationSubmit, pastJobSubmit, referenceSubmit, consentSubmit, verifyEmail, sendResendOtp, getPersonalData, getEmergencyData, availabilitySubmit, getTransportData, getAvailabilityData, educationSubmit, getEducationData, getTaskData, getReferenceData, getPastJobData, getConsentData, removeEducation, removePastJob } from './Application.run';
import FormOtp from './Forms/FormOtp';
import { ToastContext } from 'layout/PlainLayout';
import Loader from 'components/common/Loader';
import DocViewer from "react-doc-viewer";
import { getPastJob, getReference } from 'service/jobAppliationservice';

export default function Application() {
    let signatureRef = useRef(null)
    let captchaRef = useRef(null)
    let [message, setMessage] = useContext(ToastContext)
    const clearSignature = () => {
        // clear the canvas
        signatureRef.current.clear()
    }


    const addMessage = (severity, content, summary, detail) => {
        setMessage({
            severity, content, toggle: !message.toggle, summary, detail
        })
    };

    let itemsArr = [
        { label: "Personal", step: 1 },
        { label: "Emergency Contact", step: 2 },
        { label: "Transportation", step: 3 },
        { label: "Avaliability", step: 4 },
        { label: "Education", step: 5 },
        { label: "Task review", step: 6 },
        // { label: "Certificate", step: 7 },
        { label: "Past Job", step: 7 },
        { label: "Reference", step: 8 },
        { label: "Consent", step: 9 },
    ]
    let [state, changeState] = useState({
        items: itemsArr,
        activeItem: itemsArr[0],
        formStep: 1,
        otpStep: 1,
        loading: false,
        showModal: false,
        showSuccess: false,
        formPersonal: {
            firstname: '',
            middlename: '',
            lastname: '',
            phone: '',
            workPhone: '',
            otp: '',
            email: '',
            gender: '',
            howHear: '',
            workingWithDisabilities: '',
            challenging: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            position: '',
            ssn: '',
            cSsn: '',
            howLongAtAddress: '',
            capability: '',
            convicted: '',
            upload: '',
            fileUploadId: "",
            fileUploadName: "",
            fileUploadSize: "",
        },
        formEmergency: {
            fullName: '',
            address: '',
            phone: '',
            city: '',
            alternativePhone: '',
            relationship: '',
            zip: '',
            state: '',

        },
        formTransportation: {
            car: "",
            reason: "",
            license: "",
            expiration: "",
        },
        formAvailability: {
            hours: "",
            night: "",
            weekends: "",
            startDate: "",
            allowedToWork: "",
            notavailableToWork: "",
            employmentDesired: ""
        },
        formEducation:{
            schoolType: '',
            schoolName: '',
            city: '',
            state: '',
            country: '',
            level: '',
            degree: '',
            major: '',
            certificate: '',
            toggle: false,
            list: []
        },
        formTask: {
            bathing: '',
            dressing: '',
            personalHygine: '',
            eating: '',
            mealPlanning: '',
            houseKeeping: '',
            mealPreparation: '',
            independentLivingSkills: '',
            communityIntegration: '',
            valuedBehaviours: '',
            naturalSupports: '',
            leisureActivities: '',
            skillDevelopment: '',
            ambAndMobility: '',
            medication: '',
            specializedTheraphies: '',
            transportation: '',
            safetyAdSecurity: '',
            monitoringHealth: '',
            additionalSkills: '',
            safetyAndSecurity: ''
        },
        formPastJob: {
            list: [],
            company: '',
            reasonLeft: '',
            from: '',
            supervisor: '',
            to: '',
            phone: '',
            jobTitle: '',
            contact: '',
            workHere: false
        },
        formReference: {
            list: [],
            referenceName:'',
            relationship: '',
            years:'',
            phone: '',
            toggle: false
        },
        formConsent: {
            file:'',
            fileType: ''
        }
    })
    let educationFields = (formName) => {
        return {
            [`${formName}Name`]: '',
            [`${formName}City`]: '',
            [`${formName}State`]: '',
            [`${formName}Country`]: '',
            [`${formName}Level`]: '',
            [`${formName}Degree`]: '',
            [`${formName}Major`]: '',
            [`${formName}Certificate`]: ''
        }
    }

    let referenceFields = (formName) => {
        return {
            [`${formName}Name`]: '',
            [`${formName}Relationship`]: '',
            [`${formName}Years`]: '',
            [`${formName}Phone`]: ''
        }
    }
    // let [educationState, changeEducationState] = useState({
    //     formHighSchool: {
    //         ...educationFields("formHighSchool")
    //     },
    //     formCollege: {
    //         ...educationFields("formCollege")
    //     },
    //     formTrade: {
    //         ...educationFields("formTrade")
    //     },
    //     formProfessional: {
    //         ...educationFields("formProfessional")
    //     },
    //     formEducation:{
    //         name: '',
    //         city: '',
    //         state: '',
    //         country: '',
    //         level: '',
    //         degree: '',
    //         major: '',
    //         certificate: ''
    //     },
    //     list: []
    // })

    let [educationState, changeEducationState] = useState({
        formEducation:{
            schoolName: '',
            city: '',
            state: '',
            country: '',
            level: '',
            degree: '',
            major: '',
            certificate: '',
            list: []
        },
        list: []
    })

    let [referenceState, changeReferenceState] = useState({
        formReference1: {
            ...referenceFields("formReference1")
        },
        formReference2: {
            ...referenceFields("formReference2")
        },
        formReference3: {
            ...referenceFields("formReference3")
        }
    })

    let updatePastJobList = (values, { setFieldValue, resetForm, ...params }, a, b) => {

        delete values.list
        //  reset the form fields
        resetForm({})
        changeState({
            ...state,
            formPastJob: {
                company: "",
                reasonLeft: "",
                from: "",
                supervisor: "",
                to: "",
                phone: "",
                jobTitle: "",
                contact: "",
                list: [...state.formPastJob.list, { id: guid(), ...values }]
            }
        })
        setFieldValue('formPastJob', '')
        setFieldValue('company', '')
        setFieldValue('reasonLeft', '')
        setFieldValue('from', '')
        setFieldValue('supervisor', '')
        setFieldValue('to', '')
        setFieldValue('phone', '')
        setFieldValue('jobTitle', '')
        setFieldValue('contact', '')

    }

    let editPastJobList = (param1, param2, param3) => {
        // let item = state.formPastJob.list.filter((a)=> a.id == param2)[0]
        let item = state.formPastJob.list[param2]
        // let index = state.formPastJob.list.indexOf(item)


        let newList = []
        for (let i = 0; i < state.formPastJob ?.list ?.length; i++) {
            if (i != param2) {
                const element = state.formPastJob.list[i];
                newList.push(element)
            }

        }
        if (param1 == "edit") {
            delete item["list"]
            param3(item)

            changeState({
                ...state,
                formPastJob: {
                    ...state.formPastJob,
                    ...item,
                    list: newList
                }
            })
        } else {
            changeState({
                ...state,
                formPastJob: {
                    ...state.formPastJob,
                    list: newList
                }

            })
        }

    }

    let setPastjobField = (field, value) => {
        return { field, value }
    }


    const tabChange = (e) => {
        if (e.value.step <= (Number(state.activeItem.step))) {
            // changeState({ ...state, activeItem: e.value, formStep: e.value.step })
            fetchData(e.value.step)


        }
    }


    const handleChange = (e, formName) => {
        onChange(e, state, changeState, formName)
    }



    const handleEducationChange = (e, formName) => {
        onChange(e, educationState, changeEducationState, formName)
    }


    const handleReferenceChange = (e, formName) => {
        onChange(e, referenceState, changeReferenceState, formName)
    }

    const handleDropdownChange = (e, formName) => {
        onDropdownChange(e, state, changeState, formName)
    }

    const handleSubmit = (fn, param1, param2) => {
        fn(param1, param2, state, changeState, addMessage)
    }

    const handleDataFetch = (fn, stateObj = state, changeStateFn = changeState) => {
        changeState({
            ...state,
            loading: true
        })
        fn(stateObj, changeStateFn)
    }

    const handleGoBack = () => {
        if (state.formStep > 1) {
            let newFormstep = state.formStep - 1
            // changeState({ ...state, activeItem: state.items[(newFormstep - 1)], formStep: newFormstep })
            fetchData(newFormstep)
        }
    }

    const onCaptchaChange = (value, param) => {
        if(!signatureRef.current.isEmpty()){
            param()
        }else{
            captchaRef.current.reset()
        }
    }


    const doResendOtp = (email, setSubmitting) => {
        sendResendOtp(email, addMessage, setSubmitting)
    }

    const fetchData = (step) => {
        switch (step) {
            case 1:
                handleDataFetch(getPersonalData)
            break;
            case 2:
                handleDataFetch(getEmergencyData)
            break;
            case 3:
                handleDataFetch(getTransportData)
            break;
            case 4:
                handleDataFetch(getAvailabilityData)
            break;
            case 5:
                handleDataFetch(getEducationData)
            break;
            case 6:
                handleDataFetch(getTaskData)
            break;
            case 7:
                handleDataFetch(getPastJobData)
            break;
            case 8:
                handleDataFetch(getReferenceData)
            break;
            case 9:
                handleDataFetch(getConsentData)
            break;
        }
    }
    return (
        <div className="p-d-flex p-flex-column application-page">
            {/* Application Page */}
            <div className="p-grid p-m-0 p-py-3 p-pl-xl-6">
                <div className="p-col-12">
                    <div className="p-grid p-justify-center p-mt-auto p-mb-auto">

                        <div className="p-col-12 p-lg-6 p-text-center">
                            <Logo />
                            <h3 className="text-primary">{COMPANY_NAME} Job Applicaton Form</h3>
                            <p>
                                We are an equal opportunity employer, dedicated to a policy of non-discrimination in
                                employment on any basis including race, color, national origin, age, sex, religion, disability status,
                                marital status, protected veteran status, or any other characteristic protected by law.
                                The following characters cannot be used on this form {`(%,&,/,?,>,<,|,{,})`}
                            </p>
                        </div>
                    </div>
                </div>
                {state.otpStep < 3 ?
                    <div className="p-col-12 p-lg-4 p-md-6 p-mx-auto">
                        <FormOtp
                            onChange={handleChange}
                            formName="formPersonal"
                            formStep={state.otpStep}
                            sendResendOtp={doResendOtp}
                            formControl={state.formPersonal}
                            onSubmit={(values, formikProps) => handleSubmit(verifyEmail, values, formikProps)}
                        />
                    </div>
                    : state.loading ? <Loader /> :
                        <div className="p-col-12">
                            <div className="p-grid p-justify-center p-px-3 p-mt-auto p-mb-auto">

                                <div className="p-mb-3">
                                    <TabMenu className="application-tabs" model={state.items} activeItem={state.activeItem}
                                        onTabChange={tabChange}
                                    />
                                    {state.formStep == 1 &&
                                        <Personal
                                            onChange={handleChange}
                                            formName="formPersonal"
                                            formControl={state.formPersonal}
                                            yesOrNoOptions={[
                                                { name: 'Yes', code: true },
                                                { name: 'No', code: false }
                                            ]}
                                            handleDropdownChange={handleDropdownChange}
                                            genderOptions={[
                                                { name: 'male', code: 'male' },
                                                { name: 'female', code: 'female' },
                                                { name: 'i prefer not to say', code: 'i_prefer_not_to_say' }
                                            ]}
                                            onSubmit={(values, formikProps) => handleSubmit(personalSubmit, values, formikProps)}
                                        />}

                                    {state.formStep == 2 &&
                                        <Emergency
                                            onChange={handleChange}
                                            formName="formEmergency"
                                            formControl={state.formEmergency}
                                            handleGoBack={handleGoBack}
                                            onSubmit={(values, formikProps) => handleSubmit(emergencySubmit, values, formikProps)}

                                        />}

                                    {state.formStep == 3 && <Transportation
                                        onChange={handleChange}
                                        formName="formTransportation"
                                        formControl={state.formTransportation}
                                        yesOrNoOptions={[
                                            { name: 'Yes', code: true },
                                            { name: 'No', code: false }
                                        ]}
                                        handleDropdownChange={handleDropdownChange}
                                        handleGoBack={handleGoBack}
                                        onSubmit={(values, formikProps) => handleSubmit(transportationSubmit, values, formikProps)} />}


                                    {state.formStep == 4 && <Availability
                                        onChange={handleChange}
                                        formName="formAvailability"
                                        formControl={state.formAvailability}
                                        yesOrNoOptions={[
                                            { name: 'Yes', code: true },
                                            { name: 'No', code: false }
                                        ]}
                                        handleDropdownChange={handleDropdownChange}
                                        handleGoBack={handleGoBack}
                                        onSubmit={(values, formikProps) => handleSubmit(availabilitySubmit, values, formikProps)}
                                    />}

                                    {state.formStep == 5 && <Education
                                        onChange={handleChange}
                                        formControl={state.formEducation}
                                        formName="formEducation"
                                        countryOption={[
                                            { name: 'Yes', code: "Yes" },
                                            { name: 'No', code: "No" }
                                        ]}
                                        schoolTypeOption={[
                                            { name: 'High School/Equivalent', code: "High School" },
                                            { name: 'College', code: "College" },
                                            { name: 'Bus or Trade School ', code: "Bus or Trade School" },
                                            { name: 'Professional', code: "Professional" },
                                        ]}
                                        doToggleModal={()=>changeState({...state, formEducation: {...state.formEducation, toggle: !state.formEducation.toggle}})}
                                        handleDropdownChange={handleDropdownChange}
                                        handleGoBack={handleGoBack}
                                        handleNext={() => fetchData(6)}
                                        onDelete={(id)=> removeEducation(id, state, changeState, addMessage)}
                                        onSubmit={(values, formikProps) => handleSubmit(educationSubmit, values, formikProps)}
                                    />}

                                    {state.formStep == 6 && <Task
                                        onChange={handleChange}
                                        formName="formTask"
                                        formControl={state.formTask}
                                        yesOrNoOptions={[
                                            { name: 'Yes', code: "Yes" },
                                            { name: 'No', code: "No" }
                                        ]}
                                        handleDropdownChange={handleDropdownChange}
                                        handleGoBack={handleGoBack}
                                        onSubmit={(values, formikProps) => handleSubmit(taskSubmit, values, formikProps)}
                                    />}

                                    {state.formStep == 7 && <PastJob
                                        onChange={handleChange}
                                        formName="formPastJob"
                                        formControl={state.formPastJob}
                                        setPastjobField={setPastjobField}
                                        onSubmit={(values, formikProps) => handleSubmit(pastJobSubmit, values, formikProps)}
                                        editPastJobList={editPastJobList}
                                        handleGoBack={handleGoBack}
                                        onDelete={(id)=> removePastJob(id, state, changeState, addMessage)}
                                        toggleWorks={()=> changeState({...state, formPastJob: {...state.formPastJob,workHere: !state.formPastJob.workHere }})}
                                        onFinish={() => fetchData(8)}
                                    />}

                                    {state.formStep == 8 && <Reference
                                        onChange={handleChange}
                                        formName="formReference"
                                        formControl={state.formReference}
                                        countryOption={[
                                            { name: 'Yes', code: true },
                                            { name: 'No', code: false }
                                        ]}
                                        handleDropdownChange={handleDropdownChange}
                                        handleGoBack={handleGoBack}
                                        handleNext={() => fetchData(9)}
                                        doToggleModal={()=>changeState({...state, formReference: {...state.formReference, toggle: !state.formReference.toggle}})}
                                        onSubmit={(values, formikProps) => handleSubmit(referenceSubmit, values, formikProps)}
                                    />}
                                    {state.formStep == 9 && <Consent
                                        signatureRef={signatureRef}
                                        captchaRef={captchaRef}
                                        clearSignature={clearSignature}
                                        formControl={state.formConsent}
                                        personalDetails={state.formPersonal}
                                        onCaptchaChange={onCaptchaChange}
                                        handleGoBack={handleGoBack}
                                        doReload={()=> getConsentData(state, changeState)}
                                        onSubmit={() => handleSubmit(consentSubmit, signatureRef.current.getTrimmedCanvas().toDataURL('image/png'), null )} />
                                    }
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}
