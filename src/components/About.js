import React from 'react'
import "../my.css"
import Robo from "../images/spaceman.png"
export default function About() {
  return (
    <div className='container my-3 mycont'>
    <div className='row justify-content-centre align-items-centre'>
        <div className='col'>
          <h1 className="about-heading" style={{fontFamily:"Lobster,cursive"}}> ABOUT ME:-</h1>
         <h5 className='about-info' style={{fontWeight:"900"}}> I Am Anubhav Chakraborty,a web developer with familiarity in technologies such as <b style={{color:"yellow"}}>React JS</b> and <b style={{color:"yellow"}}>Django</b> and an aspiring Data Scientist With Interests 
         In Machine Learning And Cloud Technologies As Well.
          I Am Currently Doing My Bachelors In Computer Science And Engineering From 
          National Institute Of Technology Silchar.Before That I Have Done My Schooling And Plus 2
          From Holy Cross School And NHS Silchar Respectively.
          <br/><br/>

          Alongside that when I love playing games like lawn tennis,table tennis,boxing,cricket,swimming
          and so on in my freetime.Apart from that i am love to listen to music very much.
          Chainsmokers,Imagine Dragons,One Direction,The weeknd,Katy Perry are few of my favourite
          bands and musicians..
          


          
          </h5>
          <h1 className='about-heading my-4' style={{fontFamily:"Lobster,cursive"}}>Personal-Info:-</h1>
          <h6 className='about-info' style={{fontWeight:"800"}} >
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
        
  

       
    </div>
      
    </div>
  )
}
