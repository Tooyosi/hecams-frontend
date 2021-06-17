import { verifyJobEmail, refreshOtp, validateOtp, getPersonal, addPersonal, getEmergency, addEmergency, addTransport, getAvailability, addAvailability, getTransport, getEducation, addEducation, getTask, addTask, getPastJob, addPastJob, addReference, getReference } from "service/jobAppliationservice"
import { checkNull, DATE_FORMAT } from "utilities"
import moment from "moment"

const catchError = (error, addMessage) => {
    addMessage("error", `${error ?.response ?.data ?.error || "Failed"}`, `${error ?.response ?.data ?.message || "An Error occured"}`, `${error ?.response ?.data ?.debugMessage || "An Error occured"}`)

}

export const personalSubmit = async (values, formikProps, state, changeState, addMessage) => {
    try {
        let formData = new FormData()
        formData.append("firstname", state.formPersonal.firstname)
        formData.append("middlename", state.formPersonal.middlename)
        formData.append("lastname", state.formPersonal.lastname)
        formData.append("phoneNumber", state.formPersonal.phone)
        // formData.append("workPhone", state.formPersonal.workPhone)
        formData.append("whatsAppNumber", state.formPersonal.workPhone)
        formData.append("emailAddress2", state.formPersonal.email)
        formData.append("gender", state.formPersonal.gender.code)
        formData.append("howYouHeardAboutUs", state.formPersonal.howHear)
        formData.append("yourChallengeWithDisabled", state.formPersonal.workingWithDisabilities)
        formData.append("whatYouFindMostChallengingInThisJob", state.formPersonal.challenging)
        formData.append("address1", state.formPersonal.address1)
        formData.append("address2", state.formPersonal.address2)
        formData.append("city", state.formPersonal.city)
        formData.append("stateName", state.formPersonal.state)
        formData.append("zip", state.formPersonal.zip)
        formData.append("positionAppliedFor", state.formPersonal.position)
        formData.append("ssn", state.formPersonal.ssn)
        formData.append("howLongAtAddress", state.formPersonal.howLongAtAddress)
        formData.append("capability", state.formPersonal.capability.code)
        formData.append("convicted", state.formPersonal.convicted.code)
        formData.append("fileUploadId", state.formPersonal.fileUploadId)
        formData.append("fileUploadSize", state.formPersonal.fileUploadSize)
        if (state.formPersonal.upload !== "") {
            formData.append("fileUploadDataMultiPart", state.formPersonal.upload)
        }

        let { data } = await addPersonal(state.formPersonal.email, formData)

        getEmergencyData(state, changeState)

    } catch (error) {
        catchError(error, addMessage)
        // formikProps.setValues(values)     
    } finally {
        formikProps.setSubmitting(false)
    }
    // changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const emergencySubmit = async (values, formikProps, state, changeState, addMessage) => {
    let formData = new FormData()
    formData.append("fullName", state.formEmergency.fullName)
    formData.append("phoneNumber", state.formEmergency.phone)
    formData.append("alternativePhone", state.formEmergency.alternativePhone)
    formData.append("relationship", state.formEmergency.relationship)
    formData.append("address1", state.formEmergency.address)
    formData.append("address2", "")
    formData.append("country", "")
    formData.append("city", state.formEmergency.city)
    formData.append("stateName", state.formEmergency.state)
    formData.append("zip", state.formEmergency.zip)
    // changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })
    try {
        let { data } = await addEmergency(state.formPersonal.email, formData)

        getTransportData(state, changeState)
    } catch (error) {

        catchError(error, addMessage)
    } finally {
        formikProps.setSubmitting(false)
    }
}

export const transportationSubmit = async (values, formikProps, state, changeState, addMessage) => {
    // changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })
    let formData = new FormData()
    formData.append("doYouHaveACar", state.formTransportation.car.code)
    formData.append("ifYouDontHowDoYouGetToWork", state.formTransportation.reason)
    formData.append("driverLicenseNumber", state.formTransportation.license)
    formData.append("driverLicExpiration", state.formTransportation.expiration)
    formData.append("driverLicExpirationLong", "")
    try {
        let { data } = await addTransport(state.formPersonal.email, formData)

        getAvailabilityData(state, changeState)
    } catch (error) {

        catchError(error, addMessage)
    } finally {
        formikProps.setSubmitting(false)
    }

}

