import React from 'react'
import Typed from "react-typed";
import "../my.css"
export default function Header() {
  return (
    <div className='header-wrapper my-3'>
      <div className="main-info">
        <h1 >HIYA! WELCOME TO MY WEBSITE</h1>
        <Typed className='typed-text' strings={["Web Developer","Django Developer","React Developer"]}
            typeSpeed={40} backSpeed={40}
            loop
        />
      
      </div>
    </div>
  )
}
