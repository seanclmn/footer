import React,{useState,useEffect} from 'react'
import './Team_details.css'

import Upcoming_matches from '../upcoming_matches/Upcoming_matches'
function Team_details(props) {

    const teamId = props.teamId



    const [url,setUrl]=useState('')
    const [matches,setMatches]=useState([{}])
    const [match,setMatch]=useState([{}])
    const [name, setName]=useState('')
    const [stadium, setStadium]=useState('')
    const [crestUrl, setCrestUrl]=useState('')
    const [competitions,setCompetitions]=useState([])

    
    function fetch_details(){

        const url ='https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED'
        const url2 = `https://api.football-data.org/v2/teams/${teamId}`

        fetch(url2,{
            headers: {'X-AUTH-TOKEN': '161a865ec39e410b8a2318a7bf71e260'}
        })
            .then((res)=>res.json())
            .then(res=>{
                setName(res.name)
                setStadium(res.venue)
                setCrestUrl(res.crestUrl)
                setCompetitions(res.activeCompetitions.map(comp=>comp.name))
            })


    }

    useEffect(()=>{

        fetch_details()

    },[])

    return (
        <div className="team_details">
            <div className="team_detail_header">
                <img id="details_crest" src={crestUrl}/>
                <h4 >{name}</h4>   
                <h4>Stadium: {stadium}</h4>
            </div>


            <div className="active_competitions">
                <div style={{textAlign: 'center'}}>
                    <h4> Active competitions: </h4>

                </div>
                <div className="active_competitions_list">
                    {competitions.map(competition=><p>{competition} </p>)}

                </div>

            </div>

            

            <div className="upcoming_matches">
                <h4>Upcoming matches:</h4>
                <br/>
                <div className='upcoming_matches_component'>
                    <Upcoming_matches id={teamId} number={3}/>
                </div>
                <br/>
                

            </div>
        </div>
    )
}

export default Team_details
