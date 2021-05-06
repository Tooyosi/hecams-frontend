import React from 'react'

export default function FormLayout({ children }) {
    return (
        <div className="card">
            <div className="card-body p-px-3 p-pt-3">
                {children}
            </div>
        </div>
    )
}
