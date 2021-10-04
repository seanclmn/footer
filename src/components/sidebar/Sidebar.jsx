import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import Header from '../header/Header'
import LogoutButton from '../log_buttons/LogoutButton'
import Leagues from '../leagues/Leagues'
import './Sidebar.css'
import LoginButton from '../log_buttons/LoginButton'

function Sidebar() {

    const [display,setDisplay]=useState('none')

    function Display(){
        if(display==='none'){
            setDisplay('block')
        }else{
            setDisplay('none')
        }
    }
    return (
        <div >
            
            <nav className="sidebar">
                    
                <Header/>

                <div className="sidebar_panel">
                    <p className="dividers">Me</p>
                </div>

                <div className="sidebar_panel">
                    <img className="sidebar_icon" src={process.env.PUBLIC_URL+'/icons/user.png'}/>
                    <Link to="/myprofile" >
                        <button className="sidebar_link">
                            <p >My Profile</p>
                        </button>
                    </Link>
                </div>

    
                {/* <div className="sidebar_panel">
                    <img className="sidebar_icon" src={process.env.PUBLIC_URL+'/icons/football-player.png'}/>
                    <Link to="/myplayers">
                        <button className="sidebar_link">
                            <p >My Players</p>
                        </button>
                    </Link>
                </div> */}

                    
                <div className="sidebar_panel">
                    <img className="sidebar_icon" src={process.env.PUBLIC_URL+'/icons/lineup.png'}/>    

                    <Link to="/myteams">
                        <button className="sidebar_link">
                            <p>My Teams</p>
                        </button>
                    </Link>
                </div>


                <div className="sidebar_panel">
                    <img className="sidebar_icon" src={process.env.PUBLIC_URL+'/icons/key.png'}/>
                    <LogoutButton/>
                </div>

                <div className="sidebar_panel">
                    <p className="dividers">Explore</p>
                </div>


                <div className="sidebar_panel">
                    <img className="sidebar_icon" src={process.env.PUBLIC_URL+'/icons/trophy.png'}/>
                        <button className="sidebar_link" onClick={Display}>
                            
                            <p>Leagues</p>
                        </button>
                </div>
                

                <div className="league_container" style={{display: display}}>
                    <Leagues/>
                </div>
                
                <div className="sidebar_panel">
                    <img className="sidebar_icon" src={process.env.PUBLIC_URL+'/icons/tv.png'}/>
                    <Link to="/matches">
                        <button className="sidebar_link">
                            <p>Match Highlights</p>
                        </button>
                    </Link >
                </div>


        
            </nav>
        </div>
    )
}

export default Sidebar
