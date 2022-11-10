import '../App.css';
import './Home.css'
import React from 'react'

const Usereducer = () => {
  return (
    <div>
      <h1> useReducer Hook</h1>
      <p>In React, useReducer essentially accepts a reducer function that returns a single value: const [count, dispatch] = useReducer(reducer, initialState); The reducer function itself accepts two parameters and returns one value. The first parameter is the current state, and the second is the action.</p>
       
       <p>Syntax:</p>
       <code>
       const [state, dispatch] = useReducer(reducer, initialState);
        </code>
        <p>useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.</p>

      <h3>Difference between useState and useReducer Hook</h3>
      <ol>
      <li>useState is mostly used when types of states are number, boolean, and string. useReducer is used when types of states are objects ad arrays.</li> 
        
        <li> With useState we can handle only one or two-state transitions, but with useReducer, we can manage many state transitions.</li>
        </ol>
     <a
          className="reduer-link"
          href="https://reactjs.org/docs/hooks-reference.html#usereducer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Usereducer.
        </a>  

    </div>
  )
}

export default Usereducer;