import React,{useState,useEffect} from 'react'
import './Upcoming_matches.css'

function Upcoming_matches(props) {
    const number = props.number
    const [competition,setCompetition]=useState([])
    const [teams,setTeams]=useState([])
    const [dates,setDates]=useState([])
    const profile=[]


    function fetch_matches(){

        const url =`https://api.football-data.org/v2/teams/${props.id}/matches?status=SCHEDULED`

        fetch(url,{
            headers: {'X-AUTH-TOKEN': `${process.env.REACT_APP_FOOTBALL_DATA_TOKEN}`}
        })
            .then((res)=>res.json())
            .then(res=>{
                console.log(res.matches)
                setCompetition(res.matches.slice(0,number+1).map(game=> game.competition.name))
                setDates(res.matches.slice(0,number).map(game=> (new Date(game.utcDate)).toLocaleString()))
                setTeams(res.matches.slice(0,number).map(game=> `${game.homeTeam.name} vs ${game.awayTeam.name}`))
            })
    }

    useEffect(()=>{
        fetch_matches()
    },[])

    for(let i=0;i<number;i++){
        profile.push([teams[i],competition[i],dates[i]])
    }

    return (

        <div>
            {profile.map(element=><button className="upcoming_match"><p>{element[2]}</p> <p >{element[0]} ({element[1]}) <br/></p></button>)}        

        </div>
        
    )
}

export default Upcoming_matches
