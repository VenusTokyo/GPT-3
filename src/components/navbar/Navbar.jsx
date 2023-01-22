import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from "../../assets/logo.svg"
//BEM css is Block Element Modifier
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt">What is GPT</a></p>
          <p><a href="#possibitilty">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        menu
      </div>
    </div>
  )
}

export default Navbar
