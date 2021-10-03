import React,{useEffect,useState} from 'react'
import axios from 'axios'

import './AddTeam.css'

function AddTeam(props) {

    const id = props.id
    const teamName = props.teamName
    const[json,setJson]=useState([{}])

    useEffect(()=>{
        axios
          .get('http://footerserver.herokuapp.com/api/users')
          .then(res=>{
            setJson(res.data)
          })
        },[json])
    
    function fetch(){
        const teams = json[0].teams
        const val = teams.find(team => team[0]===id)
        if(val===undefined){
            setJson(json[0].teams.push([id,teamName]))
            axios
                .put(`http://footerserver.herokuapp.com/api/users/${json[0]._id}`,json[0])
                .catch((err)=> console.log(err))
                .then(console.log(json))
        }
    }

    return (
        <button onClick={fetch} className="add_button">
            Add Team
        </button>
    )
}

export default AddTeam
