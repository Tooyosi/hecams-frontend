export const onChange = (e, state, changeState, formName) => {
    const input = e.target;
    const form = input.form || {name: formName};
    const value = input.type === 'checkbox' ? input.checked : input.value;
    if (input.files && input.files[0]) {
        changeState({
            ...state,
            [form.name]: {
                ...state[form.name],
                [input.name] : input.files[0]
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
            [input.name]: value.code,
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

export function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] == null || obj[key] == "")
            return true;
    }
    return false;
}
