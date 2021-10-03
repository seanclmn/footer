import React,{useState, useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import './Leagues.css'
import Standings from '../standings/Standings'

function Leagues() {
    const[league,setLeague]=useState(2021)
    window.scrollTo(0, 0)

    return (
        <div className="league_container">

                
            <Link to='/leagues/SA' className="league_link">
                <button className="league_div">
                    <p>Seria A</p>
                </button>
            </Link> 
            
                

            <Link to='/leagues/PL' className="league_link">
                <button className="league_div">
                    <p>Premier League</p>                
                </button>
            </Link>
            <Link to='/leagues/2016' className="league_link">
                <button className="league_div">
                    <p>EFL Championship</p>
                </button>
                
            </Link>


            <Link to='/leagues/2017' className="league_link">

                <button className="league_div">
                    <p>Primeira Liga</p>
                </button>

                    
            </Link>    

            <Link to='/leagues/FL1' className="league_link">
                <button className="league_div">
                    <p>Ligue 1</p>
                </button>

                    
            </Link>   



            <Link to='/leagues/PD' className="league_link">
                <button className="league_div">
                    <p>La Liga</p>
                </button>

                    
            </Link>
            <Link to='/leagues/2013' className="league_link">
                <button className="league_div">
                    <p>Camp. Brasileiro A</p>
                </button>

                    
            </Link>    

            <Link to='/leagues/BL1' className="league_link">
                <button className="league_div">
                    <p>1. Bundesliga</p>
                </button>
      
            </Link>



            <Link to='/leagues/DED' className="league_link">
                <button className="league_div">
                    <p>Eredivisie</p>
                </button>
     
                    
            </Link>
            

    
        </div>
        
    )
}

export default Leagues
