import { verifyJobEmail, refreshOtp, validateOtp, getPersonal, addPersonal, getEmergency } from "service/jobAppliationservice"
import { checkNull } from "utilities"


const catchError = (error, addMessage) => {
    addMessage("error", `${error ?.response ?.data ?.error || "Failed"}`, `${error ?.response ?.data ?.message || "An Error occured"}`, `${error ?.response ?.data ?.debugMessage || "An Error occured"}`)

}

export const personalSubmit = async (values, formikProps, state, changeState, addMessage) => {
    try {
        let formData = new FormData()
        formData.append("firstname", state.formPersonal.firstname)
        formData.append("middlename", state.formPersonal.middlename)
        formData.append("lastname", state.formPersonal.lastname)
        formData.append("phone", state.formPersonal.phone)
        formData.append("workPhone", state.formPersonal.workPhone)
        formData.append("email", state.formPersonal.email)
        formData.append("gender", state.formPersonal.gender.code)
        formData.append("howHear", state.formPersonal.howHear)
        formData.append("workingWithDisabilities", state.formPersonal.workingWithDisabilities)
        formData.append("challenging", state.formPersonal.challenging)
        formData.append("address1", state.formPersonal.address1)
        formData.append("address2", state.formPersonal.address2)
        formData.append("city", state.formPersonal.city)
        formData.append("state", state.formPersonal.state)
        formData.append("zip", state.formPersonal.zip)
        formData.append("position", state.formPersonal.position)
        formData.append("ssn", state.formPersonal.ssn)
        formData.append("howLongAtAddress", state.formPersonal.howLongAtAddress)
        formData.append("capability", state.formPersonal.capability.code)
        formData.append("convicted", state.formPersonal.convicted.code)
       
        let {data} = await addPersonal(state.formPersonal.email,formData)

        getEmergencyData(state, changeState)

    } catch (error) {
        catchError(error, addMessage)   
        // formikProps.setValues(values)     
    } finally{
        formikProps.setSubmitting(false)        
    }
    // changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const emergencySubmit = (values, formikProps, state, changeState) => {
    changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const transportationSubmit = (values, formikProps, state, changeState) => {
    changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

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
            activeItem: state.items[0] ,
            otpStep: 3,
            formPersonal: {
                ...state.formPersonal,
                firstname: checkNull(data.firstname),
                middlename: checkNull(data.middlename),
                lastname: checkNull(data.lastname),
                phone: checkNull(data.phone),
                workPhone: checkNull(data.workPhone),
                // email: checkNull(data.email),
                gender: dropDownObject(data.gender),
                howHear: checkNull(data.howHear),
                workingWithDisabilities: checkNull(data.workingWithDisabilities),
                challenging: checkNull(data.challenging),
                address1: checkNull(data.address1),
                address2: checkNull(data.address2),
                city: checkNull(data.city),
                state: checkNull(data.city),
                zip: checkNull(data.zip),
                position: checkNull(data.position),
                ssn: checkNull(data.ssn),
                cSsn: checkNull(data.ssn),
                howLongAtAddress: checkNull(data.howLongAtAddress),
                capability: dropDownObject(data.capability),
                convicted:  dropDownObject(data.convicted),
                upload: '',
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


export const getEmergencyData = async (state, changeState)=>{
    try {
        let {data} = await getEmergency(state.formPersonal.email)        
        changeState({
            ...state,
            formStep: 2, 
            activeItem: state.items[1] ,
            loading: false,
            formEmergency: {
                fullName: checkNull(data.fullName),
                address: checkNull(data.address),
                phone: checkNull(data.phone),
                city: checkNull(data.city),
                alternativePhone: checkNull(data.alternativePhone),
                relationship: checkNull(data.relationship),
                zip: checkNull(data.zip),
                state: checkNull(data.state)
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

let dropDownObject = (param)=>{
    if(!param || param == "") return ''
    return  {
        name: param.replace(/_/g, " "),
        code: param
    }
}