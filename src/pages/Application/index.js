import React, { useState,useContext, useRef } from 'react'
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
import { emergencySubmit, personalSubmit, taskSubmit, transportationSubmit, pastJobSubmit, referenceSubmit, consentSubmit, verifyEmail } from './Application.run';
import FormOtp from './Forms/FormOtp';
import { ToastContext } from 'layout/PlainLayout';

export default function Application() {
    let signatureRef = useRef(null)
    let [message, setMessage] = useContext(ToastContext)
    const clearSignature = () => {
        // console.log(signatureRef)
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
            workingWithDisablilties: '',
            challanging: '',
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
        },
        formEmergency: {
            fullName: '',
            address: '',
            phone: '',
            city: '',
            alternativePhone: '',
            relationship: '',
            zip: '',
            state: ''

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
            contact: ''
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
    let [educationState, changeEducationState] = useState({
        formHighSchool: {
            ...educationFields("formHighSchool")
        },
        formCollege: {
            ...educationFields("formCollege")
        },
        formTrade: {
            ...educationFields("formTrade")
        },
        formProfessional: {
            ...educationFields("formProfessional")
        },
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
        for (let i = 0; i < state.formPastJob?.list?.length; i++) {
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
        let denyChange = false
        if (e.value.step <= (Number(state.activeItem.step))) {
            changeState({ ...state, activeItem: e.value, formStep: e.value.step })

        }
        // switch (e.value) {
        //     case state.items[1]:
        //         denyChange = checkProperties(state.formBioData)
        //         break;
        //     case state.items[2]:
        //         denyChange = checkProperties(state.formAddress) || checkProperties(state.formBioData)
        //         break;
        //     case state.items[3]:
        //         denyChange = checkProperties(state.formQualification) || checkProperties(state.formAddress) || checkProperties(state.formBioData)
        //         break;
        //     case state.items[4]:
        //         denyChange = checkProperties(state.formCriminal) || checkProperties(state.formQualification) || checkProperties(state.formAddress) || checkProperties(state.formBioData)
        //         break;
        // }


        // if (!denyChange)
        //     changeState({ ...state, activeItem: e.value, formStep: e.value.step })
    }


    const handleChange = (e, formName) => {
        // e.target.value = e.target.value.replace(/[&\/\\#,+()~%.'":*?<>{}!|]/g,'');
        // console.log(e.target.value)
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

    const handleGoBack = () => {
        if (state.formStep > 1) {
            let newFormstep = state.formStep - 1
            changeState({ ...state, activeItem: state.items[(newFormstep - 1)], formStep: newFormstep })
        }
    }

    const onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
    }
    return (
        <div className="p-d-flex p-flex-column application-page">
            {/* Application Page */}
            <div className="p-grid p-m-0 p-py-3 p-pl-xl-6">
                <div className="p-col-12">
                    <div className="p-grid p-justify-center p-mt-auto p-mb-auto">

                        <div className="p-col-12 p-lg-6 p-text-center">
                            <Logo />
                            <h3 className="text-primary">{COMPANY_NAME} Applicaton Form</h3>
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
                    <div className="p-col-4 p-mx-auto">
                        <FormOtp
                            onChange={handleChange}
                            formName="formPersonal"
                            formStep={state.otpStep}
                            formControl={state.formPersonal}
                            onSubmit={(values, formikProps) => handleSubmit(verifyEmail, values, formikProps)}
                        />
                    </div>
                    :
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
                                            { name: 'Yes', code: 'yes' },
                                            { name: 'No', code: 'no' }
                                        ]}
                                        handleDropdownChange={handleDropdownChange}
                                        genderOptions={[
                                            { name: 'Male', code: 'male' },
                                            { name: 'Female', code: 'female' },
                                            { name: 'I prefer not to say', code: 'not_say' }
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
                                        { name: 'Yes', code: 'yes' },
                                        { name: 'No', code: 'no' }
                                    ]}
                                    handleDropdownChange={handleDropdownChange}
                                    handleGoBack={handleGoBack}
                                    onSubmit={(values, formikProps) => handleSubmit(transportationSubmit, values, formikProps)} />}


                                {state.formStep == 4 && <Availability
                                    onChange={handleChange}
                                    formName="formAvailability"
                                    formControl={state.formAvailability}
                                    yesOrNoOptions={[
                                        { name: 'Yes', code: 'yes' },
                                        { name: 'No', code: 'no' }
                                    ]}
                                    handleDropdownChange={handleDropdownChange}
                                    handleGoBack={handleGoBack}
                                    onSubmit={(values, formikProps) => handleSubmit(transportationSubmit, values, formikProps)}
                                />}

                                {state.formStep == 5 && <Education
                                    onChange={handleEducationChange}
                                    formHighSchoolName="formHighSchool"
                                    formCollegeName="formCollege"
                                    formTradeName="formTrade"
                                    formProfessionalName="formProfessional"
                                    formControl={educationState}
                                    countryOption={[
                                        { name: 'Yes', code: 'yes' },
                                        { name: 'No', code: 'no' }
                                    ]}
                                    handleDropdownChange={handleDropdownChange}
                                    handleGoBack={handleGoBack}
                                    onSubmit={(values, formikProps) => handleSubmit(transportationSubmit, values, formikProps)}
                                />}

                                {state.formStep == 6 && <Task
                                    onChange={handleChange}
                                    formName="formTask"
                                    formControl={state.formTask}
                                    yesOrNoOptions={[
                                        { name: 'Yes', code: 'yes' },
                                        { name: 'No', code: 'no' }
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
                                    onSubmit={updatePastJobList}
                                    editPastJobList={editPastJobList}
                                    handleGoBack={handleGoBack}
                                    onFinish={(values, formikProps) => handleSubmit(pastJobSubmit, values, formikProps)}
                                />}

                                {state.formStep == 8 && <Reference
                                    onChange={handleReferenceChange}
                                    formReference1Name="formReference1"
                                    formReference2Name="formReference2"
                                    formReference3Name="formReference3"
                                    formControl={referenceState}
                                    countryOption={[
                                        { name: 'Yes', code: 'yes' },
                                        { name: 'No', code: 'no' }
                                    ]}
                                    handleDropdownChange={handleDropdownChange}
                                    handleGoBack={handleGoBack}
                                    onSubmit={(values, formikProps) => handleSubmit(referenceSubmit, values, formikProps)}
                                />}
                                {state.formStep == 9 && <Consent
                                    signatureRef={signatureRef}
                                    clearSignature={clearSignature}
                                    personalDetails={state.formPersonal}
                                    onCaptchaChange={onCaptchaChange}
                                    handleGoBack={handleGoBack}
                                    onSubmit={(values, formikProps) => handleSubmit(consentSubmit, values, formikProps)} />
                                }
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
