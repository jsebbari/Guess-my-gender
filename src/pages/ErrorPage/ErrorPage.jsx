import React from 'react'
import {Link } from "react-router-dom";
import "./ErrorPage.css"
export default function ErrorPage() {
  return (
    <div className='error-page'>
        <div className="error-page-message">
        <h1>OUUUUUUPS</h1> 
        <p>I don't found your page</p>
        <Link to= "/" className='back-to-home-btn' >Back to home</Link>
    </div>
  </div> 
  )
}
