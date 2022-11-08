import '../App.css';
import React from 'react'

const Usereducer = () => {
  return (
    <div>
      <h1>ReactJS useReducer Hook</h1>
      <p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</p>
       <p>The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</p>
       <p>Syntax:</p>
       <code>
       const [state, dispatch] = useReducer(reducer, initialArgs, init);
        </code>
        <p>Example: Here reducer is the user-defined function that pairs the current state with the dispatch method to handle the state, initialArgs refers to the initial arguments and init is the function to initialize the state lazily.</p>
       

    </div>
  )
}

export default Usereducer;