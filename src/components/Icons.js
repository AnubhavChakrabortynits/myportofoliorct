import React from 'react'
import { Link } from 'react-router-dom'
import "../my.css"
import Pic from "../images/Anubhav.jpg";

export default function Icons() {

   
  return (
  
 <div className='profile-container'>
<div className="profile-parent">
    <div className="profile-details">
        <div className="colz">
        <a className='mx-2 my-sm-0 my-1' href='https://www.facebook.com/anubhav.chakraborty.775'><i className="fa-brands fa-facebook fa-3x  icon" ></i></a>
        <a className='mx-2 my-sm-0 my-1 ' href='https://www.instagram.com/its_anubhav_99/'> <i className="fa-brands fa-instagram fa-square fa-3x text-danger icon"></i></a>
     <a className='mx-2 my-sm-0 my-1 ' href='https://www.linkedin.com/in/anubhav-chakraborty-44b042222/'><i className="fa-brands fa-linkedin-in fa-3x icon"></i></a>
     <a className="mx-2 my-sm-0 my-1" href='https://github.com/AnubhavChakrabortynits'><i class="fa-brands fa-3x giticon fa-github icon"></i></a>
     <a className="mx-2 my-sm-0 my-1" href='https://youtube.com/channel/UC_zV7BbU5_J227weWGBXqGg'><i class="fa-brands fa-youtube fa-3x text-danger icon"></i></a>
        </div>

  
    </div>
    <div className="profile-details-name container justify-content-centre" style={{textAlign:"center"}}>
        <h4 style={{textAlign:"centre",color:"yellow",fontFamily:"Lobster,cursive"}} className=" primary-text">
        Hello..I Am Anubhav,a web developer and an aspiring Data Scientist.
        
       
        </h4>
        <Link className='btn my-3' style={{color:"yellow",backgroundColor:"violet",
        fontFamily:" Lobster,cursive",fontWeight:"700"}} to="/contact"><h6>Contact Me</h6></Link>
        
    </div>

   
    
</div>


 
 </div> 

  )
}
