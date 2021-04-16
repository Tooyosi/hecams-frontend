import React, { useState } from 'react'
import { TabMenu } from 'primereact/components/tabmenu/TabMenu';
import FormBioData from './Forms/FormBioData';
import { onChange, onDropdownChange, handleSelectedDocument, checkProperties } from 'utilities';
import FormAddress from './Forms/FormAddress';
import FormQualifications from './Forms/FormQualifications';
import FormCriminalRecord from './Forms/FormCriminalRecord';
import { Button } from 'primereact/button';
import View from './View';
import CustomModal from 'components/common/CustomModal';

export default function Onboard() {
    let [state, changeState] = useState({
        items: [
            { label: "Bio Data", step: 1 },
            { label: "Address", step: 2 },
            { label: "Qualifications", step: 3 },
            { label: "Criminal status", step: 4 }
        ],
        activeItem: '',
        formStep: 1,
        showModal: false,
        showSuccess: false,
        formBioData: {
            firstname: '',
            lastname: '',
            middlename: '',
            calendar: '',
            ssn: ''
        },
        formAddress: {
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''

        },
        formQualification: {
            certificate: '',
            license: '',
            authorization: '',
            position: '',
            records: ''
        },
        formCriminal: {
            record: '',
            contestForm: '',
        }
    })


    const handleChange = (e, formName) => {
        onChange(e, state, changeState, formName)
        let { target: { name, value } } = e
        if (name == "ssn") {
            if (value.length < 12) {
                let newVal = value.replace(/[^0-9]/g, "").substr(0, 19).split("").reduce(cardFormat, "");
                function cardFormat(str, l, i) {
                    return str + ((!i || (i % 3)) ? "" : "-") + l;
                }

                changeState({
                    ...state,
                    formBioData: {
                        ...state.formBioData,
                        [name]: newVal
                    }
                })
            } else {
                changeState({ ...state })
            }

        }
    }

    const handleUpload = (e) => {
        handleSelectedDocument(e, state, changeState)
    }
    let updateState = (param) => {
        changeState({ ...state, ...param })

    }
    const handleSubmit = (formFields, { resetForm, setFieldError, setSubmitting }) => {
        
        let { formStep } = state
        if (formStep <= 3) {
            updateState({ formStep: formStep + 1, activeItem: state.items[formStep] })
        } else {
            updateState({ formStep:  1, showSuccess: true,showModal: false, activeItem: state.items[0] })

        }

    }

    const handleDropdownChange = (e, formName) => {
        onDropdownChange(e, state, changeState, formName)
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

    const toggleModal = ()=>{
        updateState({showModal: !state.showModal})
    }
    return (
        <div className="p-grid p-justify-center p-mt-auto p-mb-auto">
            <div className="p-col-12 p-md-6 p-lg-6">
                {!state.showSuccess ?
                    <View
                        state={state}
                        handleChange={handleChange}
                        handleDropdownChange={handleDropdownChange}
                        updateState={updateState}
                        handleSubmit={handleSubmit}
                        tabChange={tabChange}
                    /> :
                    <div className="card">
                        <div className="card-body p-px-3">

                            <div className="p-text-center">
                                <img src="./assets/images/svg/icons/ic-mark.svg" />
                                <p className="p-px-4 text-primary">User Enrollment successfully <br /> completed</p>
                                <div className="p-grid">
                                    <div className="p-col">

                                        <Button label="View enrollment" className="bg-grey width-100" onClick={toggleModal} ></Button>
                                    </div>
                                    <div className="p-col">
                                        <Button label="View all users" className="bg-grey width-100" ></Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                }
                <CustomModal
                    header=""
                    style={{ width: '40vw' }}
                    visible={state.showModal}
                    toggle={toggleModal}
                >
                    <View
                        state={state}
                        handleChange={handleChange}
                        handleDropdownChange={handleDropdownChange}
                        updateState={updateState}
                        handleSubmit={handleSubmit}
                        tabChange={tabChange}
                    />
                </CustomModal>
            </div>
        </div>

    )
}
