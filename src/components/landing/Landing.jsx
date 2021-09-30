import React from 'react'
import './Landing.css'
import { useAuth0 } from '@auth0/auth0-react'


function Landing() {
    const {loginWithRedirect } = useAuth0()

    return (
        <div className="landing_body">
            <div className="welcome_text">
                <h1>FOOTER</h1>
            </div>

            <div className="center">
                <div id="tagline">
                    <h2>Follow the top clubs and players in the world.</h2>
                </div>
                
                <button className="get_started_button"  onClick = {()=>loginWithRedirect()}>
                    Get Started
                </button>


            </div>
            
        </div>
    )
}

export default Landing
