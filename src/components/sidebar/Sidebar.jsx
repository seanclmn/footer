import React from 'react'
import {Link} from 'react-router-dom'

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">

            <ul>
                <Link to="/leagues">
                    <li>Leagues</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default Sidebar
