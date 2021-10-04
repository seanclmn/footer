import React,{useState, useEffect} from 'react'
import { Link} from 'react-dom'
import { BrowserRouter as Router,Route,withRouter } from 'react-router-dom'
import './Standings.css'

import Matches from '../matches/Matches'
import Team_details from '../team_details/Team_details'
import Upcoming_matches from '../upcoming_matches/Upcoming_matches'
import AddTeam from '../CRUD/add_teams/AddTeam'
function Standings(props) {
    const json = props.json
    const rows = []
    const [url,setUrl]=useState('')
    const [teams,setTeams]=useState([])
    const [match,setMatch]=useState([{}])
    const [wins,setWins]=useState([])
    const [draws,setDraws]=useState([])
    const [losses,setLosses]=useState([])
    const [points,setPoints]=useState([])
    const [gf,setGf]=useState([])
    const [ga,setGa]=useState([])
    const [gd,setGd]=useState([])
    const [teamIds,setTeamIds]=useState([])
    const [index,setIndex]=useState(0)    
    function fetch_standings(){

        const url =`https://api.football-data.org/v2/competitions/${props.match.params.league}/standings`

        fetch(url,{
            headers: {'X-AUTH-TOKEN': '161a865ec39e410b8a2318a7bf71e260'}
        })
            .then((res)=>res.json())
            .then(res=>{
                // console.log(res.standings[0].table)
                setTeams(res.standings[0].table.map(dict=>dict.team.name))
                setPoints(res.standings[0].table.map(dict=>dict.points))
                setWins(res.standings[0].table.map(dict=>dict.won))
                setDraws(res.standings[0].table.map(dict=>dict.draw))
                setLosses(res.standings[0].table.map(dict=>dict.lost))
                setGf(res.standings[0].table.map(dict=>dict.goalsFor))
                setGa(res.standings[0].table.map(dict=>dict.goalsAgainst))
                setGd(res.standings[0].table.map(dict=>dict.goalDifference))
                setTeamIds(res.standings[0].table.map(dict=>dict.team.id))
                
            })
    }



    useEffect(()=>{
        fetch_standings()
    },[])
    
    for(let i=0; i<teams.length; i++){
        rows.push([teams[i],points[i],wins[i],draws[i],losses[i],gf[i],ga[i],gd[i]])
    }

    return (
        
        <div className="standings_container">
            <div className="standings">            
                {teams.length !==0 ?

                <table>
                    <tr><th>Teams</th><th>Pts</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th></tr>
                    {rows.map(row=>

                    <tr className="team_row" onClick={()=>setIndex(rows.indexOf(row))}>
                        <td className="team_name">{rows.indexOf(row)+1}. {row[0]} </td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td>{row[4]}</td> 
                        <td>{row[5]}</td> 
                        <td>{row[6]}</td> 
                        <td>{row[7]}</td> 
                    </tr>)}
                </table>
                : <p>Loading...</p>}
            </div>

            <div className="team_details_container">

                {teamIds.length !==0 && <Team_details key={index} teamId={teamIds[index]}/>}   
                <AddTeam json={json} teamName={teams[index]} id={teamIds[index]} index={props.index}/>
            </div>

            
            
        </div>

        
        
    )
    
}

export default withRouter(Standings)
