import React,{useState,useEffect} from 'react'
import { Link, Route,BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import './MyTeams.css'

import TeamProfile from '../team_profile/TeamProfile'

function MyTeams(props) {
    window.scrollTo(0, 0)

    const[json,setJson]=useState([{}])
    const[teams,setTeams]=useState([])
    const[index,setIndex]=useState(0)
    useEffect(()=>{
        fetch('http://footerserver.herokuapp.com/api/users')
          .then((res)=>res.json())

          .then(res=>{
            setJson(res[0])
            setTeams(res[0].teams)
          })
    },[])
    console.log(teams[index])

    return (
      <Router>
        <div className="my_teams_container">
            <div className="teams_panel">
              {teams.map(team=><div className="team_panel" onClick={()=>setIndex(teams.indexOf(team))}><div >{team[1]}</div></div>)}
            </div>
            <div className="team_profile_container">
              {teams.length!==0 &&
              <Route exact path='/myteams' render={()=><TeamProfile key={index} id={teams[index][0]}/>}/> }
            </div>
        </div>
      </Router>
    )
}

export default MyTeams