export const availabilitySubmit = async (values, formikProps, state, changeState, addMessage) => {
    // changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })
    let formData = new FormData()
    formData.append("numHoursYouCanWorkWeekly", state.formAvailability.hours)
    formData.append("canYouWorkAtNight", state.formAvailability.night.code)
    formData.append("canYouWorkWeekend", state.formAvailability.weekends.code)
    formData.append("availableToStartDate", moment(state.formAvailability.startDate).format("MMM-DD-yyyy"))
    formData.append("areYouAllowedToWorkInTheUS", state.formAvailability.allowedToWork.code)
    formData.append("whenAreUnAvailableToWork", state.formAvailability.notavailableToWork.code)
    formData.append("employmentDesired", state.formAvailability.employmentDesired.name)
    try {
        let { data } = await addAvailability(state.formPersonal.email, formData)

        getEducationData(state, changeState)
        formikProps.resetForm({})
    } catch (error) {

        catchError(error, addMessage)
    } finally {
        formikProps.setSubmitting(false)
    }

}


export const educationSubmit = async (values, formikProps, state, changeState, addMessage) => {
    // changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })
    let formData = new FormData()
    formData.append("schoolType", state.formEducation.schoolType.code)
    formData.append("schoolName", state.formEducation.schoolName)
    formData.append("city", state.formEducation.city)
    formData.append("stateName", state.formEducation.state)
    formData.append("country", state.formEducation.country.code)
    formData.append("levelCompleted", state.formEducation.level)
    formData.append("degree", state.formEducation.degree)
    formData.append("major", state.formEducation.major)

    if (state.formEducation.certificate !== "") {
        formData.append("certificateUploadMultiPart", state.formEducation.certificate)
    }
    try {
        let { data } = await addEducation(state.formPersonal.email, formData)

        getEducationData(state, changeState)
    } catch (error) {

        catchError(error, addMessage)
    } finally {
        formikProps.setSubmitting(false)
    }

}

export const taskSubmit = async (values, formikProps, state, changeState, addMessage) => {
    let formData = new FormData()
    formData.append("bathing", state.formTask.bathing.code)
    formData.append("dressing", state.formTask.dressing.code)
    formData.append("personalHygiene", state.formTask.personalHygine.code)
    formData.append("eating", state.formTask.eating.code)
    formData.append("mealPlanning", state.formTask.mealPlanning.code)
    formData.append("housekeeping", state.formTask.houseKeeping.code)
    formData.append("mealPreparation", state.formTask.mealPreparation.code)
    formData.append("improveIndependentLivingSkills", state.formTask.independentLivingSkills.code)
    formData.append("communityIntegration", state.formTask.communityIntegration.code)
    formData.append("devSocialValBehaviour", state.formTask.valuedBehaviours.code)
    formData.append("useOfNaturalSupport", state.formTask.naturalSupports.code)
    formData.append("participateInLeisureActivities", state.formTask.leisureActivities.code)
    formData.append("ipSkillDevelopment", state.formTask.skillDevelopment.code)
    formData.append("ambulationAndMobility", state.formTask.ambAndMobility.code)
    formData.append("administrationOfMedication", state.formTask.medication.code)
    formData.append("reinforcingSpecializedTherapies", state.formTask.specializedTheraphies.code)
    formData.append("transportation", state.formTask.transportation.code)
    formData.append("supervisingSafetyAndSecurity", state.formTask.safetyAdSecurity.code)
    formData.append("supervisingSafetyAndSecurityNight", state.formTask.monitoringHealth.code)
    formData.append("monitoringHealth", state.formTask.additionalSkills.code)
    formData.append("additionalSkills", state.formTask.safetyAndSecurity.code)

    try {
        let { data } = await addTask(state.formPersonal.email, formData)

        getPastJobData(state, changeState)
    } catch (error) {

        catchError(error, addMessage)
    } finally {
        formikProps.setSubmitting(false)
    }

}

