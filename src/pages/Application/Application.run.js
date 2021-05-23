import { verifyJobEmail, refreshOtp, validateOtp } from "service/jobAppliationservice"


const catchError = (error, addMessage) => {
    addMessage("error", `${error ?.response ?.data ?.error || "Failed"}`, `${error ?.response ?.data ?.message || "An Error occured"}`, `${error ?.response ?.data ?.debugMessage || "An Error occured"}`)

}

export const personalSubmit = (values, formikProps, state, changeState) => {
    changeState({ ...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

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
                otpStep:  2
            })

        } catch (error) {
            catchError(error, addMessage)
        }

        formikProps.setSubmitting(false)
    } else {
        // changeState({
        //     ...state,
        //     otpStep: 3
        // })
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
