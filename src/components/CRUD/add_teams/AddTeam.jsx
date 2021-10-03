import React,{useEffect,useState} from 'react'
import axios from 'axios'

import './AddTeam.css'

function AddTeam(props) {

    const id = props.id
    const teamName = props.teamName
    const[json,setJson]=useState([{}])
    const[val,setVal]=useState(undefined)
    const[team,setTeams]=useState([])

    useEffect(()=>{
        axios
          .get('http://footerserver.herokuapp.com/api/users')
          .then(res=>{
            setJson(res.data)
            setTeams(res.data[0].teams)
            setVal(res.data[0].teams.find(team => team[0]===id))
          })
        },[json])


    


    function add(){

        setJson(json[0].teams.push([id,teamName]))
        axios
            .put(`http://footerserver.herokuapp.com/api/users/${json[0]._id}`,json[0])
            .catch((err)=> console.log(err))
            .then(console.log(json))
        }
    
    function remove(){
        const index = json[0].teams.indexOf([id,teamName])
        setJson(json[0].teams.splice(index,1))
        axios
            .put(`http://footerserver.herokuapp.com/api/users/${json[0]._id}`,json[0])
            .catch((err)=> console.log(err))
            .then(console.log(json))
        }
    
    return (

        <div>
            {val!==undefined ?
            
                <button onClick={remove} className="add_button">
                    Remove Team
                </button>

                :

                <button onClick={add} className="add_button">
                    Add Team
                </button>
            }
        </div>
        
    )
}

export default AddTeam