export const pastJobSubmit = async (values, formikProps, state, changeState, addMessage) => {

    // company: '',
    //         reasonLeft: '',
    //         from: '',
    //         supervisor: '',
    //         to: '',
    //         phone: '',
    //         jobTitle: '',
    //         contact: ''
    let formData = new FormData()
    formData.append("companyName", state.formPastJob.company)
    formData.append("workInCurrentCompany", state.formPastJob.workHere)
    formData.append("fromDate", moment(state.formPastJob.from).format("MMM-DD-yyyy"))
    formData.append("toDate", state.formPastJob.workHere ? moment(state.formPastJob.from).format("MMM-DD-yyyy") : moment(state.formPastJob.to).format("MMM-DD-yyyy"))
    formData.append("jobTitle", state.formPastJob.jobTitle)
    formData.append("reasonLeft", state.formPastJob.reasonLeft)
    formData.append("supervisorName", state.formPastJob.supervisor)
    formData.append("supervisorPhone", state.formPastJob.phone)
    formData.append("mayWeContactSupervisor", true)





    try {
        let { data } = await addPastJob(state.formPersonal.email, formData)

        getPastJobData(state, changeState)
        formikProps.resetForm({})
        formikProps.setFieldValue('formPastJob', '')
        formikProps.setFieldValue('company', '')
        formikProps.setFieldValue('reasonLeft', '')
        formikProps.setFieldValue('from', '')
        formikProps.setFieldValue('supervisor', '')
        formikProps.setFieldValue('to', '')
        formikProps.setFieldValue('phone', '')
        formikProps.setFieldValue('jobTitle', '')
        formikProps.setFieldValue('contact', '')


    } catch (error) {

        catchError(error, addMessage)
        formikProps.setSubmitting(false)

    } finally {
        // formikProps.setSubmitting(false)
    }

}

export const referenceSubmit = async (values, formikProps, state, changeState, addMessage) => {

    let formData = new FormData()
    formData.append("fullName", state.formReference.referenceName)
    formData.append("relationship", state.formReference.relationship.code)
    formData.append("NumberOfYearsKnown", state.formReference.years)
    formData.append("phoneNumber", state.formReference.phone)

    try {
        let { data } = await addReference(state.formPersonal.email, formData)
        getReferenceData(state, changeState)
        formikProps.resetForm({})
        formikProps.setFieldValue('referenceName', '')
        formikProps.setFieldValue('relationship', '')
        formikProps.setFieldValue('years', '')
        formikProps.setFieldValue('phone', '')
    } catch (error) {

        catchError(error, addMessage)
        formikProps.setSubmitting(false)

    } finally {
        // formikProps.setSubmitting(false)
    }


}
export const consentSubmit = (values, formikProps, state, changeState) => {
    changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}


export const verifyEmail = async (values, formikProps, state, changeState, addMessage) => {
    if (state.otpStep == 1) {
        try {
            let { data } = await verifyJobEmail({ emailAddress: state.formPersonal.email })
            // show the otp screen or application form screen
            changeState({
                ...state,
                otpStep: 2
            })

        } catch (error) {
            catchError(error, addMessage)
        }

        formikProps.setSubmitting(false)
    } else {
        try {
            let { data } = await validateOtp({
                "emailAddress": state.formPersonal.email,
                "oneTimePassword": state.formPersonal.otp
            })
            changeState({
                ...state,
                otpStep: 3,
                loading: true,
            })

            getPersonalData(state, changeState)
            // getEmergencyData(state, changeState)

        } catch (error) {
            catchError(error, addMessage)
        }
        formikProps.setSubmitting(false)
    }
}


export const sendResendOtp = async (email, addMessage, setSubmitting) => {
    try {
        setSubmitting(true)
        let { data } = await refreshOtp({ emailAddress: email })
        addMessage("success", `OTP Sent`, `OTP has been successfully sent to your email`, ``)
    } catch (error) {
        catchError(error, addMessage)
    }
    setSubmitting(false)
}


export const submitOtp = async (values, formikProps, state, changeState, addMessage) => {
    try {
        let { data } = await validateOtp({
            "emailAddress": state.formPersonal.email,
            "oneTimePassword": state.formPersonal.otp
        })
        changeState({
            ...state,
            otpStep: data.isJobAppOneTimePassValid ? 2 : 3
        })

    } catch (error) {
        catchError(error, addMessage)
    }
}


