export const personalSubmit = (values, formikProps, state, changeState)=>{
    changeState({...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const emergencySubmit = (values, formikProps, state, changeState)=>{
    changeState({...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const transportationSubmit = (values, formikProps, state, changeState)=>{
    changeState({...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}


export const taskSubmit = (values, formikProps, state, changeState)=>{
    changeState({...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const pastJobSubmit = (values, formikProps, state, changeState)=>{
    changeState({...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}

export const referenceSubmit = (values, formikProps, state, changeState)=>{
    changeState({...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}
export const consentSubmit = (values, formikProps, state, changeState)=>{
    changeState({...state, formStep: state.formStep + 1, activeItem: state.items[state.formStep] })

}


export const verifyEmail = (values, formikProps, state, changeState)=>{
    if(state.otpStep == 1){
        changeState({
            ...state,
            otpStep: 2
        })
    }else{
        changeState({
            ...state,
            otpStep: 3
        })
    }
}