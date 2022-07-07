import React from 'react'
import Mylogo from "../images/canstockphoto22426193.jpg"
import "../my.css"
import { useLocation ,Link} from 'react-router-dom'
export default function Navbar() {

  const loc=useLocation();
  console.log(loc);
  return (
    <div className="navcont" style={{boxShadow:"1rem 1rem 2rem violet",width:"100%"}}>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
  <div className="container">
    <img src={Mylogo} className="navbar-brand mylogo" alt="logo" style={{
      width:"3rem",height:"3rem",borderRadius:"5rem"
    }}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className={`nav-link ${loc.pathname==="/"?"activa":""} itemnav`} aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className={`nav-link ${loc.pathname==="/about"?"activa":""}`} to="/about" tabindex="-1" aria-disabled="true">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${loc.pathname==="/skills"?"activa":""}`} to="/skills">Skills</Link>
        </li>
       
        <li className="nav-item">
          <Link className={`nav-link ${loc.pathname==="/projects"?"activa":""}`} to="/projects" tabindex="-1" aria-disabled="true">Links & Projects</Link>
        </li>
       
        <li className="nav-item">
          <Link className={`nav-link ${loc.pathname==="/contact"?"activa":""}`} to="/contact" tabindex="-1" aria-disabled="true">Contact Me</Link>
        </li>
      
      </ul>

    </div>
  </div>
</nav>
    </div>

  )



{/*        <div className='d-flex'>
     
    
        </div>
         */}
  
}
