import {useContext, useState, useEffect} from 'react'
import '../../styles/forms.css'
import { UserContext } from '../../context/UserContext'


export default function Result() {

//context _______________________________________________________________________________
const {user, setUser} = useContext(UserContext)



// variables ____________________________________________________________________________

const {firstname,lastname,gender,age} = user

  return (
  <div>
    <h3>Your personal information</h3>
    <ul>
     <li>firstname: {firstname}</li> 
     <li>lastname:{lastname}</li> 
     <li>gender:{gender}</li> 
     <li>age:{age} years</li> 
    </ul>
  </div>
  )
}
