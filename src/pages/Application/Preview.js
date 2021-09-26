import React, { useState, useContext, useRef, useEffect } from 'react'
import Logo from 'components/common/Logo'
import { TabMenu } from 'primereact/components/tabmenu/TabMenu';
import { COMPANY_NAME, onDropdownChange } from 'utilities';
import { showLoading } from 'utilities/utility_alert.js';
import Personal from './Forms/Personal';
import Emergency from './Forms/Emergency';
import Transportation from './Forms/Transportation';
import Availability from './Forms/Availability';
import Education from './Forms/Education'
import Task from './Forms/Task';
import PastJob from './Forms/PastJob';
import Reference from './Forms/Reference';
import Consent from './Forms/Consent';
import {  consentSubmit, getPersonalData, getEmergencyData,  getTransportData, getAvailabilityData,  getEducationData, getTaskData, getReferenceData, getPastJobData, getConsentData, removeEducation, removePastJob, submitStatus } from './Application.run';
import { ToastContext } from 'routes/guards/DashboardGuard';
import Loader from 'components/common/Loader';
import { getAllApplicationTypes } from 'service/jobAppliationservice';
import StatusForm from './Forms/StatusForm';


export default function ApplicationView(props) {
    const { match: { params: { id } }, location: {search} } = props
    let searchTerm = new URLSearchParams(search)
    let searchVal = searchTerm.get("status")

    let signatureRef = useRef(null)
    let captchaRef = useRef(null)
    let [message, setMessage] = useContext(ToastContext)
    const clearSignature = () => {
        // clear the canvas
        signatureRef.current.clear()
        captchaRef.current.reset()
    }
    const [applicationTypes, setApplicationTypes] = useState([])

    const fetchTypes = async () => {
        try {
            let { data } = await getAllApplicationTypes(state.page, state.limit)

            let newData = Object.entries(data).map((a) => {
                return { name: a[0], value: a[1] }
            })

            setApplicationTypes([
                ...applicationTypes,
                ...newData
            ])
        } catch (error) {
            console.log(error)
        }
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
        loading: true,
        showModal: false,
        showSuccess: false,
        formStatus: {
            status: searchVal || ''
        },
        formPersonal: {
            firstname: '',
            middlename: '',
            lastname: '',
            phone: '',
            workPhone: '',
            otp: '',
            email: id,
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
        formEducation: {
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
            referenceName: '',
            relationship: '',
            years: '',
            phone: '',
            toggle: false
        },
        formConsent: {
            file: '',
            fileType: '',
            isSubmitted: false,
            submitting: false
        }
    })

  

    const tabChange = (e) => {
        // if (e.value.step <= (Number(state.activeItem.step))) {
            // changeState({ ...state, activeItem: e.value, formStep: e.value.step })
            fetchData(e.value.step)


        // }
    }


    const handleChange = (e, formName) => {
        // onChange(e, state, changeState, formName)
    }


    const handleDropdownChange = (e, formName) => {
        onDropdownChange(e, state, changeState, formName)
    }

    const doSubmitStatus = async () => {
      submitStatus(state.formPersonal.email, state.formStatus.status, addMessage)
        
    }

    const handleDataFetch = (fn, stateObj = state, changeStateFn = changeState) => {
        showLoading()
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
        if (!signatureRef.current.isEmpty()) {
            param(true)
        } else {
            captchaRef.current.reset()
        }
    }

    const fetchData = (step = (state.formStep + 1)) => {
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
                // handleDataFetch(getConsentData)
                changeState({
                    ...state,
                    formStep: 9
                })
                break;
        }
    }

    useEffect(()=>{
        fetchData(1)
        fetchTypes()
    }, [])
    return (
        <div className="p-d-flex p-flex-column application-page">
            {/* Application Page */}
            <div className="p-grid p-m-0 p-py-3">
                {state.loading ? <Loader /> :
                    <div className="p-col-12">
                      <div className="p-justify-end">
                      <StatusForm 
                            dropdownOptions={applicationTypes}
                            onChange={handleChange}
                            formName="formStatus"
                            formControl={state.formStatus}
                            handleDropdownChange={handleDropdownChange}
                            onSubmit={doSubmitStatus}
                            />
                      </div>
                        <div className="p-grid p-justify-center p-px-3 p-mt-auto p-mb-auto">
                            <div className="p-mb-3">
                                <TabMenu className="application-tabs" model={state.items} activeItem={state.activeItem}
                                    onTabChange={tabChange}
                                />
                                {state.formStep == 1 &&
                                    <Personal
                                        onChange={handleChange}
                                        formName="formPersonal"
                                        readOnly={true}
                                        formControl={state.formPersonal}
                                        yesOrNoOptions={[
                                            { name: 'Yes', code: true },
                                            { name: 'No', code: false }
                                        ]}
                                        genderOptions={[
                                            { name: 'male', code: 'male' },
                                            { name: 'female', code: 'female' },
                                            { name: 'i prefer not to say', code: 'i_prefer_not_to_say' }
                                        ]}
                                        onSubmit={() => fetchData()}
                                    />}

                                {state.formStep == 2 &&
                                    <Emergency
                                        onChange={handleChange}
                                        formName="formEmergency"
                                        readOnly={true}
                                        formControl={state.formEmergency}
                                        handleGoBack={handleGoBack}
                                        onSubmit={() => fetchData()}

                                    />}

                                {state.formStep == 3 && <Transportation
                                    onChange={handleChange}
                                    formName="formTransportation"
                                    readOnly={true}
                                    formControl={state.formTransportation}
                                    yesOrNoOptions={[
                                        { name: 'Yes', code: true },
                                        { name: 'No', code: false }
                                    ]}
                                    
                                    handleGoBack={handleGoBack}
                                    onSubmit={() => fetchData()} />}


                                {state.formStep == 4 && <Availability
                                    onChange={handleChange}
                                    formName="formAvailability"
                                    formControl={state.formAvailability}
                                    readOnly={true}
                                    yesOrNoOptions={[
                                        { name: 'Yes', code: true },
                                        { name: 'No', code: false }
                                    ]}
                                    
                                    handleGoBack={handleGoBack}
                                    onSubmit={() => fetchData()}
                                />}

                                {state.formStep == 5 && <Education
                                    onChange={handleChange}
                                    formControl={state.formEducation}
                                    formName="formEducation"
                                    readOnly={true}
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
                                    doToggleModal={() => changeState({ ...state, formEducation: { ...state.formEducation, toggle: !state.formEducation.toggle } })}
                                    
                                    handleGoBack={handleGoBack}
                                    handleNext={() => fetchData(6)}
                                    onDelete={(id) => removeEducation(id, state, changeState, addMessage)}
                                    onSubmit={() => fetchData()}
                                />}

                                {state.formStep == 6 && <Task
                                    onChange={handleChange}
                                    readOnly={true}
                                    formName="formTask"
                                    formControl={state.formTask}
                                    yesOrNoOptions={[
                                        { name: 'Yes', code: "Yes" },
                                        { name: 'No', code: "No" }
                                    ]}
                                    
                                    handleGoBack={handleGoBack}
                                    onSubmit={() => fetchData()}
                                />}

                                {state.formStep == 7 && <PastJob
                                    onChange={handleChange}
                                    readOnly={true}
                                    formName="formPastJob"
                                    formControl={state.formPastJob}
                                    handleGoBack={handleGoBack}
                                    onDelete={(id) => removePastJob(id, state, changeState, addMessage)}
                                    toggleWorks={() => changeState({ ...state, formPastJob: { ...state.formPastJob, workHere: !state.formPastJob.workHere } })}
                                    onFinish={() => fetchData(8)}
                                />}

                                {state.formStep == 8 && <Reference
                                    readOnly={true}
                                    onChange={handleChange}
                                    formName="formReference"
                                    formControl={state.formReference}
                                    countryOption={[
                                        { name: 'Yes', code: true },
                                        { name: 'No', code: false }
                                    ]}
                                    
                                    handleGoBack={handleGoBack}
                                    handleNext={() => fetchData(9)}
                                    doToggleModal={() => changeState({ ...state, formReference: { ...state.formReference, toggle: !state.formReference.toggle } })}
                                />}
                                {state.formStep == 9 && <Consent
                                    readOnly={true}
                                    signatureRef={signatureRef}
                                    captchaRef={captchaRef}
                                    clearSignature={clearSignature}
                                    formControl={state.formConsent}
                                    personalDetails={state.formPersonal}
                                    onCaptchaChange={onCaptchaChange}
                                    handleGoBack={handleGoBack}
                                    readOnly={true}
                                    doReload={() => getConsentData(state, changeState)}
                                    onSubmit={() => {}} />
                                }
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
