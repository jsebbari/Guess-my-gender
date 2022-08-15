import {useContext} from 'react'
import '../../styles/forms.css'
import "./Result.css"
import { UserContext } from '../../context/UserContext'


export default function Result() {

//context _______________________________________________________________________________
const {user} = useContext(UserContext)



// variables ____________________________________________________________________________

const {firstname,lastname,gender,age} = user

  return (
  <div className='result'>

    <ul>
     <li> <span className="label-list-result">Firstname</span><h5>{firstname}</h5></li> 
     <li>  <span className="label-list-result">Lastname</span><h5>{lastname}</h5></li> 
     <li>  <span className="label-list-result">Gender</span> <h5>{gender}</h5></li> 
     <li> <span className="label-list-result">Age</span> <h5>{age} years</h5></li> 
    </ul>
  </div>
  )
}
