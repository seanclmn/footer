import React from 'react'
import './Header.css'
import LoginButton from '../log_buttons/LoginButton'
import LogoutButton from '../log_buttons/LogoutButton'

function Header() {
    return (
        <div className="header_container">
            <h2>Footer</h2>
            <LoginButton/>
            <LogoutButton/>
        </div>
    )
}

export default Header
