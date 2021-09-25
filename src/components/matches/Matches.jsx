import React,{useEffect,useState} from 'react'


function Matches() {

    const [url,setUrl]=useState('')
    const [matches,setMatches]=useState([{}])
    const [match,setMatch]=useState([{}])
    
    function fetch_matches(){

        const url ='https://api.football-data.org/v2/competitions/2019/standings'

        fetch(url,{
            headers: {'X-AUTH-TOKEN': '161a865ec39e410b8a2318a7bf71e260'}
        })
            .then((res)=>res.json())
            .then(res=>{
                console.log(res)
                setMatch(res)
            })


    }

    useEffect(()=>{

        fetch_matches()

    },[])


    return (
        <div>
            <p>
                {/* away team: {match.awayTeam.name}, home team: {match.homeTeam.name} */}
            </p>


        </div>
    )
}

export default Matches
