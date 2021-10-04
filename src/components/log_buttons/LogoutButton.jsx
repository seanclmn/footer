import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './LogoutButton.css'

function LogoutButton() {
    const { logout } = useAuth0()
    return (
        <button className = "logoutbutton" onClick={()=>logout({ returnTo: 'http:/localhost:3000/leagues'})}>
            <p>Log out</p>
        </button>
    )
}

export default LogoutButton
