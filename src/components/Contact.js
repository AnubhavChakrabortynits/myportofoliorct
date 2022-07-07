import React from 'react'
import "../my.css"
export default function Contact() {

  
   document.addEventListener("contextmenu",(e)=>{
   // e.preventDefault();
      })
  return (
    <div className='container justify-content-centre align-items-centre mycontact' >
    


   
    <h2 class="h1-responsive font-weight-bold text-center my-4" style={{color:"yellow",textShadow:"2px 2px 10px violet",fontFamily:"Lobster,cursive"}}>Contact Me</h2>

   

    <div class="row">

       
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action={`https://formsubmit.co/chakrabortyanubhav0@gmail.com`} method="POST">

             
                <div class="row">

                  
                    <div class="col-md-6">
                        <div class="md-form mb-0">

                        <label id="myname" for="name" class="">Your name</label>
                            <input required type="text" id="name" name="name" class="form-control"/>
                           
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">

                        <label id="myemail" for="email" class="">Your email</label>
                            <input required type="text" id="email" name="email" class="form-control"/>
                            
                        </div>
                    </div>
                 

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">

                        <label id="mysubject" for="subject" class="">Subject</label>
                            <input required type="text" id="subject" name="subject" class="form-control"/>
                            
                        </div>
                    </div>
                </div>
               
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">

                        <label id="mymessage" for="message">Your message</label>
                            <textarea required type="text" id="message" name="message" rows="6" class="form-control md-textarea"></textarea>
                           
                        </div>
                        
                    </div>
                </div>
                
                <button className="mybutton" type="submit">Send</button>
            </form>

           
        </div>
      
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x text-danger"></i>
                    <p style={{color:"yellow",fontFamily:"Lobster,cursive"}}>Silchar,Assam,India</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x text-success"></i>
                    <p style={{color:"yellow",fontFamily:"Lobster,cursive"}}>+91 9101872740</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x text-primary"></i>
                    <p style={{color:"yellow",fontFamily:"Lobster,cursive"}}>chakrabortyanubhav0@gmail.com</p>
                </li>
            </ul>
        </div>
       

    </div>



    </div>
  )
}
