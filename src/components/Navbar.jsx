import React from 'react'
import logo from "../assets/logo.svg"
import "./styles/navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo-container"><img src={logo} alt='logo'/></span>
      <div className="nav-items-container">
        <span className="nav-item">Home</span>
        <span className="nav-item">Find Doctors</span>
        <span className="nav-item">About Us</span>
      </div>
      <div className="nav-button-container">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
    
  )
}

export default Navbar