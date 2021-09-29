import React from 'react'
import {Link} from 'react-router-dom'

import './Sidebar.css'

function Sidebar() {
    return (
        <div >
            <nav className="sidebar">
                <Link to="/leagues">
                    <button className="sidebar_link">
                        <p>Leagues</p>
                    </button>
                </Link >
                <Link to="/matches">
                    <button className="sidebar_link">
                        <p>Matches</p>
                    </button>
                </Link >
                <Link>
                    <button className="sidebar_link">
                        <p>Teams</p>
                    </button>
                </Link>
                <Link >
                    <button className="sidebar_link">
                        <p>My Players</p>
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar
