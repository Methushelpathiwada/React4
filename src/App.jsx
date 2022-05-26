import React, { }  from 'react';
import './App.css';
import Students from './Fourthapp/Students'
import ContactUs from './Fourthapp/ContactUs'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Fourthapp/Home';


function App() {
  return (
    <BrowserRouter>
    
      <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div><Link to="/"><button className='btn btn-outline-success'>Home </button></Link></div>
          <div><Link to={'/students'}><button className='btn btn-outline-primary'>Student </button></Link></div>
          <div><Link to={'contactus'}><button className='btn btn-outline-warning'>Contact Us </button></Link></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;