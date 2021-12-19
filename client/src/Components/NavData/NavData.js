import React from 'react'
import './NavData.css'
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
export const NavData = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} className="Nav-Img"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#About">About</a>
        </li>
        <li classNameName="nav-item">
          <a className="nav-link active" aria-current="page" href="#Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Contact">Contact</a>
        </li>
        
      </ul>
      <form className="d-flex">
        
       <NavLink to="/#About"> <button className="btn btn-danger light" type="submit">Know More</button></NavLink>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
