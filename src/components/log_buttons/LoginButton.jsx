import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './LoginButton.css'

function LoginButton() {
    const {loginWithRedirect } = useAuth0()

    return (
        <button className="loginbutton" onClick = {()=>loginWithRedirect()}>
            log in
        </button>
    )
}

export default LoginButton