export const getPersonalData = async (state, changeState) => {
    try {
        let { data } = await getPersonal(state.formPersonal.email)
        changeState({
            ...state,
            loading: false,
            formStep: 1,
            activeItem: state.items[0],
            otpStep: 3,
            formPersonal: {
                ...state.formPersonal,
                firstname: checkNull(data.firstname),
                middlename: checkNull(data.middlename),
                lastname: checkNull(data.lastname),
                phone: checkNull(data.phoneNumber),
                workPhone: checkNull(data.whatsAppNumber),
                // email: checkNull(data.emailAddress),
                gender: dropDownObject(data.gender),
                howHear: checkNull(data.howYouHeardAboutUs),
                workingWithDisabilities: checkNull(data.yourChallengeWithDisabled),
                challenging: checkNull(data.whatYouFindMostChallengingInThisJob),
                address1: checkNull(data.address1),
                address2: checkNull(data.address2),
                city: checkNull(data.city),
                state: checkNull(data.stateName),
                zip: checkNull(data.zip),
                position: checkNull(data.positionAppliedFor),
                ssn: checkNull(data.ssn),
                cSsn: checkNull(data.ssn),
                howLongAtAddress: checkNull(data.howLongAtAddress),
                capability: dropDownBoolean(data.capabilityForTheJob),
                convicted: dropDownBoolean(data.convicted),
                upload: '',
                fileUploadId: checkNull(data.fileUploadId),
                fileUploadName: checkNull(data.fileUploadName),
                fileUploadSize: checkNull(data.fileUploadSize),
            }
        })
    } catch (error) {
        changeState({
            ...state,
            loading: false,
            otpStep: 3,
        })
    }
}


export const getEmergencyData = async (state, changeState) => {
    try {
        let { data } = await getEmergency(state.formPersonal.email)
        changeState({
            ...state,
            formStep: 2,
            activeItem: state.items[1],
            loading: false,
            formEmergency: {
                fullName: checkNull(data.fullName),
                address: checkNull(data.address1),
                phone: checkNull(data.phoneNumber),
                city: checkNull(data.city),
                alternativePhone: checkNull(data.alternativePhone),
                relationship: checkNull(data.relationship),
                zip: checkNull(data.zip),
                state: checkNull(data.stateName)
            }
        })
    } catch (error) {
        changeState({
            ...state,
            formStep: 2,
            loading: false,
            activeItem: state.items[1]
        })
    }
}

export const getTransportData = async (state, changeState) => {
    try {
        let { data } = await getTransport(state.formPersonal.email)
        changeState({
            ...state,
            formStep: 3,
            activeItem: state.items[2],
            loading: false,
            formTransportation: {
                car: dropDownBoolean(data.doYouHaveACar),
                reason: checkNull(data.ifYouDontHowDoYouGetToWork),
                license: checkNull(data.driverLicenseNumber),
                expiration: data.driverLicExpiration && data.driverLicExpiration !== "" ? new Date(data.driverLicExpiration) : '',
            }
        })
    } catch (error) {
        changeState({
            ...state,
            formStep: 3,
            loading: false,
            activeItem: state.items[2]
        })
    }
}

export const getAvailabilityData = async (state, changeState) => {
    try {
        let { data } = await getAvailability(state.formPersonal.email)
        changeState({
            ...state,
            formStep: 4,
            activeItem: state.items[3],
            loading: false,
            formAvailability: {
                hours: checkNull(data.numHoursYouCanWorkWeekly),
                night: dropDownBoolean(data.canYouWorkAtNight),
                weekends: dropDownBoolean(data.canYouWorkWeekend),
                startDate: checkNull(data.availableToStartDate),
                allowedToWork: dropDownBoolean(data.areYouAllowedToWorkInTheUS),
                notavailableToWork: checkNull(data.whenAreUnAvailableToWork),
                employmentDesired: checkNull(data.employmentDesired)
            }
        })
    } catch (error) {
        changeState({
            ...state,
            formStep: 4,
            loading: false,
            activeItem: state.items[3]
        })
    }
}

