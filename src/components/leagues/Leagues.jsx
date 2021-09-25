import React,{useState, useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import './Leagues.css'
import Standings from '../standings/Standings'

function Leagues() {
    const[league,setLeague]=useState(2021)
    return (
        <div>
            <div className="leagues">
                <Link to='/leagues/2001'>
                    <p>test</p>
                </Link> 
                <Link to='/leagues/SA' className="link">
                    <p>Seria A (Italy)</p>
                </Link> 


                <Link to='/leagues/PL' className="link">
                    <p>Premier League (England)</p>
                </Link>
                <Link to='/leagues/2016' className="link">
                    <p>EFL Championship (England)</p>
                </Link>
                {/* <Link to='/leagues/EL2'>
                    <p>League One (England)</p>
                </Link> */}

                <Link to='/leagues/2017' className="link">
                    <p>Primeira Liga (Portugal)</p>
                </Link>    

                <Link to='/leagues/FL1' className="link">
                    <p>Ligue 1 (France)</p>
                </Link>   
                {/* <Link to='/leagues/FL2'>
                    <p>Ligue 2 (France)</p>
                </Link> */}


                <Link to='/leagues/PD' className="link">
                    <p>La Liga (Spain)</p>
                </Link>
                <Link to='/leagues/2013' className="link">
                    <p>Campeonato Brasileiro A (Brazil)</p>
                </Link>    

                <Link to='/leagues/BL1' className="link">
                    <p>1. Bundesliga (Germany)</p>
                </Link>



                <Link to='/leagues/DED' className="link">
                    <p>Eredivisie (Netherlands)</p>
                </Link>
            
            
            
            

            </div>
    
        </div>
        
    )
}

export default Leagues
