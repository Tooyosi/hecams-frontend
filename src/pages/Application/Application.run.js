import { verifyJobEmail, refreshOtp, validateOtp, getPersonal, addPersonal, getEmergency, addEmergency, addTransport, getAvailability, addAvailability, getTransport } from "service/jobAppliationservice"
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
        formData.append("challenging", state.formPersonal.challenging)
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

        // getAvailabilityData(state, changeState)
    } catch (error) {

        catchError(error, addMessage)
    } finally {
        formikProps.setSubmitting(false)
    }

}

export const taskSubmit = (values, formikProps, state, changeState) => {
    changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const pastJobSubmit = (values, formikProps, state, changeState) => {
    changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const referenceSubmit = (values, formikProps, state, changeState) => {
    changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

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
                challenging: checkNull(data.challenging),
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

let dropDownObject = (param) => {
    if (param == null || param == "") {return ''}
    return {
        name: param.toString().replace(/_/g, " "),
        code: param
    }
}

let dropDownBoolean = (param) => {
    if (typeof param !== "boolean") {return ''}
    return {
        name: param == true? "Yes" : "No",
        code: param
    }
}