import './App.css';
import FilingForm from "./Pages/FilingForm"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./Pages/login"
import Navbar from "./Pages/Navbar.js"
import Signup from "./Pages/signup"
import Search from "./Pages/search"
import ScratchCard from "./Pages/scratchCard"
function App() {
  // const p=MyForm();
  return (
    <Router>
       <div className="App">
        <Navbar/>
        <Routes>
        {/* <Route path='/' element={<FilingForm//>})} /> */}
        <Route path='/' element={<FilingForm/>}/>     {/*  This is working for multiple rendering*/}
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/scratchCard' element={<ScratchCard/>}/>
        </Routes>
        
       </div>
    </Router>
   
  );
}

export default App;
