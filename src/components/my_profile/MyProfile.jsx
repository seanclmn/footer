import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './MyProfile.css'
import {useAuth0} from '@auth0/auth0-react'

function MyProfile(props) {
    const index = props.index
    const [teams,setTeams]=useState([])
    const {user}= useAuth0()
    console.log(user)

    useEffect(()=>{
        axios
          .get('http://footerserver.herokuapp.com/api/users')
          .then(res=>{
            setTeams(res.data[index].teams)

          })
    },[])
    return (
        <div className="profile">
            <img src={user.picture}/>
            {user.email}
            {/* <p>Teams: {teams.map(team=><p>{team[1]}<br/></p>)}</p> */}

        </div>
    )
}

export default MyProfile