import React, {useState,useEffect,context} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Route,BrowserRouter as Router,Switch,withRouter} from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Leagues from './components/leagues/Leagues'
import Standings from './components/standings/Standings'
import Matches from './components/matches/Matches'
import MyTeams from './components/my_teams/MyTeams'
import MyPlayers from './components/my_players/MyPlayers'
import TeamProfile from './components/team_profile/TeamProfile'
import MyProfile from './components/my_profile/MyProfile'


import {createBrowserHistory} from 'history'

export const customHistory = createBrowserHistory()




function Home(props) {
  const [json,setJson]=useState([{}])
  const [index,setIndex]=useState(0)

  useEffect(()=>{
      axios
        .get('http://footerserver.herokuapp.com/api/users')
        .then(res=>{
          if((res.data.filter(object=>object.email===props.user_object.email)).length===0){
            console.log((res.data.filter(object=>object.email===props.user_object.email)).length)
            setIndex(res.data.length)
            add_user_to_database()
            
      
          }else{
            setIndex(res.data.indexOf((res.data.filter(object=>object.email===props.user_object.email))[0]))
            console.log(res.data.indexOf((res.data.filter(object=>object.email===props.user_object.email))[0]))
          }
      })
  

    },[])


  function add_user_to_database(){
    const data = {
      email: props.user_object.email,
      players: [],
      teams: []
    }

    axios
      .post('http://footerserver.herokuapp.com/api/users',data)

  }

  console.log(index)

  return (
    <div>
      <div className="side_and_main">
        <Sidebar/>

        <div className="main_container">
          <Switch>
            <MyProfile index={index}/>
            <Route exact path = "/leagues" component={Leagues}/>
            <Route exact path = "/leagues/:league" render = {(routerProps)=><Standings index={index} key={window.location.pathname} match={routerProps.match}/>}/>
            <Route exact path = "/matches" component={Matches}/>

            <Route exact path = "/myteams" render={()=> <MyTeams index={index}/>}/>
            <Route exact path= "/myplayers" component={MyPlayers}/>

            <Route exact path= "/myprofile" render={()=> <MyProfile index={index}/>}/>
          </Switch>
        </div>

      </div>
    </div>
  );
}

export default Home;