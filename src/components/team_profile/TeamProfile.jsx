import React, {useState, useEffect } from 'react'
import './TeamProfile.css'

import AboutClub from './club/AboutClub'
import Squad from './squad/Squad'
import Upcoming_matches from '../upcoming_matches/Upcoming_matches'

function TeamProfile(props) {
    const id = props.id
    const [teamJson,setTeamJson]=useState({})
    const [teamName,setTeamName]=useState('')
    const [squad,setSquad]=useState([{}])

    function fetch_profile(){
        const url = `https://api.football-data.org/v2/teams/${id}`

        fetch(url,{
            headers: {'X-AUTH-TOKEN': `${process.env.REACT_APP_FOOTBALL_DATA_TOKEN}`}
        })
            .then((res)=>res.json())
            .then(res=>{
                console.log(res)
                setTeamJson(res)
                setTeamName(res.name)
                setSquad(res.squad)
            })


    }

    useEffect(()=>{
        fetch_profile()
    },[])


    return (
        <div className="profile_container">
            <div className="upcoming_matches_container" >
                <AboutClub teamJson = {teamJson} index={props.index}/>
                <Upcoming_matches id={id} number = {6} />
            </div>

            <Squad squad={squad}/>


        </div>
    )
}

export default TeamProfile
