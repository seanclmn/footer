import React from 'react'
import './Header.css'
import LoginButton from '../log_buttons/LoginButton'
import LogoutButton from '../log_buttons/LogoutButton'

function Header() {
    return (
        <div className="header_container">
            <img id="soccer_shoe" src={process.env.PUBLIC_URL+'/icons/soccer-shoe.png'}/>
                <h2>Footer</h2>
            
        </div>
    )
}

export default Header
