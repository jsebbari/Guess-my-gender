import {useContext, useState, useEffect, useRef} from 'react'
import '../../styles/forms.css'
import { UserContext } from '../../context/UserContext'
import BeatLoader from "react-spinners/BeatLoader"

export default function StepOneForm(props) {

//context _______________________________________________________________________________
const {user, setUser} = useContext(UserContext)

//ref ___________________________________________________________________________________
const firstnameRef =useRef()
//states ________________________________________________________________________________
const [errorMessage, setErrorMessage] = useState(null)
const [loadingResponseApi, setLoadingResponseApi] = useState(false)
const [lastnameValue,setLastnameValue] = useState("")
const [firstnameValue, setFirstnameValue] = useState ("")



//effects _______________________________________________________________________________
useEffect(() => {
    if(user){
    setFirstnameValue(user.firstname)
    setLastnameValue(user.lastname)
}

return firstnameRef.current.focus()

}, [])


// variables __________________________________________________________________________
const {setFormToDisplay} = props
const loader = <BeatLoader color="silver" loading={loadingResponseApi} size={10}/>



// functions ____________________________________________________________________________
const determineTheGender = async (userFirstname) => {
    setLoadingResponseApi(true)
  const response =await fetch(`https://api.genderize.io?name=${userFirstname}`)
  const convertResponse= await response.json()
  setLoadingResponseApi(false)
  const gender=  convertResponse.gender
  const probability=  convertResponse.probability

  return {gender:gender, probability:probability}}


const handleSubmit = async (e) => {
 e.preventDefault()
  if (lastnameValue === ""|| firstnameValue ===""){
     setErrorMessage("Please, complete all inputs")
  } else{
    setErrorMessage(null)
  
        const genderAndProbability= await  determineTheGender(firstnameValue)
        setUser({
                ...user,
                firstname:firstnameValue,
                lastname:lastnameValue,
                gender:genderAndProbability.gender,
                probability:genderAndProbability.probability 
            })
            setFormToDisplay(1)}
          
  }


    const handleFirstnameInput = (e)=> {
        setErrorMessage(null)
        setFirstnameValue(e.target.value)  
    }

    const handleLastnameInput = (e)=> {
        setErrorMessage(null)
        setLastnameValue(e.target.value)
    }

  return (
 <form  className='forms' onSubmit={handleSubmit}>
        {setErrorMessage!==null&& <p className='error-message'>{errorMessage}</p>}
        <input type="text" name="firstname" id="firstname" onChange ={handleFirstnameInput} ref={firstnameRef}  placeholder="Firstname*" value={firstnameValue} required/>
        <input type="text" name="lastname" id="lastname"  onChange ={handleLastnameInput}  placeholder="Lastname*" value ={lastnameValue} required/>
        <button  className='submit-button'>{loadingResponseApi?loader:"Next"}</button>
 </form>
  )
}
