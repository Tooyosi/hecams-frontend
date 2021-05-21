import { verifyJobEmail } from "service/jobAppliationservice"

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
            let hasEmail = await verifyJobEmail({ emailAddress: state.formPersonal.email })
            console.log({ hasEmail })
            changeState({
                ...state,
                otpStep: 2
            })

        } catch (error) {
            // addMessage("error", `${error?.response?.data?.error || "Failed"}`, `${error?.response?.data?.message || "An Error occured"}`,`${error?.response?.data?.message || "An Error occured"}`)
            // console.log({ error, formikProps })

            changeState({
                ...state,
                otpStep: 3
            })
        }

        formikProps.setSubmitting(false)
    } else {
        changeState({
            ...state,
            otpStep: 3
        })
    }
}