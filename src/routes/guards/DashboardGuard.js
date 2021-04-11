import React, { useEffect } from 'react'
import { logout } from 'service/authService'

export default function DashboardGuard(props) {

    if (localStorage.getItem("loggedIn") !== "true") {
        logout()
        return <></>
    }
    return props.children
}
