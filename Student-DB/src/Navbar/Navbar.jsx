import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


const Navbar = () => {
  return  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to ="/index" className="navbar-brand">Logo</Link>
    <div className='ms-auto'>
        <ul className='navbar-nav d-flex flex-row gap-3'>
            <li><Link to="/index" className="nav-link">Home</Link></li>
            <li><Link to="/courses" className="nav-link">Courses</Link></li>
            <li><Link to="/profile" className="nav-link">Profile</Link></li>
        </ul>
    </div>
  </nav>
}

export default Navbar