import '../App.css';
import './Home.css'
import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='error-404'>
        <h1 className='error-404__head'>404</h1>
          <p className='error-404__p'>The link you clicked may be broken or the page may have been removed or renamed.</p>
          <Link to='/' className='error-message__btn'>&larr; Go back</Link>
    </div>
  )
}

export default Error;