
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CustomHook from './components/CustomHook';
import Usereducer from './components/Usereducer';
import Home from './components/Home';
import ErrorBound from './components/ErrorBound';
import Error from './components/Error';
// import '../Home.css'


function App() {
  return (
    <div className="App">
      <main className="main-container">
       
        <a
          className="App-link"
          href="hhttps://www.w3schools.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn to Code
        </a>
      </main>
    <div>
      <Router>
        <Routes>
          
          <Route path='/' element={<Nav/>}>
             <Route index element={<Home/>}/>
           <Route path='/customhook'  element={<CustomHook/>}/>
           <Route path='/usereducer'  element={<Usereducer/>}/>
           <Route path='/errorbound'  element={<ErrorBound/>}/>
           <Route path='*' element={<Error/>}/>
       </Route>
          
        </Routes>
        </Router>
    </div>
      </div>
  );
}

export default App;
