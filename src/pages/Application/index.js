import React, { useState } from 'react'
import Logo from 'components/common/Logo'
import { TabMenu } from 'primereact/components/tabmenu/TabMenu';
import { checkProperties, onChange, onDropdownChange } from 'utilities';
import Personal from './Forms/Personal';
import Emergency from './Forms/Emergency';
import Transportation from './Forms/Transportation';
import Availability from './Forms/Availability';
import Education from './Forms/Education'

export default function Application() {
    let [state, changeState] = useState({
        items: [
            { label: "Personal", step: 1 },
            { label: "Emergency Contact", step: 2 },
            { label: "Transportation", step: 3 },
            { label: "Avaliability", step: 4 },
            { label: "Education", step: 5 },
            { label: "Task review", step: 6 },
            { label: "Certificate", step: 7 },
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
    })

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
                                formControl={educationState}
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
