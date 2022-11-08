import '../App.css';
import React from 'react';
import { useState } from 'react'
import './Home.css'

function Home() {
  const [value, setValue] = useState(0)

  return (
    <>
    <div>
    <h1>React Counter</h1>
      <button className="btn" onClick={() => setValue (value + 1)}>Increment</button>
      <button className="btn" onClick={() => setValue (value - 1)}>Decrement</button>
      <button className="btn" onClick={() => setValue (0)}>Reset</button>
 <button className="btn" onClick={() => setValue (value * 2)}>Double</button>
    </div>
    </>
  )
}

export default Home