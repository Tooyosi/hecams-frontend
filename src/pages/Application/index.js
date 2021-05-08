import React, { useState } from 'react'
import Logo from 'components/common/Logo'
import { TabMenu } from 'primereact/components/tabmenu/TabMenu';
import { checkProperties, onChange, onDropdownChange } from 'utilities';
import Personal from './Forms/Personal';
import Emergency from './Forms/Emergency';
import Transportation from './Forms/Transportation';
import Availability from './Forms/Availability';
import Education from './Forms/Education'
import Task from './Forms/Task';
import PastJob from './Forms/PastJob';
import Reference from './Forms/Reference';

export default function Application() {
    let [state, changeState] = useState({
        items: [
            { label: "Personal", step: 1 },
            { label: "Emergency Contact", step: 2 },
            { label: "Transportation", step: 3 },
            { label: "Avaliability", step: 4 },
            { label: "Education", step: 5 },
            { label: "Task review", step: 6 },
            // { label: "Certificate", step: 7 },
            { label: "Past Job", step: 8 },
            { label: "Reference", step: 9 },
            { label: "Consent", step: 10 },
        ],
        activeItem: '',
        formStep: 1,
        showModal: false,
        showSuccess: false,
        formPersonal: {
            firstname: '',
            middlename: '',
            lastname: '',
            phone: '',
            workPhone: '',
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
            weekend: "",
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
            ...referenceFields("formHighSchool")
        },
        formReference2: {
            ...referenceFields("formCollege")
        },
        formReference3: {
            ...referenceFields("formTrade")
        }
    })

    let updatePastJobList = (values, { setFieldValue, resetForm, ...params }, a, b) => {

        console.log({ values, params, a, b })
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
                list: [...state.formPastJob.list, { ...values }]
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
        let item = state.formPastJob.list[param2]
        if (param1 == "edit") {
            delete item["list"]
            param3(item)
            changeState({
                ...state,
                formPastJob: {
                    ...state.formPastJob,
                    ...item
                }
            })
        }else{
            item.list?.splice(param2, 1)

            changeState({
                ...state,
                formPastJob:{
                    ...state.formPastJob,
                    list: item.list || []
                }
    
            })
        }
        state.formPastJob.list?.splice(param2, 1)
        
    }

    let setPastjobField = (field, value) => {
        return { field, value }
    }


    const tabChange = (e) => {
        let denyChange = false
        switch (e.value) {
            case state.items[1]:
                denyChange = checkProperties(state.formBioData)
                break;
            case state.items[2]:
                denyChange = checkProperties(state.formAddress) || checkProperties(state.formBioData)
                break;
            case state.items[3]:
                denyChange = checkProperties(state.formQualification) || checkProperties(state.formAddress) || checkProperties(state.formBioData)
                break;
            case state.items[4]:
                denyChange = checkProperties(state.formCriminal) || checkProperties(state.formQualification) || checkProperties(state.formAddress) || checkProperties(state.formBioData)
                break;
        }

        if (!denyChange)
            changeState({ ...state, activeItem: e.value, formStep: e.value.step })
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


    return (
        <div className="p-d-flex p-flex-column application-page">
            {/* Application Page */}
            <div class="p-grid p-m-0 p-py-3 p-pl-xl-6">
                <div class="p-col-12">
                    <div class="p-grid p-justify-center p-mt-auto p-mb-auto">

                        <div className="p-col-12 p-lg-6 p-text-center">
                            <Logo />
                            <h3 className="text-primary">Ability Options Applicaton Form</h3>
                            <p>
                                We are an equal opportunity employer, dedicated to a policy of non-discrimination in
                                employment on any basis including race, color, national origin, age, sex, religion, disability status,
                                 marital status, protected veteran status, or any other characteristic protected by law.
                                The following characters cannot be used on this form {`(%,&,/,?,>,<,|,{,})`}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12">
                    <div class="p-grid p-justify-center p-px-3 p-mt-auto p-mb-auto">
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
                                />}

                            {state.formStep == 2 &&
                                <Emergency
                                    onChange={handleChange}
                                    formName="formEmergency"
                                    formControl={state.formEmergency}
                                />}

                            {state.formStep == 3 && <Transportation
                                onChange={handleChange}
                                formName="formTransportation"
                                formControl={state.formTransportation}
                                yesOrNoOptions={[
                                    { name: 'Yes', code: 'yes' },
                                    { name: 'No', code: 'no' }
                                ]}
                                handleDropdownChange={handleDropdownChange} />}


                            {state.formStep == 4 && <Availability
                                onChange={handleChange}
                                formName="formAvailability"
                                formControl={state.formAvailability}
                                yesOrNoOptions={[
                                    { name: 'Yes', code: 'yes' },
                                    { name: 'No', code: 'no' }
                                ]}
                                handleDropdownChange={handleDropdownChange}
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
                            />}

                            {state.formStep == 8 && <PastJob
                                onChange={handleChange}
                                formName="formPastJob"
                                formControl={state.formPastJob}
                                setPastjobField={setPastjobField}
                                onSubmit={updatePastJobList}
                                editPastJobList={editPastJobList}
                            />}

{state.formStep == 9 && <Reference
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
                            />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
