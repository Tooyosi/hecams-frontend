import React from 'react'
import { Dropdown } from 'primereact/dropdown';

export default function FormFilter({...props}) {
    return (
        <form name={props.formName}>
            <Dropdown
                id="hours"
                name="hours"
                value={values.hours}
                onChange={(e) => {
                    // handleChange(e)
                    // handleDropdownChange(e, formName)
                }}
                // options={yesOrNoOptions}
                // className={`width-100  ${errors.hours && touched.hours ? 'p-invalid' : ''}`}
                optionLabel="name"
            ></Dropdown>
        </form>
    )
}
