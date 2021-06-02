import * as Yup from "yup"

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const onChange = (e, state, changeState, formName) => {
    const input = e.target;
    const form = formName ? { name: formName } : input.form
    const value = input.type === 'checkbox' ? input.checked : input.value;
    if (input.files && input.files[0]) {
        changeState({
            ...state,
            [form.name]: {
                ...state[form.name],
                [input.name]: input.files[0]
            },
        });
    }
    else {
        changeState({
            ...state,
            [form.name]: {
                ...state[form.name],
                [input.name]: value,
            }
        });
    }
}

export const onDropdownChange = (e, state, changeState, formName) => {
    const input = e.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    changeState({
        ...state,
        [formName]: {
            ...state[formName],
            [input.name]: value,
            // [input.name]: value.code,

        }
    });
}

export const handleSelectedDocument = function (event, state, changeState) {
    const input = event.target;
    const form = input.form;


    let targetFileUpdate = {};

    if (event.target.files[0]) {

        targetFileUpdate[input.name] = {
            selectedFile: event.target.files[0],
        };
    }
    changeState({
        [form.name]: {
            ...state[form.name],
            ...targetFileUpdate,
        },
    });

};

export const FILE_SIZE = 160 * 1024;
export const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];

export const DATE_FORMAT = "MM/dd/yy"
export const PDF_OR_WORD = "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"

export function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] == null || obj[key] == "")
            return true;
    }
    return false;
}



// converts file to base64 display image
export const toBase64Display = function (file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


export function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


export const inputValidate = (error, name, value) => {
    return {
        name: "fileFormat",
        message: value || "Invalid Character",
        test: value => value && !value.match(/[&\/\\#,+()~%.'":*?<>{}!|]/g)
    }
}


export const RequiredWithCharacterValidation = Yup.string().required("Required").test("fileFormat",
    "Invalid Character",
    value => value && !value.match(/[&\/\\#,+()~%'":*?<>{}!|]/g)
)


export const EmailValidation = Yup.string().required("Required").email("Enter a valid email address").test("fileFormat",
    "Invalid Character",
    value => value && !value.match(/[&\/\\#,+()~%'":*?<>{}!|]/g)
)


export const NumberLengthValidation = length => Yup.string()
    .required("Required")
    .matches(/[0-9]/g, "Must be a number")
    .length(length, `Must be ${length} digits long`)


export const COMPANY_NAME = "Ability Options"

export const checkNull = (param)=>{
    return param? param : ''
}