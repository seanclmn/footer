import React,{useState, useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import './Leagues.css'
import Standings from '../standings/Standings'

function Leagues() {
    const[league,setLeague]=useState(2021)
    return (
        <div className="league_container">

                
            <Link to='/leagues/SA' className="league_link">
                <button className="league_div">
                    <p>Seria A (Italy)</p>
                </button>
            </Link> 
            
                

            <Link to='/leagues/PL' className="league_link">
                <button className="league_div">
                    <p>Premier League (England)</p>                
                </button>
            </Link>
            <Link to='/leagues/2016' className="league_link">
                <button className="league_div">
                    <p>EFL Championship (England)</p>
                </button>
                
            </Link>


            <Link to='/leagues/2017' className="league_link">

                <button className="league_div">
                    <p>Primeira Liga (Portugal)</p>
                </button>

                    
            </Link>    

            <Link to='/leagues/FL1' className="league_link">
                <button className="league_div">
                    <p>Ligue 1 (France)</p>
                </button>

                    
            </Link>   



            <Link to='/leagues/PD' className="league_link">
                <button className="league_div">
                    <p>La Liga (Spain)</p>
                </button>

                    
            </Link>
            <Link to='/leagues/2013' className="league_link">
                <button className="league_div">
                    <p>Campeonato Brasileiro A (Brazil)</p>
                </button>

                    
            </Link>    

            <Link to='/leagues/BL1' className="league_link">
                <button className="league_div">
                    <p>1. Bundesliga (Germany)</p>
                </button>
      
            </Link>



            <Link to='/leagues/DED' className="league_link">
                <button className="league_div">
                    <p>Eredivisie (Netherlands)</p>
                </button>
     
                    
            </Link>
            

    
        </div>
        
    )
}

export default Leagues
