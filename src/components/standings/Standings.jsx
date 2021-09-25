import React,{useState, useEffect} from 'react'


function Standings(props) {


    const [url,setUrl]=useState('')
    const [standings,setStandings]=useState([])
    const [match,setMatch]=useState([{}])
    
    function fetch_standings(){

        const url =`https://api.football-data.org/v2/competitions/${props.match.params.league}/standings`
        // const url =`https://api.football-data.org/v2/competitions/2021/standings`

        fetch(url,{
            headers: {'X-AUTH-TOKEN': '161a865ec39e410b8a2318a7bf71e260'}
        })
            .then((res)=>res.json())
            .then(res=>{
                console.log(res.standings[0].table)
                setStandings(res.standings[0].table.map(dict=>dict.team.name))
            })


    }

    useEffect(()=>{

        fetch_standings()
    },[])

    // console.log(standings[0].team.name)

    return (
        
        
        <div className="leagues_container">
            <p>Standings</p>

            {standings.length !==0 ?
            <ol>
                {standings.map(team=>(<li>{team}</li>))}

            </ol>: <p>Loading...</p>}
        </div>

        
        
    )
    
}

export default Standings
