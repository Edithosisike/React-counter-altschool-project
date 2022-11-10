import '../App.css';
import React from 'react';
import { useState } from 'react'
import './Home.css'

function Home() {
  const [value, setValue ] = useState(0)

  

  return (
    
    <div className="home-page">
    <h1 className="react-counter">React Counter</h1>
       <p  className="react-counter">{value}</p>
      <button className="btn" onClick={() => setValue (value + 1)}>Increment</button>
      <button className="btn" onClick={() => setValue (value - 1)}>Decrement</button>
      <button className="btn" onClick={() => setValue (0)}>Reset</button>

    </div>
  
  )
}

export default Home