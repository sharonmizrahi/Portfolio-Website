import './Contact.css';
import ContactForm from './ContactForm';
import React, {useState} from 'react';
import {AiOutlineCopyright} from "react-icons/ai";


const Contact = () =>{

    const [isSubmit,setIsSubmit] = useState(false)

    const setIsSubmitHandler = () => {
        setIsSubmit(!isSubmit)
    }

    return (
     <div className='contact'>
          {isSubmit ?
              <div className='submit-true'>
                  <h2 className='submit-header'>Thank You For Your Message !</h2>
                  <p className='submit-p'>I'll response to you as soon as possible.</p> 
             </div> :
             <div className='contact-container'>
                 <div className='contact-header'>
                      <div className='contact-h1'>
                           <h1>CONTACT ME</h1>
                      </div>
                      <div className='contact-p'>
                           <p>send me your messege and i'll be happy to answer!</p>
                      </div>
                 </div>
                 <ContactForm onSetIsSubmit={setIsSubmitHandler} />
             </div>
            }
         <div className='copy-rights'>
             <AiOutlineCopyright />
             <p>2022 Tal Ben Magal</p>
         </div>
     </div>
    );
}


export default Contact