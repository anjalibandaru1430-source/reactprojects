import React from "react";
import {Link} from 'react-router-dom'
const Navbar=() => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/index" className="navbar-brand">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" width="100" height="40" />
        </Link>
        <form className="d-flex mx-auto w-50">
            <input className="form-control me-2" type="search" placeholder=" Search products..." />
            <button className="btn btn-warning" type="submit">Search</button>

        </form>
        <div className="ms-auto">
            <ul className="navbar-nav">
                <li><Link to = "/index" className="nav-link">Home</Link></li>
                <li><Link to = "/about"  className="nav-link">About</Link></li>
                <li><Link to = "/services" className="nav-link">Services</Link></li>
                <li><Link to = "/contact" className="nav-link">contact</Link></li>
            </ul>
        </div>
    </nav>

}
export default Navbar;