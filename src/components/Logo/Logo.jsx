import React from 'react'
import { BsGenderAmbiguous } from 'react-icons/bs';
import './Logo.css'

export default function Logo() {
  return (
    <div className='logo'>
    <h1>Guess my Gender </h1>
    <BsGenderAmbiguous size ={40}/>
    </div>
  )
}
