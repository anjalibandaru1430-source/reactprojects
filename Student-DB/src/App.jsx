import React from 'react'
import Navbar from './Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Profile from './Components/Profile';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>  
    </div>
  )
}

export default App;