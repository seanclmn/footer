import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './LogoutButton.css'

function LogoutButton() {
    const { logout } = useAuth0()
    return (
        <a className = "logoutbutton" onClick={()=>logout({ returnTo: 'http:/localhost:3000/leagues'})}>
            <h4>Log out</h4>
        </a>
    )
}

export default LogoutButton
