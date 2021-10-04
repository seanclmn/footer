import React from 'react'
import './AboutClub.css'


import AddTeam from '../../CRUD/add_teams/AddTeam'

function AboutClub(props) {
    const founded = props.teamJson.founded
    const name = props.teamJson.name
    // const country = props.teamJson.area.name
    const venue = props.teamJson.venue
    const website = props.teamJson.website
    const crestUrl = props.teamJson.crestUrl

    return (
        <div className="about_container">
            <h2 style={{lineHeight: "0px"},{ textAlign: 'center'}}>{name}</h2>
            <img className ="crest_url" src={crestUrl} style={{height: '150px'}}/>
            <p>Founded: {founded}</p>
            <p>Stadium: {venue}</p>
            <a href={website} id="website" >
                <p>Website: <span id="website_text">{website}</span></p>
            </a>
            <AddTeam id={props.teamJson.id} teamName={name} index={props.index}/>
        </div>
    )
}

export default AboutClub
