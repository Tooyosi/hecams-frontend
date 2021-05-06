import React from 'react'

export default function PlainLayout({ children }) {
    return (
        <React.Suspense fallback={<i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>}>

            {children}
        </React.Suspense>
    )
}
