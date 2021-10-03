import React, {useState,useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import axios from 'axios'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Leagues from './components/leagues/Leagues'
import Standings from './components/standings/Standings'
import Matches from './components/matches/Matches'
import MyTeams from './components/my_teams/MyTeams'
import MyPlayers from './components/my_players/MyPlayers'
import TeamProfile from './components/team_profile/TeamProfile'
import MyProfile from './components/my_profile/MyProfile'

import './App.css'



function App() {
  const [userProfile,setUserProfile]=useState({})
  const [json,setJson]=useState([{}])
  const [userInfo,setUserInfo]=useState({})
    

  useEffect(()=>{

    axios
      .get('http://footerserver.herokuapp.com/api/users')
      .then(res=>{
        setJson(res.data)
        console.log(json)
      })

    },[])
  return (
    <Router>
      <div>
        <div className="side_and_main">
          <Sidebar/>

          <div className="main_container">
            <Switch>
              <Route exact path = "/leagues" component={Leagues}/>
              <Route exact path = "/leagues/:league" render = {(routerProps)=><Standings match={routerProps.match}/>}/>
              <Route exact path = "/matches" component={Matches}/>

              <Route exact path = "/myteams" render={()=> <MyTeams/>}/>
              <Route exact path= "/myplayers" component={MyPlayers}/>

              <Route exact path= "/myprofile" component={MyProfile}/>
            </Switch>
          </div>

        </div>
      </div>


    </Router>

  );
}

export default App;