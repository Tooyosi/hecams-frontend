import React from 'react'
import { Button } from 'primereact/button';

export default function FormFooter(props) {
    return (
        <div className="p-grid">
            <div className="p-col-12 p-lg-6 p-md-6 p-sm-6 p-justify-start">
                {props.backText &&
                    <Button type="button" role="button" disabled={props.disabled} onClick={props.goBack} label={props.backText} className="button-white" icon="pi pi-arrow-left" iconPos="left" ></Button>
                }
            </div>
            <div className="p-col-12 p-lg-6 p-md-6 p-sm-6 p-justify-start p-justify-mdap-end p-text-right">
                <Button type="button" role="button" disabled={props.disabled || props.disabledSubmit} onClick={props.proceed} label={props.nextText} className="button-white" icon="pi pi-arrow-right" iconPos="right" ></Button>
            </div>
        </div>
    )

}
