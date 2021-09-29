import React, {useState} from 'react'
import {Route} from 'react-router-dom'

import Home from './components/home/Home'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Leagues from './components/leagues/Leagues'
import Standings from './components/standings/Standings'
import Matches from './components/matches/Matches'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="side_and_main">
        <Sidebar/>

        <div className="main_container">
          <Route exact path = "/leagues" component={Leagues}/>
          <Route exact path = "/leagues/:league" render = {(routerProps)=><Standings match={routerProps.match}/>}/>
          <Route exact path = "/matches" component={Matches}/>
        </div>

      </div>
    </div>
  );
}

export default App;