export const getEducationData = async (state, changeState) => {
    try {
        let { data } = await getEducation(state.formPersonal.email)
        changeState({
            ...state,
            formStep: 5,
            activeItem: state.items[4],
            loading: false,
            formEducation: {
                ...state.formEducation,
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
                list: [...data]
            }
        })
    } catch (error) {
        changeState({
            ...state,
            formStep: 5,
            loading: false,
            activeItem: state.items[4],
            formEducation: {
                ...state.formEducation,
                toggle: false,
            }
        })
    }
}


export const getTaskData = async (state, changeState) => {
    try {
        let { data } = await getTask(state.formPersonal.email)
        changeState({
            ...state,
            formStep: 6,
            activeItem: state.items[5],
            loading: false,
            formTask: {
                ...state.formTask,
                bathing: dropDownObject(data.bathing),
                dressing: dropDownObject(data.dressing),
                personalHygine: dropDownObject(data.personalHygiene),
                eating: dropDownObject(data.eating),
                mealPlanning: dropDownObject(data.mealPlanning),
                houseKeeping: dropDownObject(data.housekeeping),
                mealPreparation: dropDownObject(data.mealPreparation),
                independentLivingSkills: dropDownObject(data.improveIndependentLivingSkills),
                communityIntegration: dropDownObject(data.communityIntegration),
                valuedBehaviours: dropDownObject(data.devSocialValBehaviour),
                naturalSupports: dropDownObject(data.useOfNaturalSupport),
                leisureActivities: dropDownObject(data.participateInLeisureActivities),
                skillDevelopment: dropDownObject(data.ipSkillDevelopment),
                ambAndMobility: dropDownObject(data.ambulationAndMobility),
                medication: dropDownObject(data.administrationOfMedication),
                specializedTheraphies: dropDownObject(data.reinforcingSpecializedTherapies),
                transportation: dropDownObject(data.transportation),
                safetyAdSecurity: dropDownObject(data.supervisingSafetyAndSecurity),
                monitoringHealth: dropDownObject(data.supervisingSafetyAndSecurityNight),
                additionalSkills: dropDownObject(data.monitoringHealth),
                safetyAndSecurity: dropDownObject(data.additionalSkills)
            }
        })
    } catch (error) {
        changeState({
            ...state,
            formStep: 6,
            activeItem: state.items[5],
            loading: false
        })
    }
}

export const getPastJobData = async (state, changeState) => {
    try {
        let { data } = await getPastJob(state.formPersonal.email)
        changeState({
            ...state,
            formStep: 7,
            activeItem: state.items[6],
            loading: false,
            formPastJob: {
                ...state.formPastJob,
                company: "",
                reasonLeft: "",
                from: "",
                supervisor: "",
                to: "",
                phone: "",
                jobTitle: "",
                contact: "",
                list: data,
                workHere: false
            }
        })
    } catch (error) {
        changeState({
            ...state,
            formStep: 7,
            activeItem: state.items[6],
            loading: false
        })
    }
}

export const getReferenceData = async (state, changeState) => {
    try {
        let { data } = await getReference(state.formPersonal.email)
        changeState({
            ...state,
            formStep: 8,
            activeItem: state.items[7],
            loading: false,
            formReference: {
                ...state.formReference,
                referenceName: '',
                relationship: '',
                years: '',
                phone: '',
                list: data._embedded.referenceVOList,
                toggle: false,
                workHere: false
            }
        })
    } catch (error) {
        changeState({
            ...state,
            formStep: 8,
            activeItem: state.items[7],
            loading: false,
            formReference: {
                ...state.formReference,
                toggle: false,
            }
        })
    }
}

export const getConsentData = async (state, changeState) => {
    changeState({
        ...state,
        formStep: 9,
        activeItem: state.items[8],
        loading: false,
    })
}

let dropDownObject = (param) => {
    if (param == null || param == "") { return '' }
    return {
        name: param.toString().replace(/_/g, " "),
        code: param
    }
}

let dropDownBoolean = (param) => {
    if (typeof param !== "boolean") { return '' }
    return {
        name: param == true ? "Yes" : "No",
        code: param
    }
}