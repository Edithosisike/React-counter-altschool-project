import '../App.css';
import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div  className='app'>
        <ul className='nav'>
        
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/customhook'>CustomHook</Link></li>    
        <li><Link to='/usereducer'>Usereducer</Link></li>    
        <li><Link to='/errorbound'>Testerrorbound</Link></li>    
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout;