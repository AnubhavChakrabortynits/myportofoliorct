import React from 'react'
import "../my.css"
import Robo from "../images/spaceman.png"
export default function About() {
  return (
    <div className='container my-3 mycont'>
    <div className='row justify-content-centre align-items-centre'>
        <div className='col-lg-5'>
          <h1 className="about-heading" style={{fontFamily:"Lobster,cursive"}}> ABOUT ME</h1>
         <h5 className='about-info'> I Am Anubhav Chakraborty,a web developer and an aspiring Data Scientist With Interests 
         In Machine Learning And Cloud Technologies As Well.
          I Am Currently Doing My Bachelors In Computer Science And Engineering From 
          National Institute Of Technology Silchar.Before That I Have Done My Schooling And Plus 2
          From Holy Cross School And NHS Silchar Respectively.
          
          </h5>
          <h1 className='about-heading my-4' style={{fontFamily:"Lobster,cursive"}}>Personal-Info</h1>
          <h6 className='about-info' >
            <ul >
                
                <li className="li-info">Name-Anubhav Chakraborty</li>
                <li className="li-info">Age-20</li>
                <li className="li-info">Address-Silchar,Assam,India</li>
                <li className="li-info">Phone-+91 9101872740</li>
                <li className="li-info" style={{textAlign:"justify"}}>Email-chakrabortyanubhav0@gmail.com</li>
                <li className="li-info">Languages-English,Hindi,Bengali</li>
              

            </ul>
          </h6>
        </div>
        
<div className="col-lg-6 robocont">
  <img src={Robo} id="robo" alt="" />
</div>
        

       
    </div>
      
    </div>
  )
}
