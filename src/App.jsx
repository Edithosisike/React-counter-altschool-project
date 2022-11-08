
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import CustomHook from './components/CustomHook';
import Usereducer from './components/Usereducer';
import Home from './components/Home';
import ErrorBound from './components/ErrorBound';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div>
      <Router>
        <Routes>
          
          <Route path='/' element={<Layout/>}>
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
