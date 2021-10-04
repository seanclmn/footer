import React,{useEffect,useState} from 'react'
import axios from 'axios'

import './AddTeam.css'

function AddTeam(props) {
    const index = props.index
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
            setTeams(res.data[index].teams)
            setVal(res.data[index].teams.find(team => team[0]===id))
            console.log(res.data[index].teams.find(team => team[0]===id))
          })
        },[team])

    


    function add(){

        setJson(json[index].teams.push([id,teamName]))
        axios
            .put(`http://footerserver.herokuapp.com/api/users/${json[index]._id}`,json[index])
            .catch((err)=> console.log(err))
            .then(console.log(json))
        }
    
    function remove(){
        const thing = json[index].teams.indexOf([id,teamName])
        setJson(json[index].teams.splice(thing,1))
        axios
            .put(`http://footerserver.herokuapp.com/api/users/${json[index]._id}`,json[index])
            .catch((err)=> console.log(err))
            .then(console.log(json))
        }
    
    return (

        <div>
            {val!==undefined ?
            
                <button onClick={remove} className="remove_button">
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
