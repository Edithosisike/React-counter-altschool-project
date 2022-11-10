
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CustomHook from './components/CustomHook';
import Usereducer from './components/Usereducer';
import Home from './components/Home';
import ErrorBound from './components/ErrorBound';
import Error from './components/Error';



function App() {
  return (

    
    <div>
      <Router>
          
        <Routes>
          
           <Route path='/' element={<Navbar/>}>
             <Route index element={<Home/>}/>
           <Route path='/customhook'  element={<CustomHook/>}/>
           <Route path='/usereducer'  element={<Usereducer/>}/>
           <Route path='/errorbound'  element={<ErrorBound/>}/>
           <Route path='*' element={<Error/>}/>
       </Route>
          
        </Routes>
        </Router>
    </div>
   
      
  );
}

export default App;
