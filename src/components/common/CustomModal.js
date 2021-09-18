import React from 'react'
import { Dialog } from 'primereact/dialog';

export default function CustomModal(props) {
    return (
        <Dialog
            header={props.header}
            visible={props.visible}
            modal
            className="p-md-6 p-sm-12"
            style={props.style}
            footer={props.footer}
            onHide={props.toggle}
            {...props}>
            {props.children}
        </Dialog>

    )
}
