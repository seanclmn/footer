import React from 'react'
import './Squad.css'

function Squad(props) {

    const squad = props.squad

    return (
        <div className="squad_container">
            <h1 style={{lineHeight: "10px"}}>Squad</h1>

            <div className="squad">
            

                {squad.map(player=><div className="squad_panel" >{player.name} ({player.position})</div>)}
            </div>


        </div>

    )
}

export default Squad
