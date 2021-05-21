import React, { createContext, useState, useEffect, useRef } from 'react'
import { Toast } from 'primereact/toast';

export const ToastContext = createContext();

export default function PlainLayout({ children }) {

    let toast = useRef()
    const [message, setMessage] = useState({
        content: '',
        severity: '', 
        summary: '', 
        detail: '',
        toggle: false
    });

    useEffect(() => {
        if (message.content !== "") {
            addMessage(message.severity, message.content, message.summary, message.detail)
        }

    }, [message.toggle])
    const addMessage = (severity, content, summary, detail) => {
        console.log({severity, content, summary, detail})

        // toast.current.show({ severity,  summary,content, detail: detail });
        toast.current.show({ severity: severity, summary: summary, detail: detail });

    };
    return (
        <ToastContext.Provider value={[message, setMessage]}>
            <React.Suspense fallback={<i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>}>
                <Toast ref={toast} />

                {children}
            </React.Suspense>
        </ToastContext.Provider>
    )
}
