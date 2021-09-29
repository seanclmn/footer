import React,{useState,useEffect} from 'react'
import './Upcoming_matches.css'

function Upcoming_matches(props) {
    const number = props.number
    const [competition,setCompetition]=useState([])
    const [teams,setTeams]=useState([])

    const profile=[]


    function fetch_matches(){

        const url =`https://api.football-data.org/v2/teams/${props.id}/matches?status=SCHEDULED`

        fetch(url,{
            headers: {'X-AUTH-TOKEN': '161a865ec39e410b8a2318a7bf71e260'}
        })
            .then((res)=>res.json())
            .then(res=>{
                // console.log(res)
                setCompetition(res.matches.slice(0,number+1).map(game=> game.competition.name))

                setTeams(res.matches.slice(0,number+1).map(game=> `${game.homeTeam.name} vs ${game.awayTeam.name}`))
            })


    }

    useEffect(()=>{
        fetch_matches()
    },[])

    for(let i=1;i<number+1;i++){
        profile.push([teams[i],competition[i]])
    }
    console.log(profile)
    return (

        <div>
            {profile.map(element=><button className="upcoming_match"><p>{element[0]} ({element[1]}) <br/></p></button>)}        

        </div>
        
    )
}

export default Upcoming_matches
