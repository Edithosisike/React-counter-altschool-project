import './Home.css'
import React from 'react'

const CustomHook = () => {
  return (
    <div className="custom-hook">
    <h1 className="custom-hook-head">Custom Hook</h1>
    <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components.</p>
     
     <p>Some major differences between a custom React JS hook and React JS components:</p>
     <ul>
      <li>A software developer can choose what argument the custom hook has and what should the argument return.</li>
      <li> A custom hook does not require a specific signature.</li>
       <li>A custom hook always starts with the name ‘use’</li>
     </ul>

      <h4>What are the advantages of using a custom React JS hook?</h4>
      <ol>
      <li>Reusability</li>
        <li>Testability</li>
        <li>Reusability</li>
        
      </ol>
         <button className="custom-hook-btn">
       <a
          className="Hook-link"
          href="https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn More About Custom Hook 
        </a></button>
    </div>
  )
}

export default CustomHook;