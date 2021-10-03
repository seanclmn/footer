import React,{useEffect,useState} from 'react'

import Match from './match/Match'
function Matches() {

    const leagues = ["SPAIN: La Liga","ITALY: Serie A","ENGLAND: Premier League","FRANCE: Ligue 1","GERMANY: Bundesliga","PORTUGAL: Liga Portugal","BRASIL: Serie A"]
    const [json,setJson]=useState([{}])
    const [videos,setVideos]=useState('')

    function fetch_matches(){

        const url ='https://www.scorebat.com/video-api/v3/'

        fetch(url)
            .then((res)=>res.json())
            .then(res=>{
                setJson(res.response.filter(object=>(leagues.includes(object.competition) && ('videos' in object))))
                setVideos(res.response.filter(object=>(leagues.includes(object.competition) && ('videos' in object))).map(object=>object.videos[0].embed.split('src=')[1].split(' ')[0].slice(1, -1)))
            })


    }

    useEffect(()=>{
        fetch_matches()

    },[])

    console.log(json)

    window.scrollTo(0, 0)

    return (
        <div className="matches">
                {json!==undefined ? json.map(match=><Match video = {videos[json.indexOf(match)]} object={match}/>): <p>hehe</p>}
                
                {/* <Match video = {videos[json.indexOf(json[0])]} object={json[0]}/> */}

        </div>
    )
}

export default Matches
