import React from 'react'

export default function Loader() {
    return (
        <div>
            {/* <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i> */}
            <div className="splash-loader-container">
                <svg className="splash-loader" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="splash-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        </div>
    )
}
